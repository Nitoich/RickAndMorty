export default {
    data() {
        return {
            isActive: false
        }
    },
    props: ['episode'],
    methods: {
        toggleActive() {
            this.isActive = !this.isActive;
        }
    },
    template: `
<li class="episodes__item" @click="toggleActive">
    <div class="episode__content" :class="{ active : isActive}">
        <div class="episode__name">{{ episode.id }}. {{ episode.name }}</div>
        <div class="episode_desc">
            <p>Release Date: {{ episode.air_date }}</p>
            <p>Episode: {{ episode.episode }}</p>
            <button :value="episode.url">Find characters</button>
        </div>
    </div>    
</li>
    `
}