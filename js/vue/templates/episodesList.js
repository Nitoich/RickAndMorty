import episodeCard from "../components/episodeCard.js";

export default {
    data() {
        return {
            episodes: {}
        }
    },

    components: {
        episodeCard
    },

    mounted() {
        fetch('https://rickandmortyapi.com/api/episode')
            .then(res => { return res.json() })
            .then(res => {
                this.episodes = res.results;
            });
    },

    template: `
        <ul class="episodes__list">
            <episodeCard :episode="episode" v-for="episode in this.episodes" />
        </ul>
    `
}