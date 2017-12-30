import {Person} from './components/Person';

window.app = function () {
	let oleg = new Person('Oleg', 'Zaiats');

	console.log(oleg.fullName);
};

app();