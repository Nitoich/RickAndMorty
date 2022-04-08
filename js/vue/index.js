import Main from "./pages/main.js";
import Error from "./pages/404.js";
import Characters from "./pages/characters.js";
import Character from "./pages/character.js";

function loadVuePage(Page) {
    const Empty = {};
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
