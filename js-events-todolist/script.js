const input = document.querySelector("#input")
const photo = document.querySelector("#photo")
const btn = document.querySelector("#btn")
const result = document.querySelector("#result")
const total = document.querySelector("#total")
const listDefault = document.getElementById("listDefault")
const basket = document.getElementById("basket")
const openAndCloseBasket = document.getElementById("openAndCloseBasket")
let i = 0

let isBasketOpen = false
function toggleBasket() {
    isBasketOpen = !isBasketOpen;
    if(isBasketOpen) {
        openAndCloseBasket.textContent = "Закрыть сохраненные <__>"
        basket.style.display = "block";
    } else {
        openAndCloseBasket.textContent = "Открыть сохраненные <>"
        basket.style.display = "none";
    }
}
openAndCloseBasket.addEventListener("click", toggleBasket);

const container = document.createElement("div")


function checkI(value){
    if(value > 0){
        listDefault.style.display = "none"
    }else if(value === 0){
        listDefault.style.display = "block"
    }
}


btn.addEventListener('click', (e)=>{
    if (input.value === '') return
    createDeleteElements(input.value, photo.value)
    input.value = ''
    photo.value = ''
})


function createDeleteElements(value, value2){
    i++
    const li = document.createElement('li')
    const btn = document.createElement('button')
   
    const textAndPhoto = document.createElement("div")
    textAndPhoto.className = "textAndPhoto"
    const addPhoto = document.createElement("img")
    addPhoto.src = value2
    addPhoto.className = "stylePhoto"
    const text = document.createElement("p")
    text.textContent = value
    text.className = "text"
    textAndPhoto.appendChild(addPhoto)
    textAndPhoto.appendChild(text)

    // кнопка добавления в корзину
    const basketButton = document.createElement("i")
    basketButton.className = "fa-regular fa-bookmark"
    basketButton.textContent = " Сохранить"

    basketButton.addEventListener("click", function(){
        // Проверяем, есть ли уже такой элемент в container
        const existingItems = container.querySelectorAll('.text'); // Все текстовые элементы
        let isAlreadySaved = false;
        // Проходим по всем элементам и сравниваем текст
        existingItems.forEach(item => {
            if (item.textContent === value) {
                isAlreadySaved = true;
            }
        });
        if (isAlreadySaved) {
            alert("Этот элемент уже сохранен!");
            return; // Не добавляем снова
        }
        // Создаем упрощенную копию (без кнопок)
        const liCopy = document.createElement('li');
        liCopy.className = "li-copy"; // Можно добавить отдельный стиль
        const textAndPhotoCopy = textAndPhoto.cloneNode(true); // Копируем блок с текстом и фото
        liCopy.appendChild(textAndPhotoCopy);
        container.prepend(liCopy);
    })
    basket.appendChild(container)

    li.className = "li"

    btn.className = "btn"
    btn.textContent = "❌"
    li.appendChild(btn)
    li.appendChild(textAndPhoto)
    li.appendChild(basketButton)

    btn.addEventListener("click", (e)=>{
        i--
        if(i === null || i === undefined || i === ''){
            i = 0
        }
        total.textContent = i
        if(confirm("Вы точно хотите удалить выбранный элемент ? Отменить действие невозможно")){
            result.removeChild(li)
            checkI(i)
        }
    })

    textAndPhoto.addEventListener("click", (e)=>{
        li.classList.toggle('li-active')
    })
    
    total.textContent = i
    result.prepend(li)
    checkI(i)
}
