import CurrentPages from "../Router.js";
import {HashRouter} from "../Router.js";

console.log(CurrentPages);
const indexVuePage = Vue.createApp(CurrentPages).mount('#index');
