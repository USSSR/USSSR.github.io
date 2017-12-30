import {Person} from './components/Person';

window.app = function () {
	const oleg = new Person('Oleg', 'Zaiats');
	console.log(oleg.fullName);
};

window.app();