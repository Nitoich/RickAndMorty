burger_btn = document.querySelector('div.header__navigation__btn');
nav = document.querySelector('header.header').querySelector('nav.navigation');

burger_btn.addEventListener('click', function(event) {
    this.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('overflow');
    window.location.href = "#";
});

document.querySelectorAll('a.gradient-link').forEach(el => {
    el.addEventListener('mousemove', function(event) {
        xpos = event.offsetX;
        ypos = event.offsetY;

        this.style.backgroundImage = 'radial-gradient(at ' + xpos + 'px ' + ypos + 'px, rgba(9,250,0,1) 2px, rgba(0,212,255,1) 50%)';
    });

    el.addEventListener('mouseleave', function(event) {
        this.style.backgroundImage = '';
    });
});