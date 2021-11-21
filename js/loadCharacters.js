function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

getCharacters = new XMLHttpRequest();
getCharacters.open('GET', 'https://rickandmortyapi.com/api/character?page=' + String(getRandomInt(41) + 1));
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

        document.querySelector('div.characters__list').append(characters__item);

        
    }
    toggleModal();
    addHoverEffect();
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