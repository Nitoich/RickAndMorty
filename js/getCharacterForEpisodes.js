if (sessionStorage.getItem('urlEpisode') !== null) {
    let request = new XMLHttpRequest();
    request.open('GET', sessionStorage.getItem('urlEpisode'));
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        data = request.response;

        document.querySelector('h1.title').innerHTML = data.name + `(${data.episode})`;
    

        data.characters.forEach(characterURL => {
            console.log(characterURL);
            let charGet = new XMLHttpRequest();
            charGet.open('GET', characterURL);
            charGet.responseType = 'json';
            charGet.send();
            charGet.onload = function() {
                character = charGet.response;
                
                character_card = document.createElement('div');
                character_card.classList.add('characters__item');
                character_card.id = character.id;
                character_card.innerHTML = `
                    <div class="character">
                        <div class="character__avatar">
                            <img src="${character.image}" alt="Avatar">
                        </div>
                        <div class="character__name">
                            ${character.name}
                        </div>
                    </div>
                `;

                character_card.addEventListener('click', function(event) {
                    sessionStorage.setItem('char_id', this.id);
                    window.location.href = "single.html"
                });

                character_card.addEventListener('mouseenter', function(event) {
                    this.classList.add('hovering')
                });

                character_card.addEventListener('mousemove', function(event) {
        
                    const character = this.querySelector('div.character');
                    let halfHeight = character.offsetHeight / 2;
                    let halfWidth = character.offsetWidth / 2;
            
                    character.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 5 + 'deg)';
                });

                character_card.addEventListener('mouseleave', function(event) {
                    this.querySelector('div.character').style.transform = 'rotateX(0deg) rotateY(0deg)';
            
                    let currentEl = this;
            
                    function deleteClass() {
                        currentEl.classList.remove('hovering');
                    }
            
                    setTimeout(deleteClass, 100);
                });

                document.querySelector('.characters__list').append(character_card);
            }
        });
    };
} else {
    alert('Ops!');
    window.location.href = '/';
}