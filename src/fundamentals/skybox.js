import * as THREE from "three";

class Skybox extends THREE.CubeTextureLoader {
  createTexture() {
    const texture = this.load([
      "./resources/posx.jpg",
      "./resources/negx.jpg",
      "./resources/posy.jpg",
      "./resources/negy.jpg",
      "./resources/posz.jpg",
      "./resources/negz.jpg",
    ]);
    return texture;
  }
}

export { Skybox };
