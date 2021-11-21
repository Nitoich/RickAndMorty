burger_btn = document.querySelector('div.header__navigation__btn');
nav = document.querySelector('header.header').querySelector('nav.navigation');

burger_btn.addEventListener('click', function(event) {
    this.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('overflow');
});