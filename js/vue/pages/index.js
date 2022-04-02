import Main from "./main.js";
import Error from "./404.js";



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