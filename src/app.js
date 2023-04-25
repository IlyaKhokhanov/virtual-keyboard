import { addButtons } from './js/addButtons.js';
import { addLayout } from './js/addLayout.js';
import data from './js/data.json' assert { type: 'json' };

let language = 'en';
let isCapsLock = false;
let isShift = false;
let caretPos = 0;

addLayout();
addButtons(data, language, isCapsLock, isShift);

export function addKeyboadActions() {
  const textarea = document.querySelector('.textarea');
  const buttons = Array.from(document.querySelectorAll('[data-code]'));

  document.addEventListener('keydown', keydownHandler);
  document.addEventListener('keyup', keyupHandler);

  caretPos = textarea.selectionEnd;
  let textareaLength = textarea.value.length;

  function keydownHandler(e) {
    e.preventDefault();

    const button = buttons.find((but) => but.dataset.code.includes(e.code));
    const ctrl = buttons.find((but) =>
      but.dataset.code.includes('ControlLeft')
    );
    const alt = buttons.find((but) => but.dataset.code.includes('AltLeft'));

    caretPos = textarea.selectionEnd;
    textareaLength = textarea.value.length;

    if (button) {
      button.classList.add('active');

      if (
        button.classList.contains('char') ||
        button.classList.contains('digit')
      ) {
        let startInput = textarea.value.slice(0, caretPos);
        let endInput = textarea.value.slice(caretPos, textareaLength);
        textarea.value = startInput + button.textContent + endInput;
      }

      if (button.dataset.code === 'Tab') {
        let startInput = textarea.value.slice(0, caretPos);
        let endInput = textarea.value.slice(caretPos, textareaLength);
        textarea.value = startInput + '  ' + endInput;
      }

      if (button.dataset.code === 'Enter') {
        let startInput = textarea.value.slice(0, caretPos);
        let endInput = textarea.value.slice(caretPos, textareaLength);
        textarea.value = startInput + '\n' + endInput;
      }

      if (button.dataset.code === 'Backspace') {
        let startInput = textarea.value.slice(0, caretPos - 1);
        let endInput = textarea.value.slice(caretPos, textareaLength);
        textarea.value = startInput + endInput;
      }

      if (button.dataset.code === 'Delete') {
        let startInput = textarea.value.slice(0, caretPos);
        let endInput = textarea.value.slice(caretPos + 1, textareaLength);
        textarea.value = startInput + endInput;
      }

      if (
        button.classList.contains('shift-right') ||
        button.classList.contains('shift-left')
      ) {
        document.removeEventListener('keydown', keydownHandler);
        document.removeEventListener('keyup', keyupHandler);

        isShift = true;
        addButtons(data, language, isCapsLock, isShift);
      }

      if (
        ctrl.classList.contains('active') &&
        alt.classList.contains('active')
      ) {
        document.removeEventListener('keydown', keydownHandler);
        document.removeEventListener('keyup', keyupHandler);

        language = language === 'en' ? 'ru' : 'en';
        addButtons(data, language, isCapsLock, isShift);
      }
    }
  }

  function keyupHandler(e) {
    e.preventDefault();
    const button = buttons.find((but) => but.dataset.code.includes(e.code));

    if (button.dataset.code === 'CapsLock') {
      document.removeEventListener('keydown', keydownHandler);
      document.removeEventListener('keyup', keyupHandler);

      isCapsLock = isCapsLock ? false : true;
      addButtons(data, language, isCapsLock, isShift);
    } else {
      button.classList.remove('active');
    }

    if (
      button.dataset.code === 'ShiftLeft' ||
      button.dataset.code === 'ShiftRight'
    ) {
      document.removeEventListener('keydown', keydownHandler);
      document.removeEventListener('keyup', keyupHandler);

      isShift = false;
      addButtons(data, language, isCapsLock, isShift);
    }
  }
}
