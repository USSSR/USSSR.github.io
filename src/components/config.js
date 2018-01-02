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
	}
};
export default config;