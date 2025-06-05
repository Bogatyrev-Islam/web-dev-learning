document.forms.registration.addEventListener("submit", function (event) {
    event.preventDefault();
  });
  


  document.forms.registration.onsubmit = function(){
    // данные с формы
    let user = {
        name: this.name.value,
        surname: this.surname.value,
        number_phone: this.number_phone.value,
        email: this.email.value,
        password: this.password.value,
        address: this.address.value,
        photo: this.photo.value
    }
    // занята ли эта почта ?
    if (localStorage.getItem(user.email)) {
    document.getElementById("regError").textContent = "Аккаунт с такой почтой уже существует"
    }else{
    // сохраняем данные не локальное хранилище
    localStorage.setItem(`${user.email}`, JSON.stringify(user))
    // переход в аккаунт
    document.location.href = "autorization.html";
    }
  }; 