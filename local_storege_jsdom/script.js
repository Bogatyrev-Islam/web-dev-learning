// контейнер с картами товара
let cards = document.getElementById("cards");

// загрузка карточек
let loadingCards = document.createElement("i")
loadingCards.className = "fa-solid fa-circle-notch"
loadingCards.id = "loadingCards"
cards.appendChild(loadingCards)

// асинхронная функция 
async function getCard() {
// тут хранятся данные карточки - date
    let date;
    await fetch('https://676f8fc5b353db80c322ff2f.mockapi.io/catalogPC')
    .then((response) =>  response.json().then((value)=> (date = value)))
    console.log(date);
    
    date.map((product) => {
        let cardProduct = `
        <div class="card">
            <div class="card__top">
                <div class="card__image">
                    <img src=${product.image}></img>
                    <div class="card__label">10%</div>
                </div>
            </div>
            <div class="card__bottom">
                <div class="card__prices">
                    <div class="card__price card__price--discount">${product.price}</div>
                    <div class="card__price card__price--common">${product.price}</div>
                </div>
                <a href="#" class="card__title">${product.name}</a>
                <button class="card__add">В корзину</button>
            </div>
        </div>
        `
    // удаление индикатора загрузки
    loadingCards.remove()
    // помещение карточек в контейнер
    cards.innerHTML += cardProduct;
    
    });
    
}
getCard()


// переход в аккаунт
 let allAccBar = document.getElementById("allAccBar")

function funcHrefProfile() {
    if(localStorage.getItem("openAcc")){
        document.location.href = "profile.html"; 

    }else{
        for (let key in localStorage) {

            if (localStorage.hasOwnProperty(key)) {
              let accElem = document.createElement("button")
              accElem.onclick = changeAcc
              accElem.textContent = key
              accElem.id = "accElem" 
                
            // смена аккаунта
              function changeAcc() {
                localStorage.setItem(`openAcc`, JSON.stringify(JSON.parse(localStorage.getItem(key))))
                document.location.href = "profile.html";
            }
              allAccBar.appendChild(accElem)
            }
          }
          allAccBar.insertAdjacentHTML('beforeend', ' <a href="./registration.html">Добавить аккаунт</a>');
    }
} 

