// 헤더 부분의 검색 파트의 효과 
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click' , function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function (){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur',function (){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});


const thisyear = document.querySelector('.this-year');
thisyear.textContent = new Date().getFullYear(); 

