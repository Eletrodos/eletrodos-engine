import { Mesh, Material, Geometry } from "three";
import Component from "./component";
import Engine from "../engine";

export default class MeshRenderer extends Component {
  private _engine = Engine.Instance;

  private mesh?: Mesh;
  public material?: Material;

  /** Cria uma nova mesh com base na geometria e material */
  public create = (geometry: Geometry, material: Material) => {
    this.mesh = new Mesh(geometry, material);
    this.material = material;

    this._engine.addRenderer(this.mesh);
  }
}