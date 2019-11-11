new Glider(document.querySelector('.glider'), {
    slidesToShow: 2.5,
    slidesToScroll: 1,
    scrollLock: true,
    draggable: true,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
})