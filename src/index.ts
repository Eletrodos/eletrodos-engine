import Engine from "./engine";
import TestPlayer from "./TestPlayer";

const engine = Engine.Instance;
const root = document.getElementById("root")!;

engine.insertDomElement(root);

const player = new TestPlayer();