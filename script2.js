const textArea = document.getElementById('text');
const countSpan = document.getElementById('count');

textArea.addEventListener('input', () => {
  const count = textArea.value.length;
  countSpan.innerText = count;
});
