import Engine from "../engine";

export default interface IComponent {
  /** Chamado uma vez por frame*/
  update: () => void;
  /** Chamado quando o objeto é carregado */
  start: () => void;
}

/** 
 * Classe base de todos os componentes, 
 * aqui fazemos a comunicação interna com a game engine
 * e fornecemos todos os metodos necessarios 
 */
export default abstract class Component {
  private engine = Engine.Instance;

  constructor() {
    this.engine.add(this);
  }
}