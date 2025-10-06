import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// ## 1. BASIC SCENE SETUP
// =============================================
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // Black background

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 5, 20);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ## 2. LIGHTING
// =============================================
scene.add(new THREE.AmbientLight(0xffffff, 0.2));

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(10, 10, 5);
scene.add(directionalLight);

const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x0077ff, 0.8);
scene.add(hemisphereLight);

// ## 3. CREATE OBJECTS
// =============================================
let earth;
let capsule;
let thrusterMaterial;
const loader = new GLTFLoader();

// Earth
loader.load(
    './earth.glb',
    (gltf) => {
        earth = gltf.scene;
        earth.scale.set(5, 5, 5);
        scene.add(earth);
    },
    undefined,
    (error) => console.error('Error loading Earth:', error)
);

// Stars
const starVertices = [];
for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = (Math.random() - 0.5) * 2000;
    starVertices.push(x, y, z);
}
const starGeometry = new THREE.BufferGeometry();
starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
scene.add(new THREE.Points(starGeometry, starMaterial));

// Launch Particle System
const particleCount = 2000;
const particleGeometry = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
const pVelocities = [];

for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = 0;
    positions[i3 + 1] = 0;
    positions[i3 + 2] = 0;
    pVelocities.push(
        (Math.random() - 0.5) * 0.1,
        -Math.random() * 0.5,
        (Math.random() - 0.5) * 0.1
    );
}

particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
const particleMaterial = new THREE.PointsMaterial({
    size: 0.2,
    color: 0xffa500,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
    sizeAttenuation: true,
});
const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particleSystem);

// Capsule
loader.load(
    './rocket.glb',
    (gltf) => {
        capsule = gltf.scene;
        capsule.scale.set(0.25, 0.25, 0.25);
        capsule.position.set(0, 5, 0);
        scene.add(capsule);

        capsule.add(particleSystem); // Attach thruster
        capsule.traverse((child) => {
            if (child.isMesh && child.material && child.material.name === 'ThrusterGlow') {
                thrusterMaterial = child.material;
                thrusterMaterial.emissive = new THREE.Color(0xffa500);
                thrusterMaterial.emissiveIntensity = 0;
            }
        });

        console.log('Capsule model loaded successfully!');
    },
    undefined,
    (error) => console.error('Error loading capsule:', error)
);

// ## 4. ANIMATION LOOP
// =============================================
const clock = new THREE.Clock();
const ANIMATION_DURATION = 10;
let animationComplete = false;

function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    // Redirect after animation completes
    if (elapsedTime > ANIMATION_DURATION && !animationComplete) {
        animationComplete = true;
        console.log('Animation complete. Redirecting...');
        window.location.href = 'D:/NASA/index.html';
        return;
    }

    if (earth) {
        earth.rotation.y += 0.0005;
    }

    if (capsule) {
        // Smooth launch motion
        const acceleration = 0.3; // upward accel factor
        capsule.position.y += 0.5 * acceleration * elapsedTime * delta;

        const distanceToSurface = capsule.position.y - 5;
        const launchEffectEndDistance = 15;
        const intensityFactor = Math.max(0, 1 - distanceToSurface / launchEffectEndDistance);

        if (thrusterMaterial) {
            thrusterMaterial.emissiveIntensity = 3.0 * intensityFactor;
        }

        // Update particles
        const pPositions = particleGeometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            pPositions[i3] += pVelocities[i3];
            pPositions[i3 + 1] += pVelocities[i3 + 1];
            pPositions[i3 + 2] += pVelocities[i3 + 2];

            if (pPositions[i3 + 1] < -10) {
                pPositions[i3] = 0;
                pPositions[i3 + 1] = 0;
                pPositions[i3 + 2] = 0;
            }
        }
        particleGeometry.attributes.position.needsUpdate = true;
        particleSystem.visible = intensityFactor > 0;
        particleMaterial.size = 0.2 + intensityFactor * 0.4;

        // Camera follows capsule
        const cameraOffset = new THREE.Vector3(6, -2, 14);
        const cameraTarget = new THREE.Vector3();
        cameraTarget.copy(capsule.position).add(cameraOffset);
        camera.position.lerp(cameraTarget, 0.05);
        camera.lookAt(capsule.position);
    }

    renderer.render(scene, camera);
}

// ## 5. HANDLE WINDOW RESIZING
// =============================================
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
