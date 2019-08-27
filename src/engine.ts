import { Camera, Scene, OrthographicCamera, WebGLRenderer } from "three";

import GameObject from "./components/gameObject";
import { IComponent } from "./components/component";

export default class Engine {
  private static instance: Engine;
  public static get Instance() {
    if (!this.instance) this.instance = new Engine();
    return this.instance;
  }

  private gameObjects: IComponent[] = [];

  private renderer?: WebGLRenderer;
  private camera?: Camera;
  private scene?: Scene;

  /** Inicializa a game engine em um determinado elemento do dom */
  public setup = (root: HTMLElement) => {

    // Cria a cena
    this.scene = new Scene();

    // Cria a camera
    this.camera = new OrthographicCamera(
      window.innerWidth / 2 - 50,
      window.innerWidth / 2,
      window.innerHeight / 2 - 50,
      window.innerHeight / 2
    );
    this.camera.position.z = -5;
    this.scene.add(this.camera);

    // Cria o renderer
    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    root.appendChild(this.renderer.domElement);
  }

  /** Adiciona um novo componente */
  public add = (gameObject: GameObject) => {
    this.gameObjects.push(gameObject);
  }
}