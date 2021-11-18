document.querySelectorAll('div.characters__item').forEach(el => {

    el.addEventListener('mousemove', function(event) {

        const character = this.querySelector('div.character');
        let halfHeight = character.offsetHeight / 2;
        let halfWidth = character.offsetWidth / 2;

        character.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 5 + 'deg)';
    });

    el.addEventListener('mouseleave', function(event) {
        this.querySelector('div.character').style.transform = 'rotateX(0deg) rotateY(0deg)';
        setTimeout(function() {
            this.style.perspective = '0px'
        }, 1000);
    });
});