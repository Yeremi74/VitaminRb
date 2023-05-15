var swiper2 = new Swiper(".mySwiper", {

    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: false,
    keyboard: false,
});


var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: false,
    keyboard: false,
});


function next(e) {
 
} 




    const btn1 = document.querySelector('.btn1')
    const btn2 = document.querySelector('.btn2')
    const btn3 = document.querySelector('.btn3')
    const btn4 = document.querySelector('.btn4')
    const logo = document.querySelector('.logo')
    const respuestas =  document.querySelectorAll('.respuestas')
    
    for(let i = 0; i < respuestas.length; i++) {
        console.log(respuestas[i]);
        
        respuestas[i].addEventListener('click', () => {

        next()
        
        respuestas[i].classList.add('activo')        
        })
        
    }

