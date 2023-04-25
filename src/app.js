import { addButtons } from './js/addButtons.js';
import { addLayout } from './js/addLayout.js';
import data from './js/data.json' assert { type: 'json' };

let language = 'en';
let isCapsLock = false;
let isShift = false;

addLayout();
addButtons(data, language, isCapsLock, isShift);

const textarea = document.querySelector('.textarea');
