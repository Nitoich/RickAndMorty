export default {
    data() {
        return {
            isActive: false
        }
    },
    mounted() {
        this.characterList = this.episode.characters;
    },
    props: ['episode'],
    methods: {
        toggleActive() {
            this.isActive = !this.isActive;
        },
        redirect(event) {
            let id = event.target.getAttribute('data-id');
            window.location.href = `#/characters/episode/${id}`;
        }
    },
    template: `
        <li class="episodes__item" @click="toggleActive">
            <div class="episode__content" :class="{ active : isActive}">
                <div class="episode__name">{{ episode.id }}. {{ episode.name }}</div>
                <div class="episode_desc">
                    <p>Release Date: {{ episode.air_date }}</p>
                    <p>Episode: {{ episode.episode }}</p>
                    <button :value="episode.url" :data-id="episode.id" @click="this.redirect($event)">Find characters</button>
                </div>
            </div>    
        </li>
    `
}