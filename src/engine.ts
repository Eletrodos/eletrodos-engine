import { Camera, Scene, WebGLRenderer, Clock, Object3D, PerspectiveCamera } from "three";

import Time from "./time";
import Component from "./components/component";

export default class Engine {
  private static instance: Engine;
  public static get Instance() {
    if (!this.instance) this.instance = new Engine();
    return this.instance;
  }

  /** Objetos do game */
  private components: Component[] = [];

  private renderer: WebGLRenderer;
  private camera: Camera;
  private scene: Scene;
  private clock: Clock;

  constructor() {
    // Cria a cena
    this.scene = new Scene();

    // Cria a camera
    this.camera = new PerspectiveCamera(60, 60, 0, 500);

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
  public add = (component: Component) => {
    this.components.push(component);
  }

  /** Adiciona um novo objeto de renderização na engine */
  public addRenderer(object: Object3D) {
    this.scene.add(object);
  }

  /** Loop principal da engine, atualiza a cada frame */
  public update = () => {
    // Atualiza as informações de tempo da engine
    const delta = this.clock.getDelta();
    Time.deltaTime = delta
    Time.time += delta;

    // Atualiza os componentes
    this.components.forEach(component => component.update && component.update());
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.update);
  }
}