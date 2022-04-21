import Main from "./pages/main.js";
import Error from "./pages/404.js";
import Characters from "./pages/characters.js";
import Character from "./pages/character.js";
import CharactersFromEpisode from "./pages/charactersFromEpisode.js";

function loadVuePage(Page) {
    const Empty = {
        mounted() {
            console.log('Clearing...')
        }
    };
    window.indexVuePage = Vue.createApp(Empty).mount('#index');
    window.indexVuePage = Vue.createApp(Page).mount('#index');
}

const Router = new HashRouter();

Router.defaultCB = () => {
    loadVuePage(Error);
};

Router.addPath('#/', () => {
    loadVuePage(Main);
});

Router.addPath('#/characters', () => {
    loadVuePage(Characters);
});

Router.addPath('#/characters/{id}', (id) => {
    console.log(id);
    localStorage.setItem('character_id', id);
    loadVuePage(Character);
});

Router.addPath('#/characters/episode/{id}', (id) => {
    console.log(id);
    localStorage.setItem('episode_id', id);
    loadVuePage(CharactersFromEpisode);
});
