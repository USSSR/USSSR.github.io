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
	translation: {
		lng: 'en',
		gender: {
			male: {
				sex: 'boyfriend',
				feature: 'Beard',
				body: 'Body'
			},
			female: {
				sex: 'girlfriend',
				feature: 'BoobSize',
				body: 'Figure'
			}
		},
		debug: false,
		resources: {
			en: {
				translation: {
					"key": "Drinks Calculator",
					"more": "Here you can calculate how many camels your girlfriend or boyfriend is worth. But first we need some information about the person.",
					"option-0": "How many Drinks for your girlfriend?",
					"option-1": "How many Drinks for your boyfriend?",
					"user-choice-male": "How many Drinks for your boyfriend?",
					"user-choice-female": "How many Drinks for your girlfriend?",
					"age": "Age",
					"height": "Heoght (cm)",
					"eyecolor": "Eyecolor",
					"haircolor": "Haircolor",
					"hairlength": "Hairlength",
					"feature-male": "Beard",
					"feature-female": "BoobSize",
					"body-male": "Body",
					"body-female": "Figure",
					"calculate": "calculate",
					"back": "calculate",
					"male-answer":  "Your boyfriend is worth",
					"female-answer": "Your girlfriend is worth",
					"drinks": "drinks"
				}
			},
			de: {
				translation: {
					"key": "Getränke Calculator",
					"more": "Hier kannst du den Wert deiner Freundin, deines Freundes oder natürlich von dir selbst, in Kamelen berechnen. Hierzu benötigen wir aber erst ein paar Angaben zur Person.",
					"option-0": "Wie viele Getränke ist dein Freund wert?",
					"option-1": "Wie viele Getränke ist deine Freundin wert?",
					"user-choice-female": "Wie viele Getränke ist deine Freundin wert?",
					"user-choice-male": "Wie viele Getränke ist dein Freund wert?",
					"age": "Alter",
					"height": "Größe (cm)",
					"eyecolor": "Augenfarbe",
					"haircolor": "Haarlänge",
					"hairlength": "Haarlänge",
					"feature-male": "Bart",
					"feature-female": "Körbchengröße",
					"body-male": "Oberkörper",
					"body-female": "Figur",
					"calculate": "berechnen",
					"back": "Nochmal Berechnen?",
					"male-answer":  "Dein freund ist",
					"female-answer": "Deine freundin ist",
					"drinks": "getränke wert"
				}
			},
			ua: {
				translation: {
					"key": "Пий сто грам",
					"more": "Інстаграму на зло. Тут ви можете розрахувати, скільки спиртного ваша подруга чи хлопець вартує. Але спочатку нам потрібна деяка інформація про людину",
					"option-0": "Скільки стаканів твій друг бахне за раз",
					"option-1": "Скільки стаканів твоя подруга бахне за раз",
					"user-choice-male": `Скільки стаканів твій друг бахне за раз`,
					"user-choice-female": `Скільки стаканів твоя подруга бахне за раз`,
					"age": "Вік",
					"height": "Зріст (см)",
					"eyecolor": "Колір очей",
					"haircolor": "Колір волосся",
					"hairlength": "Довжина волосся",
					"feature-male": "Борода",
					"feature-female": "Груди",
					"body-male": "Торс",
					"body-female": "Фігура",
					"calculate": "рахувати",
					"back": "Давай Наливай!",
					"male-answer":  "Твій друг вартий",
					"female-answer": "Твоя подруга варта",
					"drinks": "стаканів алкоголю"
				}
			}
		}
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