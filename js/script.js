const slider = document.querySelector('.gallery_slider');

slider.addEventListener('wheel',(e)=>{
    e.preventDefault();
    slider.scrollLeft += e.deltaY;
});