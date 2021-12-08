
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
                <button value="${info.url}">Find characters</button>
            </div>
        </div>
        `;

        episodeItem.querySelector('.episode__name').addEventListener('click', function(event) {
            var element = this;
                document.querySelectorAll('.episode__name').forEach(el => {
                    if (el != element) {
                        el.parentNode.classList.remove('active');
                    }
                });
                this.parentNode.classList.toggle('active');
        });

        episodeItem.querySelector('button').addEventListener('click', function(event) {
            sessionStorage.setItem('urlEpisode', this.getAttribute('value'));
            window.location.href = 'singleEpisode.html';
        });

        document.querySelector('ul.episodes__list').append(episodeItem);
    }
}

for (i = 0; i < 5; i++) {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://rickandmortyapi.com/api/location/' + String(getRandomInt(50) + 1));
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        info = request.response;
        locationItem = document.createElement('li');
        locationItem.classList.add('location__item');
        locationItem.innerHTML = `
        <div class="location__content">
            <div class="location__name">${info.name}</div>
            <div class="location_desc">
                <p>Type: ${info.type}</p>
                <p>Dimension: ${info.dimension}</p>
                <button value="${info.url}">Find characters</button>
            </div>
        </div>
        `;

        locationItem.querySelector('.location__name').addEventListener('click', function(event) {
            var element = this;
                document.querySelectorAll('.location__name').forEach(el => {
                    if (el != element) {
                        el.parentNode.classList.remove('active');
                    }
                });
                this.parentNode.classList.toggle('active');
        });

        locationItem.querySelector('button').addEventListener('click', function(event) {
            sessionStorage.setItem('urlEpisode', this.getAttribute('value'));
            window.location.href = 'singleEpisode.html';
        });

        document.querySelector('ul.location__list').append(locationItem);
    }
}