import { Camera, Scene, OrthographicCamera, WebGLRenderer, Clock } from "three";

import GameObject from "./components/gameObject";
import Time from "./time";

export default class Engine {
  private static instance: Engine;
  public static get Instance() {
    if (!this.instance) this.instance = new Engine();
    return this.instance;
  }

  private gameObjects: GameObject[] = [];

  private renderer: WebGLRenderer;
  private camera: Camera;
  private scene: Scene;
  private clock: Clock;

  constructor() {
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

    // Cria o clock
    this.clock = new Clock();

    // Inicia o loop principal da engine
    this.update();
  }

  /** Inicializa a game engine em um determinado elemento do dom */
  public insertDomElement = (root: HTMLElement) => {
    root.appendChild(this.renderer.domElement);
  }

  /** Adiciona um novo componente */
  public add = (gameObject: GameObject) => {
    this.gameObjects.push(gameObject);
    gameObject.start();
  }

  /** Loop principal da engine, atualiza a cada frame */
  public update = () => {
    // Atualiza as informações de tempo da engine
    const delta = this.clock.getDelta();
    Time.deltaTime = delta
    Time.time += delta;

    // Atualiza os componentes
    this.gameObjects.forEach(gameObject => gameObject.update());
    requestAnimationFrame(this.update);

  }
}