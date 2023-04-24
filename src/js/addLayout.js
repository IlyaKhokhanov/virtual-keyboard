export default function addLayout() {
  const main = document.createElement('main');
  main.classList.add('main');

  const header = document.createElement('h1');
  header.classList.add('header');
  header.textContent = 'RSS Virtual Keyboard';

  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = 'Клавиатура создана в операционной системе Windows';

  const language = document.createElement('p');
  language.classList.add('language');
  language.textContent = 'Для переключения языка комбинация: ctrl + alt';

  document.body.append(main);
  main.append(header, textarea, keyboard, description, language);
}
