//스크롤에 따른 애니메이션 효과 추가
const badgeEl = document.querySelector('header .badges');
const totopEl = document.querySelector('#to-top');


//브라우저의 하나의 탭// 
window.addEventListener('scroll' , _.throttle(function (){
    console.log(window.scrolly);
    if(window.scrollY > 500) {
        //배지 숨기기
        gsap.to(badgeEl, .6 , {
            opacity: 0, //시각적으로만 사라짐
            display: 'none' //문자로 입력 되는 값은 ''처리
        }); //to(요소 , 지속시간 , 옵션)

        gsap.to(totopEl, .6 ,{
            x: 0
        });

    }
    else {
        //배지 보이기
        gsap.to(badgeEl, .6 , {
            opacity: 1,
            display: 'block'
        });

        gsap.to(totopEl, .6 ,{
            x: 100
        });
    }
}, 300));
//_.throttle(함수 , 시간) 사용 할 함수를 시간의 단위로 쪼개어 실행 한다.
totopEl.addEventListener('click', function () {
    gsap.to(window, .7 , {
        scrollTo: 0
    });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl,1, {
        delay: (index+1) * .7,
        opacity: 1
    });
});

//슬라이드 애니메이션 javascript
new Swiper('.inner__left .swiper-container' , {
    direction: 'vertical',
    autoplay: true,
    loop: true
}); //new -> 생성자 클래스

new Swiper('.promotion .swiper-container',{
    //horizential 기본 값
    slidesPerView: 3,
    spacebetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});

//프로모션에서 upload icon 클릭시 프로모션 메뉴 페이지 변경
const promotionEl = document.querySelector('.promotion');
const promotiontogglebtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotiontogglebtn.addEventListener('click' , function(){
    isHidePromotion = !isHidePromotion //값을 반대로 전환 
    if(isHidePromotion){
        //숨김 처리
        promotionEl.classList.add('hide');
    }
    else{
        //보임 처리
        promotionEl.classList.remove('hide');
    }
});

//아 이거 하다가 말아 버렸다. 이미지요소 상하 애니메이션 추가 
function floatingobject(selector) {
    gsap.to(selector , 1 ,{
        y:20,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: 1
    })
};

//scroll magic js framework 스크립트 
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
     new ScrollMagic
        .Scene({
            triggerElement: spyEl,  //보여짐의 여부를 감시할 요소
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

const thisyear = document.querySelector('.this-year');
thisyear.textContent = new Date().getFullYear(); 

