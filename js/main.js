
document.addEventListener('DOMContentLoaded', () => {
document.querySelectorAll('[contenteditable=true]').forEach(element => {
  const storageKey = element.id || element.className;
  const savedContent = localStorage.getItem(storageKey);
  if (savedContent) {
    element.innerText = savedContent;
  }
  element.addEventListener('blur', () => {
    localStorage.setItem(storageKey, element.innerText);

    element.classList.add('animatedChange');
    
    element.addEventListener('animationend', () => {
      element.classList.remove('animatedChange');
    }, { once: true });
  });
});
});
