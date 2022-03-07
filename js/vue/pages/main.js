import CharactersList from "../templates/charactersList.js";
import EpisodesList from "../templates/episodesList.js";
import NavLink from "../components/NavLink.js";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default {
    data() {
        return {
            CharacterPage: getRandomInt(41) + 1,
        }
    },
    components: {
        CharactersList,
        EpisodesList,
        NavLink
    },
    template: `
<NavLink :url="'#/'" :text="'MAIN'" />
<NavLink :url="'#/characters'" :text="'CHARCTERS'" />
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
            <EpisodesList  />
        </div>
    </div>
</div>`
}