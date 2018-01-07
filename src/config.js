const config = {
	rangeSlider: {
		polyfill: true,
			disabledClass: 'rangeSlider--disabled',
			rangeClass: 'rangeSlider',
			fillClass: 'rangeSlider__fill',
			bufferClass: 'rangeSlider__buffer',
			handleClass: 'rangeSlider__handle',
			startEvent: ['mousedown', 'touchstart', 'pointerdown'],
			moveEvent: ['mousemove', 'touchmove', 'pointermove'],
			endEvent: ['mouseup', 'touchend', 'pointerup'],
			vertical: false,
			min: null,
			max: null,
			step: null,
			value: null,
			buffer: null,
			stick: null,
			borderRadius: 0,
			onSlideEnd (value) {
				const outElement = document.getElementById(this.element.dataset.out);
				outElement.innerHTML = value;
		}
	},
	male: {
		gender: 'male',
		age: 22,
		height: 176,
		haircolor: ['blonde', 'brown', 'black', 'red', 'grey'],
		hairlength: ['long', 'middle', 'short', 'bald'],
		eyecolor: ['blue', 'green', 'brown', 'grey'],
		feature: ['beard-none', 'beard-small', 'beard-middle', 'beard-full'],
		body: ['muscle', 'normal', 'chubby']
	},
	female: {
		gender: 'female',
		age: 18,
		height: 168,
		haircolor: ['blonde', 'brown', 'black', 'red', 'grey'],
		hairlength: ['woman-long-hair', 'woman-middle-hair', 'woman-short-hair'],
		eyecolor: ['blue', 'green', 'brown', 'grey'],
		feature: ['boobs-a', 'boobs-b', 'boobs-c', 'boobs-d'],
		body: ['thin', 'sporty', 'normal', 'chubby', 'fat']
	},
	results: {
		age: {
			criteria: [14, 15, 18, 23, 28, 31, 41, 46, 51, 60, 70],
			koef: [11, 13, 15, 19, 17, 14, 10, 9, 8, 7, -11]
		},
		height: {
			criteria: [144, 149, 164, 169, 173, 180, 185, 195, 220],
			koef:     [1, 2, 5, 10, 11, 13, 9, 7, 1]
		},
		haircolor: {
			criteria: [0, 1, 2, 3, 4],
			koef:     [12, 10, 8, 2, 8]
		},
		hair: {
			criteria: [0, 1, 2, 3],
			koef:     [7, 25, 15, 10]
		},
		eyecolor: {
			criteria: [0, 1, 2, 3],
			koef:     [8, 6, 2, 4, 0]
		},
		feature: {
			criteria: [0, 1, 2, 3 ],
			koef:     [4, -1, 8, 6]
		},
		body: {
			criteria: [0, 1, 2, 3, 4],
			koef:     [7, 4, 0, 2, -2 ]
		},

	}
};
export default config;