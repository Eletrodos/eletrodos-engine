import Engine from "../engine";
import { IComponent } from "./component";

export default class GameObject implements IComponent {
    start: () => void;
    update: () => void;
    protected engine: Engine = Engine.Instance;

    constructor() {
        this.engine.add(this);
    }
}