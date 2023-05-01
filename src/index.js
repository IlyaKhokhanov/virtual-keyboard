import { addButtons } from './js/addButtons.js';
import { addLayout } from './js/addLayout.js';
import { controlListeners } from './js/utilits.js';
import data from './js/data.js';
import './style.css';

let language = localStorage.getItem('lang') || 'en';
let isCapsLock = false;
let isLeftShift = false;
let isRightShift = false;
let caretPos = 0;

addLayout();
addButtons(data, language, isCapsLock, isLeftShift, isRightShift);

export function addKeyboadActions() {
  const textarea = document.querySelector('.textarea');
  const buttons = Array.from(document.querySelectorAll('[data-code]'));
  const ctrl = buttons.find((but) => but.dataset.code.includes('ControlLeft'));
  const alt = buttons.find((but) => but.dataset.code.includes('AltLeft'));
  let listeners = [];

  let textareaLength = textarea.value.length;

  function keydownHandler(e) {
    e.preventDefault();

    const btn = buttons.find((but) => but.dataset.code.includes(e.code));

    textareaLength = textarea.value.length;
    caretPos = textarea.selectionStart;
    textarea.setSelectionRange(caretPos, caretPos);

    let startInput = textarea.value.slice(0, caretPos);
    let endInput = textarea.value.slice(caretPos, textareaLength);

    if (btn) {
      const btnCode = btn.dataset.code;

      btn.classList.add('active');

      if (btn.classList.contains('char') || btn.classList.contains('digit')) {
        textarea.value = startInput + btn.textContent + endInput;
      }

      if (btnCode === 'Tab') {
        textarea.value = `${startInput}  ${endInput}`;
      }

      if (btnCode === 'Enter') {
        textarea.value = `${startInput}\n${endInput}`;
      }

      if (btnCode === 'Backspace') {
        startInput = textarea.value.slice(0, caretPos - 1);
        textarea.value = startInput + endInput;
      }

      if (btnCode === 'Delete') {
        endInput = textarea.value.slice(caretPos + 1, textareaLength);
        textarea.value = startInput + endInput;
      }

      if (btn.classList.contains('shift-left')) {
        controlListeners('remove', listeners);

        isLeftShift = true;
        addButtons(data, language, isCapsLock, isLeftShift, isRightShift);
      }

      if (btn.classList.contains('shift-right')) {
        controlListeners('remove', listeners);

        isRightShift = true;
        addButtons(data, language, isCapsLock, isLeftShift, isRightShift);
      }
    }
  }

  function keyupHandler(e) {
    e.preventDefault();
    const btn = buttons.find((but) => but.dataset.code.includes(e.code));

    if (ctrl.classList.contains('active') && alt.classList.contains('active')) {
      controlListeners('remove', listeners);

      language = language === 'en' ? 'ru' : 'en';
      addButtons(data, language, isCapsLock, isLeftShift, isRightShift);

      localStorage.setItem('lang', language);
    }

    if (btn) {
      const btnCode = btn.dataset.code;

      if (btnCode === 'CapsLock') {
        controlListeners('remove', listeners);

        isCapsLock = !isCapsLock;
        addButtons(data, language, isCapsLock, isLeftShift, isRightShift);
      } else {
        btn.classList.remove('active');
      }

      if (btnCode === 'ShiftLeft') {
        controlListeners('remove', listeners);

        isLeftShift = false;
        addButtons(data, language, isCapsLock, isLeftShift, isRightShift);
      }

      if (btnCode === 'ShiftRight') {
        controlListeners('remove', listeners);

        isRightShift = false;
        addButtons(data, language, isCapsLock, isLeftShift, isRightShift);
      }
    }
  }

  function clickHandler(e) {
    e.preventDefault();
    const { target } = e;
    const targetCode = target.dataset.code;

    caretPos = textarea.selectionEnd;
    textareaLength = textarea.value.length;

    let startInput = textarea.value.slice(0, caretPos);
    let endInput = textarea.value.slice(caretPos, textareaLength);

    if (target) {
      if (
        target.classList.contains('char')
        || target.classList.contains('digit')
      ) {
        textarea.value = startInput + target.textContent + endInput;
      }

      if (targetCode === 'Tab') {
        textarea.value = `${startInput}  ${endInput}`;
      }

      if (targetCode === 'Enter') {
        textarea.value = `${startInput}\n${endInput}`;
      }

      if (targetCode === 'Backspace') {
        startInput = textarea.value.slice(0, caretPos - 1);
        textarea.value = startInput + endInput;
      }

      if (targetCode === 'Delete') {
        endInput = textarea.value.slice(caretPos + 1, textareaLength);
        textarea.value = startInput + endInput;
      }
    }
  }

  function mousedownHandler(e) {
    const { target } = e;

    if (target.classList.contains('shift-left')) {
      controlListeners('remove', listeners);

      isLeftShift = true;
      addButtons(data, language, isCapsLock, isLeftShift, isRightShift);
    }

    if (target.classList.contains('shift-right')) {
      controlListeners('remove', listeners);

      isRightShift = true;
      addButtons(data, language, isCapsLock, isLeftShift, isRightShift);
    }
  }

  function mouseupHandler(e) {
    const { target } = e;
    const targetCode = target.dataset.code;

    if (targetCode === 'CapsLock') {
      controlListeners('remove', listeners);

      isCapsLock = !isCapsLock;
      addButtons(data, language, isCapsLock, isLeftShift, isRightShift);
    }

    if (targetCode === 'ShiftLeft') {
      controlListeners('remove', listeners);

      isLeftShift = false;
      addButtons(data, language, isCapsLock, isLeftShift, isRightShift);
    }

    if (targetCode === 'ShiftRight') {
      controlListeners('remove', listeners);

      isRightShift = false;
      addButtons(data, language, isCapsLock, isLeftShift, isRightShift);
    }
  }

  listeners = [
    ['keydown', keydownHandler],
    ['keyup', keyupHandler],
    ['click', clickHandler],
    ['mousedown', mousedownHandler],
    ['mouseup', mouseupHandler],
  ];

  controlListeners('add', listeners);
}
