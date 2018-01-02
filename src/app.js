import config from './components/config';
import Range from './components/Range';
import rangesliderJs from '../node_modules/rangeslider-pure/dist/range-slider';


window.app = function () {
	const ageSlider = document.getElementById('age'),
		heightSlider = document.getElementById('height');

	rangesliderJs.create(ageSlider, config.rangeSlider);
	rangesliderJs.create(heightSlider, config.rangeSlider);

	document.getElementsByClassName('button')[0].addEventListener('click', function(e){
		e.preventDefault();
		console.log(e);
	})

};
window.app();
