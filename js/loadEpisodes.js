

for (i = 0; i < 5; i++) {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://rickandmortyapi.com/api/episode/' + String(getRandomInt(50) + 1));
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        info = request.response;
        episodeItem = document.createElement('li');
        episodeItem.classList.add('episodes__item');
        episodeItem.innerHTML = `
        <div class="episode__content">
            <div class="episode__name">${info.name}</div>
            <div class="episode_desc">
                <p>Release Date: ${info.air_date}</p>
                <p>Episode: ${info.episode}</p>
                <button>Find characters</button>
            </div>
        </div>
        `;

        episodeItem.querySelector('.episode__name').addEventListener('click', function(event) {
            this.parentNode.classList.toggle('active');
        })

        document.querySelector('ul.episodes__list').append(episodeItem);
    }
}

