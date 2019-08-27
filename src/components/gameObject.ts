import Engine from "../engine";

export default class GameObject {
	protected engine: Engine = Engine.Instance;

	constructor() {
		this.engine.add(this);
	}

	update = () => {
		console.log(this);
	}
}