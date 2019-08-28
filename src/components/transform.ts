import Component from "./component";
import { Vector3 } from "three";

export default class Transform extends Component {

    public position = new Vector3(0, 0, 0);

    public update = () => {
        console.log(this.position);
    }
}