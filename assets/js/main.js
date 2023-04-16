
// GUARDA LOS ELEMENTOS DEL HTML
const main_img = document.querySelector('.main_img')
const thumbnails = document.querySelectorAll('.thumbnails')


// RECORRE LOS 4 ELEMENTOS THUMB REPRESENTA A CADA ELEMENTO
thumbnails.forEach(thumb =>{
    thumb.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        thumb.classList.add('active')
        main_img.src = thumb.src
    })

})


