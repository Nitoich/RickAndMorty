if (sessionStorage.getItem('char_id') !== null ) {
    let getCharData = new XMLHttpRequest();
    getCharData.open('GET', 'https://rickandmortyapi.com/api/character/' + sessionStorage.getItem('char_id'));
    getCharData.responseType = 'json';
    getCharData.send();
    getCharData.onload = function() {
        char = getCharData.response;
        console.log(char);

        document.querySelector('h1.title').innerHTML = char.name;
        document.querySelector('div.character__avatar').querySelector('img').src = char.image;
        document.querySelector('li.status').innerHTML += char.status;
        document.querySelector('li.species').innerHTML += char.species;
        document.querySelector('li.gender').innerHTML += char.gender;
        document.querySelector('li.origin').innerHTML += char.origin.name;
        document.querySelector('li.location').innerHTML += char.location.name;

        toggleModal();
    };
} else {
    alert("Ops!");
    window.location.href = "index.html";
}