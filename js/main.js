
// Nav icon
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon');


navBtn.onclick = function () {
	nav.classList.toggle('nav--mobile')
	menuIcon.classList.toggle('menu-icon--active');
	document.body.classList.toggle('no-scroll');
};

let name = document.querySelector('#input'); // Получаем input
let regex = /[!@#$%^&*()]/; // регулярка только цифры
 
name.oninput = function(){
    this.value = this.value.replace(regex, '');
}