const cardsTable = document.getElementById("cardsTable");
const addCardForm = document.forms.addCardForm;
const viewCard = document.getElementById("viewCard")

addCardForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const cardData = {};
    // проверка на корректность номера
    if(addCardForm.elements[2].value.length < 16 || addCardForm.elements[2].value.length > 16){
        alert("Не корректный номер")
        return
    }
    // проверка на корректность месяц и год окончания карты
    if(addCardForm.elements[4].value.length < 5 || addCardForm.elements[4].value.length > 5){
        alert("Не корректно указан месяц/год")
        return
    }

    for (let i = 0; i < addCardForm.elements.length; i++) {
        let el = addCardForm.elements[i];
        if (el.name) {
            cardData[el.name] = el.value;
        }
    }
    const tr = document.createElement("tr");
    for (let key in cardData) {
        const td = document.createElement("td");
        td.textContent = cardData[key]; // лучше использовать textContent вместо innerHTML
        if(cardData[key] === "Сбер"){
                td.style.backgroundColor = "greenyellow"
            }else if(cardData[key] === "Тинькофф"){
                td.style.backgroundColor = "yellow"
            }else if(cardData[key] === "Альфа"){
                td.style.backgroundColor = "red"
            }
        tr.appendChild(td);
    }
    cardsTable.appendChild(tr);
    addCardForm.reset();
});

// визуализация
addCardForm.addEventListener("input", function(e){
    e.preventDefault();
    // название
    let namePhoto = document.getElementById("namePhoto")
    if (addCardForm.elements[0].value === "Сбер") {
        namePhoto.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Sberbank_Logo_2020.svg/450px-Sberbank_Logo_2020.svg.png"
        viewCard.style.background = "greenyellow"
    }else if(addCardForm.elements[0].value === "Тинькофф"){
        namePhoto.src = "https://toplogos.ru/images/logo-tinkoff-bank.png"
        viewCard.style.background = "yellow"
    }else if(addCardForm.elements[0].value === "Альфа"){
        namePhoto.src = "https://foni.papik.pro/uploads/posts/2024-10/thumbs/foni-papik-pro-dtys-p-kartinki-alfa-bank-logo-na-prozrachnom-fon-3.png"
        viewCard.style.background = "rgb(255, 99, 99)"
    }

    // номер карты
    // добавление отступов
    let correcterNumber = addCardForm.elements[2].value.slice(0, 4) + " " + addCardForm.elements[2].value.slice(4, 8) 
    + " " + addCardForm.elements[2].value.slice(8, 12) + " " + addCardForm.elements[2].value.slice(12, 16)
    const viewNumber = document.getElementById("viewNumber")
    viewNumber.innerHTML = correcterNumber

    // дата
    const viewDate = document.getElementById("viewDate")
    viewDate.innerHTML = addCardForm.elements[4].value.slice(0, 5)

    // имя и тип карты
    const viewUserName = document.getElementById("viewUserName")
    viewUserName.innerHTML = addCardForm.elements[3].value.slice(0, 20).toUpperCase()
    const typePhoto = document.getElementById("typePhoto")
    if (addCardForm.elements[1].value === "Мир") {
        typePhoto.src = "https://toplogos.ru/images/logo-mir.png"
    }else if (addCardForm.elements[1].value === "Visa") {
        typePhoto.src = "https://images.icon-icons.com/674/PNG/512/Visa_icon-icons.com_60549.png"
    }else if(addCardForm.elements[1].value === "PayPal") {
        typePhoto.src = "https://images.icon-icons.com/2342/PNG/512/paypal_payment_method_icon_142749.png"
    }

})