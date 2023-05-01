function controlListeners(toggle, arr) {
  if (toggle === 'remove') {
    arr.forEach((listener) => {
      document.removeEventListener(listener[0], listener[1]);
    });
  } else {
    arr.forEach((listener) => {
      document.addEventListener(listener[0], listener[1]);
    });
  }
}

function addElement(tagName, className) {
  const elem = document.createElement(tagName);
  elem.classList.add(className);
  return elem;
}

export { controlListeners, addElement };
