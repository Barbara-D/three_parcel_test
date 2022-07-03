import * as THREE from "three";

class Camera extends THREE.PerspectiveCamera {
  constructor(fov, aspect) {
    super(fov, aspect);
    this.position.set(-1.8, 0.9, 2.7);
  }
}

export { Camera };
