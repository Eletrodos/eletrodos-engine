import Engine from "../engine";

/**
 *  Classe principal dos componentes que serão adicionados a cena, 
 * herde esta classe para criar seu proprio objeto customizado 
 * */
export default abstract class GameObject {

  private engine: Engine = Engine.Instance;

  /** Chamado quando o objeto é construido na cena */
  abstract start: () => void;
  
  /** Chamado sempre que o objeto é renderizado */
  abstract update: () => void;

  constructor() {
    this.engine.add(this);
  }
}