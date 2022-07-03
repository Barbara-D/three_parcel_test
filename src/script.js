import "./style.css";
import * as THREE from "three";
import { Camera } from "./fundamentals/camera.js";
import { Skybox } from "./fundamentals/skybox.js";

console.log(THREE);

//Scene
const scene = new THREE.Scene();

//Camera
const camera = new Camera(75, window.innerWidth / window.innerHeight);
scene.add(camera);

// Set up lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(0, 20, 5); // x, y, z
scene.add(dirLight);

const skybox = new Skybox();
scene.background = skybox.createTexture();

//Blue cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  // alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0xffffff, 0);

animate();

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
