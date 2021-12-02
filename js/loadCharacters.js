

function getOnePage(page) {
    getCharacters = new XMLHttpRequest();
    getCharacters.open('GET', 'https://rickandmortyapi.com/api/character?page=' + String(page));
    getCharacters.responseType = 'json';
    getCharacters.send();
    getCharacters.onload = function() {
        let results = getCharacters.response.results;

        for(i = 0; i < results.length; i++) {
            characters__item = document.createElement('div');
            characters__item.id = results[i].id
            characters__item.addEventListener('click', function(event) {
                sessionStorage.setItem('char_id', this.id);
                window.location.href = "single.html"
            });
            characters__item.classList.add('characters__item');
            characters__item.innerHTML = '' + 
            '<div class="character">' +
                '<div class="character__avatar">' + 
                    '<img src="' + results[i].image + '" alt="Avatar">' +
                '</div>' + 
                '<div class="character__name">' + results[i].name + '</div>' +
            '</div>'

            characters__item.addEventListener('mouseenter', function(event) {
                this.classList.add('hovering')
            });
        
            characters__item.addEventListener('mousemove', function(event) {
        
                const character = this.querySelector('div.character');
                let halfHeight = character.offsetHeight / 2;
                let halfWidth = character.offsetWidth / 2;
        
                character.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 5 + 'deg)';
            });
        
            characters__item.addEventListener('mouseleave', function(event) {
                this.querySelector('div.character').style.transform = 'rotateX(0deg) rotateY(0deg)';
        
                let currentEl = this;
        
                function deleteClass() {
                    currentEl.classList.remove('hovering');
                }
        
                setTimeout(deleteClass, 100);
            });

            document.querySelector('div.characters__list').append(characters__item);

            
        }
        toggleModal();
    }
}


/*
<div class="characters__item">
    <div class="character">
        <div class="character__avatar">
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Avatar">
        </div>
        <div class="character__name">
            Name
        </div>
    </div>
</div>
*/