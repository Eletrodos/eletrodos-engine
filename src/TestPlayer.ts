import GameObject from "./components/gameObject";
import Time from "./time";

export default class TestPlayer extends GameObject {
  public start() {
    console.log("start");
  };

  public update() {
    console.log(Time.time);
  };
}