import Main from "./main.js";
import Error from "./404.js";
import Characters from "./characters.js";



function loadVuePage(Page) {
    const Empty = {};
    window.indexVuePage = Vue.createApp(Empty).mount('#index');
    window.indexVuePage = Vue.createApp(Page).mount('#index');
}
new HashRouter().defaultCB = () => {
    loadVuePage(Error);
};

new HashRouter().addPath('#/', () => {
    loadVuePage(Main);
});

new HashRouter().addPath('#/characters', () => {
    loadVuePage(Characters);
});