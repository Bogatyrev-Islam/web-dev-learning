//скрипт для раздела истрия
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const info = card.querySelector('.info');
    info.classList.remove('hidden');
  });

  card.addEventListener('mouseleave', () => {
    const info = card.querySelector('.info');
    info.classList.add('hidden');
  });
});


// Получаем ссылку на кнопку
const button = document.getElementById('myButton');

// Добавляем обработчик события 'click'
button.addEventListener('click', function() {
    // Вызываем alert при клике
    alert('Данная функция пока не доступна :(');
});


document.getElementById("button1").onclick = function() {
  alert("Данная функция пока не доступна :(");
};