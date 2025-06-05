let user = JSON.parse(localStorage.getItem("openAcc"))

let name = document.getElementById("name").textContent = `${user.name} ${user.surname}`
let name2 = document.getElementById("name2").textContent = `${user.name} ${user.surname}`
let number_phone = document.getElementById("number_phone").textContent = `${user.number_phone}`
let number_phone2 = document.getElementById("number_phone2").textContent = `${user.number_phone}`
let email = document.getElementById("email").textContent = `${user.email}`
let address = document.getElementById("address").textContent = `${user.address}`
let address2 = document.getElementById("address2").textContent = `${user.address}`

if (user.photo !== "") {
    document.getElementById("photo").src = `${user.photo}`
}else{
    document.getElementById("photo").src = "https://img.freepik.com/premium-vector/young-business-man-outerwear-gray-coat-scarf-round-avatar-face-icon_768258-3388.jpg"
}



