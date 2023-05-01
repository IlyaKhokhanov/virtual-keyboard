const data = [
  {
    type: 'char',
    code: 'Backquote',
    value: {
      en: '`',
      ru: 'ё',
    },
    shift: {
      en: '~',
      ru: 'Ё',
    },
    caps: {
      en: '`',
      ru: 'Ё',
    },
  },
  {
    type: 'digit',
    code: 'Digit1',
    value: {
      en: '1',
      ru: '1',
    },
    shift: {
      en: '!',
      ru: '!',
    },
    caps: {
      en: '1',
      ru: '1',
    },
  },
  {
    type: 'digit',
    code: 'Digit2',
    value: {
      en: '2',
      ru: '2',
    },
    shift: {
      en: '@',
      ru: '"',
    },
    caps: {
      en: '2',
      ru: '2',
    },
  },
  {
    type: 'digit',
    code: 'Digit3',
    value: {
      en: '3',
      ru: '3',
    },
    shift: {
      en: '#',
      ru: '№',
    },
    caps: {
      en: '3',
      ru: '3',
    },
  },
  {
    type: 'digit',
    code: 'Digit4',
    value: {
      en: '4',
      ru: '4',
    },
    shift: {
      en: '$',
      ru: ';',
    },
    caps: {
      en: '4',
      ru: '4',
    },
  },
  {
    type: 'digit',
    code: 'Digit5',
    value: {
      en: '5',
      ru: '5',
    },
    shift: {
      en: '%',
      ru: '%',
    },
    caps: {
      en: '5',
      ru: '5',
    },
  },
  {
    type: 'digit',
    code: 'Digit6',
    value: {
      en: '6',
      ru: '6',
    },
    shift: {
      en: '^',
      ru: ':',
    },
    caps: {
      en: '6',
      ru: '6',
    },
  },
  {
    type: 'digit',
    code: 'Digit7',
    value: {
      en: '7',
      ru: '7',
    },
    shift: {
      en: '&',
      ru: '?',
    },
    caps: {
      en: '7',
      ru: '7',
    },
  },
  {
    type: 'digit',
    code: 'Digit8',
    value: {
      en: '8',
      ru: '8',
    },
    shift: {
      en: '*',
      ru: '*',
    },
    caps: {
      en: '8',
      ru: '8',
    },
  },
  {
    type: 'digit',
    code: 'Digit9',
    value: {
      en: '9',
      ru: '9',
    },
    shift: {
      en: '(',
      ru: '(',
    },
    caps: {
      en: '9',
      ru: '9',
    },
  },
  {
    type: 'digit',
    code: 'Digit0',
    value: {
      en: '0',
      ru: '0',
    },
    shift: {
      en: ')',
      ru: ')',
    },
    caps: {
      en: '0',
      ru: '0',
    },
  },
  {
    type: 'char',
    code: 'Minus',
    value: {
      en: '-',
      ru: '-',
    },
    shift: {
      en: '_',
      ru: '_',
    },
    caps: {
      en: '-',
      ru: '-',
    },
  },
  {
    type: 'char',
    code: 'Equal',
    value: {
      en: '=',
      ru: '=',
    },
    shift: {
      en: '+',
      ru: '+',
    },
    caps: {
      en: '=',
      ru: '=',
    },
  },
  {
    type: 'spec',
    code: 'Backspace',
    class: ['spec', 'backspace'],
    value: {
      en: 'Backspace',
      ru: 'Backspace',
    },
    shift: {
      en: 'Backspace',
      ru: 'Backspace',
    },
    caps: {
      en: 'Backspace',
      ru: 'Backspace',
    },
  },
  {
    type: 'spec',
    code: 'Tab',
    class: ['spec', 'tab'],
    value: {
      en: 'Tab',
      ru: 'Tab',
    },
    shift: {
      en: 'Tab',
      ru: 'Tab',
    },
    caps: {
      en: 'Tab',
      ru: 'Tab',
    },
  },
  {
    type: 'char',
    code: 'KeyQ',
    value: {
      en: 'q',
      ru: 'й',
    },
    shift: {
      en: 'Q',
      ru: 'Й',
    },
    caps: {
      en: 'Q',
      ru: 'Й',
    },
  },
  {
    type: 'char',
    code: 'KeyW',
    value: {
      en: 'w',
      ru: 'ц',
    },
    shift: {
      en: 'W',
      ru: 'Ц',
    },
    caps: {
      en: 'W',
      ru: 'Ц',
    },
  },
  {
    type: 'char',
    code: 'KeyE',
    value: {
      en: 'e',
      ru: 'у',
    },
    shift: {
      en: 'E',
      ru: 'У',
    },
    caps: {
      en: 'E',
      ru: 'У',
    },
  },
  {
    type: 'char',
    code: 'KeyR',
    value: {
      en: 'r',
      ru: 'к',
    },
    shift: {
      en: 'R',
      ru: 'К',
    },
    caps: {
      en: 'R',
      ru: 'К',
    },
  },
  {
    type: 'char',
    code: 'KeyT',
    value: {
      en: 't',
      ru: 'е',
    },
    shift: {
      en: 'T',
      ru: 'Е',
    },
    caps: {
      en: 'T',
      ru: 'Е',
    },
  },
  {
    type: 'char',
    code: 'KeyY',
    value: {
      en: 'y',
      ru: 'н',
    },
    shift: {
      en: 'Y',
      ru: 'Н',
    },
    caps: {
      en: 'Y',
      ru: 'Н',
    },
  },
  {
    type: 'char',
    code: 'KeyU',
    value: {
      en: 'u',
      ru: 'г',
    },
    shift: {
      en: 'U',
      ru: 'Г',
    },
    caps: {
      en: 'U',
      ru: 'Г',
    },
  },
  {
    type: 'char',
    code: 'KeyI',
    value: {
      en: 'i',
      ru: 'ш',
    },
    shift: {
      en: 'I',
      ru: 'Ш',
    },
    caps: {
      en: 'I',
      ru: 'Ш',
    },
  },
  {
    type: 'char',
    code: 'KeyO',
    value: {
      en: 'o',
      ru: 'щ',
    },
    shift: {
      en: 'O',
      ru: 'Щ',
    },
    caps: {
      en: 'O',
      ru: 'Щ',
    },
  },
  {
    type: 'char',
    code: 'KeyP',
    value: {
      en: 'p',
      ru: 'з',
    },
    shift: {
      en: 'P',
      ru: 'З',
    },
    caps: {
      en: 'P',
      ru: 'З',
    },
  },
  {
    type: 'char',
    code: 'BracketLeft',
    value: {
      en: '[',
      ru: 'х',
    },
    shift: {
      en: '{',
      ru: 'Х',
    },
    caps: {
      en: '[',
      ru: 'Х',
    },
  },
  {
    type: 'char',
    code: 'BracketRight',
    value: {
      en: ']',
      ru: 'ъ',
    },
    shift: {
      en: '}',
      ru: 'Ъ',
    },
    caps: {
      en: ']',
      ru: 'Ъ',
    },
  },
  {
    type: 'char',
    code: 'Backslash',
    value: {
      en: '\\',
      ru: '\\',
    },
    shift: {
      en: '|',
      ru: '/',
    },
    caps: {
      en: '\\',
      ru: '\\',
    },
  },
  {
    type: 'spec',
    code: 'Delete',
    class: ['spec', 'delete'],
    value: {
      en: 'Del',
      ru: 'Del',
    },
    shift: {
      en: 'Del',
      ru: 'Del',
    },
    caps: {
      en: 'Del',
      ru: 'Del',
    },
  },
  {
    type: 'spec',
    code: 'CapsLock',
    class: ['spec', 'caps-lock'],
    value: {
      en: 'CapsLock',
      ru: 'CapsLock',
    },
    shift: {
      en: 'CapsLock',
      ru: 'CapsLock',
    },
    caps: {
      en: 'CapsLock',
      ru: 'CapsLock',
    },
  },
  {
    type: 'char',
    code: 'KeyA',
    value: {
      en: 'a',
      ru: 'ф',
    },
    shift: {
      en: 'A',
      ru: 'Ф',
    },
    caps: {
      en: 'A',
      ru: 'Ф',
    },
  },
  {
    type: 'char',
    code: 'KeyS',
    value: {
      en: 's',
      ru: 'ы',
    },
    shift: {
      en: 'S',
      ru: 'Ы',
    },
    caps: {
      en: 'S',
      ru: 'Ы',
    },
  },
  {
    type: 'char',
    code: 'KeyD',
    value: {
      en: 'd',
      ru: 'в',
    },
    shift: {
      en: 'D',
      ru: 'В',
    },
    caps: {
      en: 'D',
      ru: 'В',
    },
  },
  {
    type: 'char',
    code: 'KeyF',
    value: {
      en: 'f',
      ru: 'а',
    },
    shift: {
      en: 'F',
      ru: 'А',
    },
    caps: {
      en: 'F',
      ru: 'А',
    },
  },
  {
    type: 'char',
    code: 'KeyG',
    value: {
      en: 'g',
      ru: 'п',
    },
    shift: {
      en: 'G',
      ru: 'П',
    },
    caps: {
      en: 'G',
      ru: 'П',
    },
  },
  {
    type: 'char',
    code: 'KeyH',
    value: {
      en: 'h',
      ru: 'р',
    },
    shift: {
      en: 'H',
      ru: 'Р',
    },
    caps: {
      en: 'H',
      ru: 'Р',
    },
  },
  {
    type: 'char',
    code: 'KeyJ',
    value: {
      en: 'j',
      ru: 'о',
    },
    shift: {
      en: 'J',
      ru: 'О',
    },
    caps: {
      en: 'J',
      ru: 'О',
    },
  },
  {
    type: 'char',
    code: 'KeyK',
    value: {
      en: 'k',
      ru: 'л',
    },
    shift: {
      en: 'K',
      ru: 'Л',
    },
    caps: {
      en: 'K',
      ru: 'Л',
    },
  },
  {
    type: 'char',
    code: 'KeyL',
    value: {
      en: 'l',
      ru: 'д',
    },
    shift: {
      en: 'L',
      ru: 'Д',
    },
    caps: {
      en: 'L',
      ru: 'Д',
    },
  },
  {
    type: 'char',
    code: 'Semicolon',
    value: {
      en: ';',
      ru: 'ж',
    },
    shift: {
      en: ':',
      ru: 'Ж',
    },
    caps: {
      en: ';',
      ru: 'Ж',
    },
  },
  {
    type: 'char',
    code: 'Quote',
    value: {
      en: "'",
      ru: 'э',
    },
    shift: {
      en: '"',
      ru: 'Э',
    },
    caps: {
      en: "'",
      ru: 'Э',
    },
  },
  {
    type: 'spec',
    code: 'Enter',
    class: ['spec', 'enter'],
    value: {
      en: 'Enter',
      ru: 'Enter',
    },
    shift: {
      en: 'Enter',
      ru: 'Enter',
    },
    caps: {
      en: 'Enter',
      ru: 'Enter',
    },
  },
  {
    type: 'spec',
    code: 'ShiftLeft',
    class: ['spec', 'shift-left'],
    value: {
      en: 'Shift',
      ru: 'Shift',
    },
    shift: {
      en: 'Shift',
      ru: 'Shift',
    },
    caps: {
      en: 'Shift',
      ru: 'Shift',
    },
  },
  {
    type: 'char',
    code: 'KeyZ',
    value: {
      en: 'z',
      ru: 'я',
    },
    shift: {
      en: 'Z',
      ru: 'Я',
    },
    caps: {
      en: 'Z',
      ru: 'Я',
    },
  },
  {
    type: 'char',
    code: 'KeyX',
    value: {
      en: 'x',
      ru: 'ч',
    },
    shift: {
      en: 'X',
      ru: 'Ч',
    },
    caps: {
      en: 'X',
      ru: 'Ч',
    },
  },
  {
    type: 'char',
    code: 'KeyC',
    value: {
      en: 'c',
      ru: 'с',
    },
    shift: {
      en: 'C',
      ru: 'С',
    },
    caps: {
      en: 'C',
      ru: 'С',
    },
  },
  {
    type: 'char',
    code: 'KeyV',
    value: {
      en: 'v',
      ru: 'м',
    },
    shift: {
      en: 'V',
      ru: 'М',
    },
    caps: {
      en: 'V',
      ru: 'М',
    },
  },
  {
    type: 'char',
    code: 'KeyB',
    value: {
      en: 'b',
      ru: 'и',
    },
    shift: {
      en: 'B',
      ru: 'И',
    },
    caps: {
      en: 'B',
      ru: 'И',
    },
  },
  {
    type: 'char',
    code: 'KeyN',
    value: {
      en: 'n',
      ru: 'т',
    },
    shift: {
      en: 'N',
      ru: 'Т',
    },
    caps: {
      en: 'N',
      ru: 'Т',
    },
  },
  {
    type: 'char',
    code: 'KeyM',
    value: {
      en: 'm',
      ru: 'ь',
    },
    shift: {
      en: 'M',
      ru: 'Ь',
    },
    caps: {
      en: 'M',
      ru: 'Ь',
    },
  },
  {
    type: 'char',
    code: 'Comma',
    value: {
      en: ',',
      ru: 'б',
    },
    shift: {
      en: '<',
      ru: 'Б',
    },
    caps: {
      en: ',',
      ru: 'Б',
    },
  },
  {
    type: 'char',
    code: 'Period',
    value: {
      en: '.',
      ru: 'ю',
    },
    shift: {
      en: '>',
      ru: 'Ю',
    },
    caps: {
      en: '.',
      ru: 'Ю',
    },
  },
  {
    type: 'char',
    code: 'Slash',
    value: {
      en: '/',
      ru: '.',
    },
    shift: {
      en: '?',
      ru: ',',
    },
    caps: {
      en: '/',
      ru: '.',
    },
  },
  {
    type: 'char',
    code: 'ArrowUp',
    class: ['spec'],
    value: {
      en: '▲',
      ru: '▲',
    },
    shift: {
      en: '▲',
      ru: '▲',
    },
    caps: {
      en: '▲',
      ru: '▲',
    },
  },
  {
    type: 'spec',
    code: 'ShiftRight',
    class: ['spec', 'shift-right'],
    value: {
      en: 'Shift',
      ru: 'Shift',
    },
    shift: {
      en: 'Shift',
      ru: 'Shift',
    },
    caps: {
      en: 'Shift',
      ru: 'Shift',
    },
  },
  {
    type: 'spec',
    code: 'ControlLeft',
    class: ['spec'],
    value: {
      en: 'Ctrl',
      ru: 'Ctrl',
    },
    shift: {
      en: 'Ctrl',
      ru: 'Ctrl',
    },
    caps: {
      en: 'Ctrl',
      ru: 'Ctrl',
    },
  },
  {
    type: 'spec',
    code: 'MetaLeft',
    class: ['spec'],
    value: {
      en: 'Win',
      ru: 'Win',
    },
    shift: {
      en: 'Win',
      ru: 'Win',
    },
    caps: {
      en: 'Win',
      ru: 'Win',
    },
  },
  {
    type: 'spec',
    code: 'AltLeft',
    class: ['spec'],
    value: {
      en: 'Alt',
      ru: 'Alt',
    },
    shift: {
      en: 'Alt',
      ru: 'Alt',
    },
    caps: {
      en: 'Alt',
      ru: 'Alt',
    },
  },
  {
    type: 'char',
    code: 'Space',
    class: ['space'],
    value: {
      en: ' ',
      ru: ' ',
    },
    shift: {
      en: ' ',
      ru: ' ',
    },
    caps: {
      en: ' ',
      ru: ' ',
    },
  },
  {
    type: 'spec',
    code: 'AltRight',
    class: ['spec'],
    value: {
      en: 'Alt',
      ru: 'Alt',
    },
    shift: {
      en: 'Alt',
      ru: 'Alt',
    },
    caps: {
      en: 'Alt',
      ru: 'Alt',
    },
  },
  {
    type: 'char',
    code: 'ArrowLeft',
    class: ['spec'],
    value: {
      en: '◄',
      ru: '◄',
    },
    shift: {
      en: '◄',
      ru: '◄',
    },
    caps: {
      en: '◄',
      ru: '◄',
    },
  },
  {
    type: 'char',
    code: 'ArrowDown',
    class: ['spec'],
    value: {
      en: '▼',
      ru: '▼',
    },
    shift: {
      en: '▼',
      ru: '▼',
    },
    caps: {
      en: '▼',
      ru: '▼',
    },
  },
  {
    type: 'char',
    code: 'ArrowRight',
    class: ['spec'],
    value: {
      en: '►',
      ru: '►',
    },
    shift: {
      en: '►',
      ru: '►',
    },
    caps: {
      en: '►',
      ru: '►',
    },
  },
  {
    type: 'spec',
    code: 'ControlRight',
    class: ['spec', 'ctrl-right'],
    value: {
      en: 'Ctrl',
      ru: 'Ctrl',
    },
    shift: {
      en: 'Ctrl',
      ru: 'Ctrl',
    },
    caps: {
      en: 'Ctrl',
      ru: 'Ctrl',
    },
  },
];

export default data;
