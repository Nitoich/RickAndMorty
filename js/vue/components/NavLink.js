export default {
    props: ['url', 'text'],
    methods: {
        click(event) {
            HashRouter.locationResolver(this.data.href);
        }
    },
    template: `
    <a :href="url" :data-href="url" @click="click">{{ text }}</a>
    `
}