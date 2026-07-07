const slider = document.querySelector('.gallery_slider');

slider.addEventListener('wheel',(e)=>{
    e.preventDefault();
    slider.scrollLeft += e.deltaY;
});

// EXPLORE AGAIN 버튼 -> 첫 화면(맨 위)으로 부드럽게 이동
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});