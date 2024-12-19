// Correct way to import from npm (this works with Vite)
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';



// Rest of your code...


const container = document.querySelector('#model-container');

// Scene setup
const scene = new THREE.Scene();


// Camera setup
const camera = new THREE.PerspectiveCamera(
  110, // Increased FOV for a wider view
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);
camera.position.set(0, 0.75, 5); // Move the camera farther back and slightly higher
camera.lookAt(0, 0, 0);

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.physicallyCorrectLights = true;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const desiredHeight = 500; // Set your desired height
const desiredWidth = desiredHeight * (window.innerWidth / window.innerHeight); // Maintain aspect ratio
renderer.setSize(desiredWidth, desiredHeight);


// Attach renderer to container
container.appendChild(renderer.domElement);

// Lighting setup
const ambientLight = new THREE.AmbientLight(0x404040, 60);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
directionalLight.position.set(2, 5, 5).normalize();
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffffff, 2, 100);
pointLight.position.set(-5, 3, 5);
scene.add(pointLight);

const hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(hemiLight);

// Load the GLTF model
const loader = new GLTFLoader();
let avatar, mixer, helloAction, idleAction;

loader.load(
  'ilias3D_hello.glb',
  (gltf) => {
    avatar = gltf.scene;
    avatar.position.set(0, -6, 0); 
    avatar.scale.set(5, 5, 5);
    scene.add(avatar);

// Animation setup
// Animation setup
mixer = new THREE.AnimationMixer(avatar);
const animations = gltf.animations;

// Look for "hello" and "idle" animations by name
helloAction = mixer.clipAction(animations.find((clip) => clip.name.toLowerCase() === 'hello'));
idleAction = mixer.clipAction(animations.find((clip) => clip.name.toLowerCase() === 'idle'));

// Ensure both animations exist before proceeding
if (helloAction && idleAction) {
  // Configure "hello" animation
  helloAction.loop = THREE.LoopOnce; // Play "hello" animation once
  helloAction.clampWhenFinished = true; // Hold the final frame after "hello"

  // Configure "idle" animation
  idleAction.loop = THREE.LoopRepeat; // Loop "idle" animation continuously
  idleAction.clampWhenFinished = false; // Do not hold the final frame of "idle"

  // Start with the "hello" animation
  helloAction.play();

  // Set up alternating animation logic with a delay
  mixer.addEventListener('finished', (e) => {
    if (e.action === helloAction) {
      // If "hello" finishes, transition to "idle"
      idleAction.reset();
      idleAction.crossFadeFrom(helloAction, 0.5, true); // Smooth transition
      idleAction.play();

      // Use setTimeout to wait 3 seconds before playing "hello" again
      setTimeout(() => {
        helloAction.reset();
        helloAction.crossFadeFrom(idleAction, 0.5, true); // Smooth transition
        helloAction.play();
      }, 1500); // 3-second delay
    }
  });
}
    animate(); // Start rendering
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
  },
  (error) => {
    console.error('An error occurred while loading the model:', error);
  }
);

// Add a shadow-receiving plane
const planeGeometry = new THREE.PlaneGeometry(500, 500);
const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -2.5;
plane.receiveShadow = true;
scene.add(plane);

// Environment map
const cubeTextureLoader = new THREE.CubeTextureLoader();
const envMap = cubeTextureLoader.load([
  'path_to_px.jpg',
  'path_to_nx.jpg',
  'path_to_py.jpg',
  'path_to_ny.jpg',
  'path_to_pz.jpg',
  'path_to_nz.jpg',
]);
scene.environment = envMap;
scene.background = envMap;

// Resize handling
function resizeRendererToDisplaySize() {
  const width = container.clientWidth;
  const height = container.clientHeight;

  if (renderer.domElement.width !== width || renderer.domElement.height !== height) {
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

// Animation loop
// function animate() {
//   requestAnimationFrame(animate);
//   resizeRendererToDisplaySize();
//   renderer.render(scene, camera);
// }
const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  resizeRendererToDisplaySize();

  const delta = clock.getDelta();
  if (mixer) mixer.update(delta);

  renderer.render(scene, camera);
}

// Start animation loop
animate();