export function addButtons(data, language, capsLock, shift) {
  const keyboard = document.querySelector('.keyboard');

  keyboard.innerHTML = '';

  data.forEach((item) => {
    const key = document.createElement('div');
    key.classList.add('key');
    key.dataset.code = item.code;
    if (item.type === 'char' || item.type === 'digit') {
      key.classList.add(item.type);
    }
    if (item.class) {
      item.class.forEach((classItem) => {
        key.classList.add(classItem);
      });
    }
    if (shift) {
      key.textContent = language === 'en' ? item.shift.en : item.shift.ru;
    } else if (capsLock) {
      key.textContent = language === 'en' ? item.caps.en : item.caps.ru;
    } else {
      key.textContent = language === 'en' ? item.value.en : item.value.ru;
    }

    keyboard.append(key);
  });
}
