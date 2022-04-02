import Main from "./main.js";
import Error from "./404.js";

new HashRouter().defaultCB = () => {
    window.indexVuePage = Vue.createApp(Error).mount('#index');
};

new HashRouter().addPath('#/', () => {
    console.log('home');
    window.indexVuePage = Vue.createApp(Main).mount('#index');
});

