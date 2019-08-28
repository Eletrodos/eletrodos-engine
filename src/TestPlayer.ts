import GameObject from "./components/gameObject";
import Time from "./time";
import MeshRenderer from "./components/meshRenderer";
import { BoxGeometry, MeshBasicMaterial } from "three";

export default class TestPlayer extends GameObject {

  constructor() {
    super();
    console.log("start");
    const geometry = new BoxGeometry(1, 1);
    const material = new MeshBasicMaterial({ color: "red" });
    const meshRenderer = this.addComponent(MeshRenderer);

    meshRenderer.create(geometry, material);
  };

  public update = () => {
    console.log(Time.time);
  };
}