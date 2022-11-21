import Component from "./component";
import Transform from "./transform";

/**
 * Classe de agrupamento de componentes, aqui você pode adicionar todos
 * os comportamentos desejados para seu objeto na cena.
 * */
export default abstract class GameObject extends Component {

  private components: any[] = [];
  private states: IState[] = []

  public transform: Transform;

  constructor() {
    super();
    this.transform = this.addComponent(Transform);
  }

  /** Adiciona um novo componente a este gameObject  */
  public addComponent<T extends Component>(component: { new(...params: any): T }) {
    const comp = new component();
    this.components.push(comp);
    return comp;
  }

  /** Pega um componente pelo tipo */
  public getComponent<T extends Component>(componentType: { new(): T }): T {
    return this.components.find(component => (
      component.constructor.name === componentType.constructor.name
    ))
  }

  /** Busca por um estado com  o id  especificado */
  public getState(id: string) {
    return this.states.find(state => state.id == id);
  }
}