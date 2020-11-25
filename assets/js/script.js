var bloc = document.getElementById('bloc');

window.addEventListener('scroll', () => {
    if(window.scrollY > 400) {
        bloc.classList.add('scroll');
    } else {
        bloc.classList.remove('scroll');
    }
});