const card = document.getElementById('auth-wrapper');
const car = document.getElementById('bmw-car'); // Get car element
const container = document.body;

// Mouse interaction handled in main block below

// ------------------------------------------------------------------
// CAR RACING THEME BACKGROUND (Synthwave Road) - DISABLED FOR VIDEO BG
// ------------------------------------------------------------------

/*
const scene = new THREE.Scene();
// Add fog to hide the horizon line (Golden/Dark theme)
scene.fog = new THREE.FogExp2(0x1a1a00, 0.15);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Camera Position: Low to the ground for racing feel
camera.position.y = 0.5;
camera.position.z = 5;

// ... (Rest of Three.js code omitted/commented for brevity) ...
// To re-enable, uncomment this block and the animate() call below
*/


// Animation Loop
// const speed = 0.8; // FASTER!

// State for toggle transition
let isSignUp = false;
// let targetCameraX = 0;
// let carBaseX = 0;

// Track Curve Simulation
// let trackTime = 0;
// let currentCurve = 0; // Fix: Declare currentCurve globally

// Expose toggle function globally
window.toggleAuth = function () {
    const wrapper = document.getElementById('auth-wrapper');
    wrapper.classList.toggle('toggled');
    isSignUp = !isSignUp;

    // Set target positions based on state
    // if (isSignUp) {
    //     targetCameraX = -1.5; // Shift camera left to follow "Welcome" panel
    //     carBaseX = 100; // Shift car right (opposite direction) for parallax
    // } else {
    //     targetCameraX = 0;
    //     carBaseX = 0;
    // }
};

// Mouse State
let mouseX = 0;
let mouseY = 0;

container.addEventListener('mousemove', (e) => {
    // Normalizing mouse position (-1 to 1)
    mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

    // Tilt the card
    if (card) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
});

// Render Loop Variables
// let currentCameraBaseX = 0;
// let currentCarBaseX = 0;

/*
function animate() {
    requestAnimationFrame(animate);
    
    // ... Animation logic ...
    
    renderer.render(scene, camera);
}

// Start Loop
animate();


// Handle Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
*/
