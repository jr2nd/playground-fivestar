let stars = document.querySelectorAll('.star');

stars.forEach(addListeners);

function addListeners(value, index, array) {
  array[index].addEventListener('click', function() {
    for (let i = 0; i < array.length; i++) {
      i <= index
        ? array[i].classList.add('checked')
        : array[i].classList.remove('checked');
    }
  });
}
