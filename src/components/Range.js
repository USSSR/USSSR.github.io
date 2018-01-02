export default class Slider {
	constructor(slider, output) {
		this.x = document.getElementById(slider);
		this.y = document.getElementById(output);
	}

	init() {
		this.y.innerHTML = this.x.value;
		this.x.addEventListener('input', (evt) => this.y.innerHTML = evt.target.value);
	}
}

