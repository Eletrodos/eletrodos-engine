import { Camera, Scene, OrthographicCamera, WebGLRenderer } from "three";

import GameObject from "./components/gameObject";

export default class Engine {
  private static instance: Engine;
  public static get Instance() {
    if (!this.instance) this.instance = new Engine();
    return this.instance;
  }

  private gameObjects: GameObject[] = [];

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

    this.update();
  }

  /** Adiciona um novo componente */
  public add = (gameObject: GameObject) => {
    this.gameObjects.push(gameObject);
  }

  /** Loop principal da engine, atualiza a cada frame */
  public update = () => {
    this.gameObjects.forEach(gameObject => {
      gameObject.update();
    });
    requestAnimationFrame(this.update);
  }
}