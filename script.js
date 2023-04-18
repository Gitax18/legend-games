const header = document.querySelector('.header');
const hamMenu = document.querySelector('.nav-ham');
const hamClose = document.querySelector('.nav-close');
const dropItem = document.querySelectorAll('.drop-item')
const navItem = document.querySelectorAll('.nav-item')
const download = document.querySelector('.nav-download')
const profilePic = document.querySelector('.profile-pic')

console.log(dropItem)

hamMenu.addEventListener('click', ()=>{
    header.classList.toggle('header-active')
})

hamClose.addEventListener('click', ()=>{
    header.classList.remove('header-active')
})


dropItem[0].addEventListener('click', ()=>{
    header.classList.remove('header-active')
})
dropItem[1].addEventListener('click', ()=>{
    header.classList.remove('header-active')
})
dropItem[2].addEventListener('click', ()=>{
    header.classList.remove('header-active')
})
dropItem[3].addEventListener('click', ()=>{
    header.classList.remove('header-active')
})
dropItem[4].addEventListener('click', ()=>{
    header.classList.remove('header-active')
})


navItem[0].addEventListener('click', ()=>{
    header.classList.remove('header-active')
})
navItem[1].addEventListener('click', ()=>{
    header.classList.remove('header-active')
})


download.addEventListener('click', ()=>{
    header.classList.remove('header-active')
})
profilePic.addEventListener('click', ()=>{
    header.classList.remove('header-active')
})

