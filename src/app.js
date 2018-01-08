/* eslint-disable template-curly-spacing */
import config from './config';
import rangesliderJs from '../node_modules/rangeslider-pure/dist/range-slider';
import serializerJs from '../node_modules/form-serialize';
import {TweenMax} from '../node_modules/gsap';
import i18next from 'i18next';

window.app = function () {
	const choices = [...document.getElementsByClassName('pick')],
		homepage = document.getElementById('homepage'),
		langs = [...document.getElementsByClassName('lang-select')],
		search = document.getElementById('search-results'),
		gender = document.querySelector('form').getAttribute('name');

	i18next.init(config.translation, function(err, t) {
		updateContent();
	});
	let buildAform = (forGender) => {
			/* eslint max-len: ["error", { "code": 150 }]*/
			const template =
				(data) => `
		<form name="${data.gender}" method="post" action="javascript:void(0)" id="main-data" >
			<div class="age">
                <div class="four">
                    <h4>Age <output id="age-out">${data.age}</output></h4>
                </div>
                <div class="eight">
                    <div class="slidecontainer">
                        <input type="range" name="age" min="14" max="70" value="${data.age}" class="slider" id="age" data-out="age-out">
                    </div>
                </div>
            </div>		
            <div class="height">
                <div class="four columns">
                    <h4>Height (cm) <output id="height-out">${data.height}</output></h4>
                </div>
                <div class="eight">
                    <div class="slidecontainer">
                        <input type="range" name="height" min="140" max="220" value="${data.height}" class="slider" id="height" data-out="height-out">
                    </div>
                </div>
            </div>		
            <div class="haircolor">
				<div class="four">
					<h4>Haircolor</h4>
				</div>
				<div class="eight">
					<select name="haircolor">
						${data.haircolor.map((color, index) => `
							<option value="${index}">${color}</option>
						`).join('')}						
					</select>
				</div>
			</div>
			<div class="hairlength">
                <div class="four">
                    <h4>Hairlength</h4>
                </div>
                <div class="eight">
                    <div class="justified">
                        <nav class="segmented">
                        ${data.hairlength.map((length, index) => `
							<input type="radio" name="hair" value="${index}" id="${length}" ${ index !== 0 ? '' : 'checked="checked"'}">
                            <label for="${length}">
	                            ${ data.gender !== 'male' ? `<img src='assets/${length}.png'>` : length}
                            </label>
						`).join('')}
                        </nav>
                    </div>
                </div>
            </div>
            <div class="eyecolor">
                <div class="four">
                    <h4>Eyecolor</h4>
                </div>
                <div class="eight">
                	${data.eyecolor.map((eye, index) => `
							<label class="inline-radio">
								<input type="radio" name="eyecolor" value="${index}" ${ index !== 0 ? '' : 'checked="checked"'}>
								<span class="label-body">${eye}</span>
							</label>
						`).join('')}
                </div>
            </div>
			<div class="feature">
				<div class="four">
					<h4>${ data.gender !== 'male' ? 'BoobSize' : 'Beard'}</h4>
				</div>
				<div class="eight">
					<div class="justified">
						<nav class="segmented">
							${data.feature.map((type, index) => `
							<input type="radio" name="feature" value="${index}" id="${type}" ${ index !== 0 ? '' : 'checked="checked"'}>
							<label for="${type}">
								<img src="/assets/${type}.png" alt="none">
							</label>
							`).join('')}
						</nav>
					</div>
				</div>
			</div>
			<div class="body">
				<div class="four">
					<h4>${ data.gender !== 'male' ? 'Figure' : 'Body'}</h4>
				</div>
				<div class="eight">
					 ${data.gender !== 'male' ? `  
						<select name="body">
							${data.body.map((quality) => `
								<option>${quality}</option>
							`).join('')}						
						</select>` : `<div class="justified">
							<nav class="segmented">
								${data.body.map((figure, index) => `
								<input type="radio" name="body" value="${index}" id="${figure}" ${ index !== 0 ? '' : 'checked="checked"'}>
								<label for="${figure}">
									<img src="/assets/${figure}.png" alt="${figure}">
								</label>
								`).join('')}
							</nav>
						</div>
					 `}
					
				</div>
			</div>

            <div class="row">
                <div class="twelve">
                    <input type="hidden" name="gender" value="${data.gender}">
                    <button type="submit" class="button" id="calculate">calculate</button>
                </div>
            </div>
        </form>
		`;

return template(config[forGender]);
		},
	startCounter = (value) => {
		const counter = {var: 0};
		const tal = document.getElementById('total');
		TweenMax.to(counter, 4, {
			var: value,
			onUpdate () {
				tal.innerHTML = Math.ceil(counter.var);
			},
			ease: Power1.easeInOut
		});
	},
	getWhatYouWorth = (data) => {
		let result = 0;
		for(let i in config.results){
			let x = closestMax(config.results[i].criteria, data[i]),
				index = config.results[i].criteria.indexOf(x),
				y = config.results[i].koef[index]
			result += y;
		}

		if (data.gender === 'female') {
			result *= 1.3
		}
		localStorage.setItem('gender', JSON.stringify(data.gender))
		updateContent()
		startCounter(result);
	},
	emulateSubmit = () => {
		document.getElementById('calculate').addEventListener('click', (evt) => {
			evt.preventDefault();
			const form = document.getElementById('main-data'),
				mainData = serializerJs(form, {hash: true});
			homepage.style.display = 'none';
			search.style.display = 'block';
			getWhatYouWorth(mainData);
		});
	},
	initContent = (content, gender) => {
		homepage.innerHTML = '';
		homepage.insertAdjacentHTML('beforeend', content);

		let lng = JSON.parse(localStorage.getItem('lng'));
		i18next.changeLanguage(lng);

		document.getElementById('default').style.display = 'none';
		[...document.querySelectorAll('.gender')].forEach((x) => x.innerHTML = gender);
		document.getElementById('user-choice').style.display = 'block';
		rangesliderJs.create(document.getElementById('age'), config.rangeSlider);
		rangesliderJs.create(document.getElementById('height'), config.rangeSlider);
		emulateSubmit();
	};

	/*TODO move to a method */
	for(let i of choices){
		i.addEventListener('click', (evt) => {
			const gender = evt.target.closest('a').dataset.gender,
				content = buildAform(gender);
			initContent(content, gender);
		})
	}
	for(let i of langs){
		i.addEventListener('click', (evt) => {
			const lang = (evt.target.closest('a').dataset.lang);
			localStorage.setItem('lng', JSON.stringify(lang))
			i18next.changeLanguage(lang);
		});
	}

	function closestMax(arr, closestTo){
		let closest = Math.max.apply(null, arr);
		for(let i = 0; i < arr.length; i++){
			if(arr[i] >= closestTo && arr[i] < closest) closest = arr[i];
		}
		return closest;
	}

	function updateContent() {

		document.getElementById('default').innerHTML = i18next.t('key');
		if(document.querySelector('.main-explanation')){
			document.getElementsByClassName('main-explanation')[0].innerHTML = i18next.t('more');
			[...document.querySelectorAll('.pick span')].forEach(function(x, i){
				x.innerHTML = i18next.t(`option-${i}`);
			})
		}
		if(document.getElementById('main-data')){
			let gender = document.querySelector('input[name=gender]').value;
			document.querySelector('.age h4').innerHTML = i18next.t('age');
			document.querySelector('.height h4').innerHTML = i18next.t('height');
			document.querySelector('.haircolor h4').innerHTML = i18next.t('haircolor');
			document.querySelector('.hairlength h4').innerHTML = i18next.t('hairlength');
			document.querySelector('.feature h4').innerHTML = i18next.t(`feature-${gender}`);
			document.querySelector('.body h4').innerHTML = i18next.t(`body-${gender}`);
			document.querySelector('#calculate').innerHTML = i18next.t('calculate');
			document.getElementById('user-choice').innerHTML = i18next.t(`user-choice-${gender}`);
			document.querySelector('#back-again').innerHTML = i18next.t('back');
			document.querySelector('h2 .for-translation').innerHTML = i18next.t(`${gender}-answer`);
			document.querySelector('h2 .drinks').innerHTML = i18next.t('drinks');
		}
	}

	i18next.on('languageChanged', () => {
		updateContent();
	});

};

window.app();