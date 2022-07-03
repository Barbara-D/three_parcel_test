import "./style.css";
import * as THREE from "three";

console.log(THREE);

//Scene
const scene = new THREE.Scene();

//Blue cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshLambertMaterial({ color: 0xfb8e00 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// //Sizes
// const sizes = {
//   width: 800,
//   height: 600,
// };

//Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);
scene.add(camera);
camera.position.z = 3;
camera.position.y = 1.2;

// Set up lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(0, 20, 5); // x, y, z
scene.add(dirLight);

//Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
