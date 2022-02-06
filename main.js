const screen = document.getElementById('inp');
const easterEggsCheckbox = document.getElementById('eeggs');
const thousandMinusSeven = document.getElementById('tms');
const pentagon = document.getElementById('pentagon');
let dots = 1;
let loops = 0;
let blinkLoops = 0;

let keys = {
	one: function() {
		if (screen.value != 0) {
			screen.value = screen.value + '1';
		} else {
			screen.value = '1';
		}
	},
	two: function() {
		if (screen.value != 0) {
			screen.value = screen.value + '2';
		} else {
			screen.value = '2';
		}
	},
	three: function() {
		if (screen.value != 0) {
			screen.value = screen.value + '3';
		} else {
			screen.value = '3';
		}
	},
	four: function() {
		if (screen.value != 0) {
			screen.value = screen.value + '4';
		} else {
			screen.value = '4';
		}
	},
	five: function() {
		if (screen.value != 0) {
			screen.value = screen.value + '5';
		} else {
			screen.value = '5';
		}
	},
	six: function() {
		if (screen.value != 0) {
			screen.value = screen.value + '6';
		} else {
			screen.value = '6';
		}
	},
	seven: function() {
		if (screen.value != 0) {
			screen.value = screen.value + '7';
		} else {
			screen.value = '7';
		}
		if (thousandMinusSeven.checked) {
			if ((screen.value == '1000-7') || (screen.value == 1000 - 7)) {
				screen.value = 1000;
				let gulTimer = setInterval(keys.gul, 200);
			}
		}
	},
	eight: function() {
		if (screen.value != 0) {
			screen.value = screen.value + '8';
		} else {
			screen.value = '8';
		}
		if (pentagon.checked) {
			if (screen.value == '666228') {
				keys.hack();
			}
		}
	},
	nine: function() {
		if (screen.value != 0) {
			screen.value = screen.value + '9';
		} else {
			screen.value = '9';
		}
	},
	zero: function() {
		if (screen.value != 0) {
			screen.value = screen.value + '0';
		} else {
			screen.value = '0';
		}
	},
	plus: function() {
		if (screen.value != 0) {
			screen.value = screen.value + '+';
		} else {
			screen.value = '+';
		}
	},
	minus: function() {
		if (screen.value != 0) {
			screen.value = screen.value + '-';
		} else {
			screen.value = '-';
		}
	},
	multiple: function() {
		if (screen.value != 0) {
			screen.value = screen.value + '*';
		} else {
			screen.value = '*';
		}
	},
	division: function() {
		if (screen.value != 0) {
			screen.value = screen.value + '/';
		} else {
			screen.value = '/';
		}
	},
	equals: function() {
		let problem = new Function(`return ${screen.value}`);
		screen.value = problem();
	},
	clear: function() {
		let newScreen = '';
		for (let i = 0; i < screen.value.length - 1; i++) {
			newScreen += screen.value[i];
		}
		screen.value = newScreen;
	},
	hackMain: function() {
		switch (dots) {
			case 1:
				screen.value = 'Hacking.';
				break;
			case 2:
				screen.value = 'Hacking..';
				break;
			case 3:
				screen.value = 'Hacking...';
		}

		if (dots <= 2) {
			dots++;
		} else {
			dots = 1;
		}

		loops++;
		if (loops <= 10) {
			var timer2 = setTimeout(keys.hackMain, 500);
		} else {
			clearTimeout(timer2);
			screen.value = 'PENTAGON WAS HACKED!';
			blinkLoops = 0;
			let endTimer = setTimeout(keys.hackEnd, 500);
		}
	},
	hackEnd: function() {
		blinkLoops++;
		if (blinkLoops >= 10) {
			screen.value = '';
		} else {
			if (screen.value == '') {
				screen.value = 'PENTAGON WAS HACKED!';
			} else {
				screen.value = '';
			}
			let blinkTimer = setTimeout(keys.hackEnd, 500);
		}
	},
	hack: function() {
		let startTimer = setTimeout(keys.hackMain, 500);
		loops = 0;
	},
	gul: function() {
		if (screen.value > 6) {
			screen.value = `${screen.value - 7}`;
		} else {
			clearInterval(keys.gulTimer);
		}
	},
};

function onCheckboxChange() {
	if (easterEggsCheckbox.checked) {
		pentagon.disabled = false;
		thousandMinusSeven.disabled = false;
	} else {
		pentagon.disabled = true;
		thousandMinusSeven.disabled = true;
		pentagon.checked = false;
		thousandMinusSeven.checked = false;
	}
}

function onMainCheckboxChange() {
	pentagon.checked = true;
	thousandMinusSeven.checked = true;
	onCheckboxChange();
}

function onLoad() {
	screen.value = '0';

}

function onScreenChange() {
	if (screen.value == '') {
		screen.value = 0;
		screen.style = ''
	}
}

function checkYOffset() {
	if (window.pageYOffset >= 49354) {
		alert('Пожалуй, отключу скролл: он явно тебе мешает :D');
		document.body.style.overflow = 'hidden';
		clearInterval(offsetCheckingTimer);
	}
}

document.addEventListener('DOMContentLoaded', onLoad);
let offsetCheckingTimer = setInterval(checkYOffset, 20);
// YOffset == 49354