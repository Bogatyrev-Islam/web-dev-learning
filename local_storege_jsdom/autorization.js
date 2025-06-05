document.forms.autorization.addEventListener("submit", function (event) {
  event.preventDefault();
});


document.forms.autorization.onsubmit = function () {
  let login = this.login.value;
  let password = this.password.value;
  
  let user = JSON.parse(localStorage.getItem(login))

    if (login === user.email && password === user.password) {
      // последний авторизованный аккаунт
      localStorage.setItem(`openAcc`, JSON.stringify(user))
      document.location.href = "profile.html";
    }else{
      document.getElementById("autError").textContent = "Неверный логин или пароль"
    }


    
  }

 
  
