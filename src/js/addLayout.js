import { addElement } from './utilits.js';

export function addLayout() {
  const main = addElement('main', 'main');

  const header = addElement('h1', 'header');
  header.textContent = 'RSS Virtual Keyboard';

  const textarea = addElement('textarea', 'textarea');

  const keyboard = addElement('div', 'keyboard');

  const description = addElement('p', 'description');
  description.textContent = 'Клавиатура создана в операционной системе Windows';

  const language = addElement('p', 'language');
  language.textContent = 'Для переключения языка комбинация: ctrl + alt';

  document.body.append(main);
  main.append(header, textarea, keyboard, description, language);
}
