import {HashRouter} from "../Router.js";

export default {
    props: ['url', 'text'],
    methods: {
        click(event) {
            HashRouter.locationResolver(this.url);
        }
    },
    template: `
    <a :href="url" :data-href="url" @click="click">{{ text }}</a>
    `
}