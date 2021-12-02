let countPage = 2;
let currentPage = 1;

function getEpisodes(page) {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://rickandmortyapi.com/api/episode?page=' + String(page));
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        data = request.response.results;
        countPage = data.pages;
        for(i = 0; i < data.length; i++) {
            episode__card = document.createElement('li')
            episode__card.classList.add('episodes__item');
            episode__card.innerHTML  = `
            <div class="episode__content">
                <div class="episode__name">${data[i].id}. ${data[i].name}</div>
                <div class="episode_desc">
                    <p>Release Date: ${data[i].air_date}</p>
                    <p>Episode: ${data[i].episode}</p>
                    <button value="${data[i].url}">Find characters</button>
                </div>
            </div>
            `;
    
            episode__card.querySelector('.episode__name').addEventListener('click', function(event) {
                this.parentNode.classList.toggle('active');
            });
    
            episode__card.querySelector('button').addEventListener('click', function(event) {
                sessionStorage.setItem('urlEpisode', this.getAttribute('value'));
                window.location.href = 'singleEpisode.html';
            });
    
            document.querySelector('ul.episodes__list').append(episode__card);
            
        }
        toggleModal();
        
    }
}

document.getElementById('getNextPage').addEventListener('click', function(event) {
    toggleModal();
    currentPage++;
    if (currentPage == countPage) {
        document.getElementById('getNextPage').classList.add('display-none');
    }
    getEpisodes(currentPage)
});

getEpisodes(currentPage);