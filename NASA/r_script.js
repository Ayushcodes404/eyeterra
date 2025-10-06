import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//=====================================================
// 1. SCENE SETUP
//=====================================================
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111122); // Dark blue space color

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(15, 10, 25);
camera.lookAt(0, 5, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//=====================================================
// 2. LIGHTING
//=====================================================
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(10, 20, 15);
scene.add(directionalLight);

//=====================================================
// 3. OBJECTS
//=====================================================
// Ground
const groundGeometry = new THREE.PlaneGeometry(100, 100);
const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.9, metalness: 0.1 });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2; // Rotate it to be flat
scene.add(ground);

// Rocket Model
const loader = new GLTFLoader();
let rocket; // A variable to hold our rocket model

loader.load(
    'models/r_Atlas.glb', // IMPORTANT: Make sure this path is correct!
    function (gltf) {
        rocket = gltf.scene;
        rocket.scale.set(0.5, 0.5, 0.5); 
        rocket.position.y = 0.5;         
        scene.add(rocket);
    },
    undefined, 
    function (error) {
        console.error('An error happened while loading the model:', error);
        alert('Could not load the rocket model. Check the file path and console for errors.');
    }
);

//=====================================================
// 4. SMOKE PARTICLE SYSTEM
//=====================================================
const particles = [];
const particleGroup = new THREE.Group();
scene.add(particleGroup);

function createParticle() {
    const particleGeometry = new THREE.SphereGeometry(0.2, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({
        color: 0xffa500,
        transparent: true,
        opacity: 0.8
    });
    const particle = new THREE.Mesh(particleGeometry, particleMaterial);

    if (rocket) {
        particle.position.x = rocket.position.x + (Math.random() - 0.5) * 0.5;
        particle.position.y = rocket.position.y - 0.5;
        particle.position.z = rocket.position.z + (Math.random() - 0.5) * 0.5;
    }

    const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.1,
        -0.2 - Math.random() * 0.2,
        (Math.random() - 0.5) * 0.1
    );

    particle.userData = { velocity, life: 1.0 };

    particles.push(particle);
    particleGroup.add(particle);
}

function updateParticles() {
    for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.userData.life -= 0.015;

        if (particle.userData.life <= 0) {
            particleGroup.remove(particle);
            particles.splice(i, 1);
            continue;
        }

        particle.position.add(particle.userData.velocity);
        particle.material.opacity = particle.userData.life;
    }
}

//=====================================================
// 5. ANIMATION LOOP AND LAUNCH LOGIC
//=====================================================
const clock = new THREE.Clock();
let launchStarted = false;
let launchTime = 0;

const ANIMATION_DURATION = 10; 
let animationComplete = false; 

// Start launch on click
window.addEventListener('click', () => {
    if (!launchStarted && rocket) { 
        launchStarted = true;
        launchTime = clock.getElapsedTime();
        const infoEl = document.getElementById('info');
        if (infoEl) infoEl.style.display = 'none';
    }
});

function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Redirect after animation completes
    if (elapsedTime > ANIMATION_DURATION && !animationComplete) {
        animationComplete = true; 
        console.log("Animation complete. Redirecting...");
        window.location.href = "index.html"; 
        return; 
    }

    if (launchStarted && rocket) {
        const timeSinceLaunch = elapsedTime - launchTime;
        rocket.position.y = 0.5 + 5 * Math.pow(timeSinceLaunch, 2);

        // Camera follows rocket
        camera.position.y = rocket.position.y + 10;
        camera.lookAt(rocket.position);

        // Smoke
        if (timeSinceLaunch < 15) {
            for (let i = 0; i < 5; i++) { 
                createParticle();
            }
        }
    }
    
    updateParticles();
    renderer.render(scene, camera);
}

//=====================================================
// 6. HANDLE WINDOW RESIZING
//=====================================================
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
