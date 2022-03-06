import CharactersList from "../templates/charactersList.js";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const indexVuePage = Vue.createApp({
    data() {
        return {
            CharacterPage: getRandomInt(41) + 1,
        }
    },
    components: {
        CharactersList
    },
    template: `
<div class="wrapper">
    <div class="index__content">
        <div class="characters">
            <h1 class="title"><a href="characters.html">Characters</a></h1>
            <CharactersList :page="this.CharacterPage" />     
        </div>  
    </div> 
    
    <div class="index__content">
        <div class="episodes">
            <h1 class="title"><a href="episodes.html">Episodes</a></h1>
            <ul class="episodes__list">
                
            </ul>
        </div>
    </div>
</div>
    `
}).mount('#index');
