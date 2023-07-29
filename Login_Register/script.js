"use strict"

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.btn');
const registerLink = document.querySelector('.register-link');
const btnLogin = document.querySelector('.btn-login');
const btnClose = document.querySelector('.icon-close');

registerLink.addEventListener("click", ()=> (
    wrapper.classList.add('active')
));

loginLink.addEventListener("click", ()=> (
    wrapper.classList.remove('active')
));

btnLogin.addEventListener("click", ()=> (
    wrapper.classList.add('active-btn')
));

btnClose.addEventListener("click", ()=> {
    wrapper.classList.remove('active-btn')
});