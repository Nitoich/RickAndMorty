export default {
    data() {
        return {
            chracterId: null,
            character: null
        }
    },
    mounted() {
        this.characterId = localStorage.getItem('character_id');
        fetch('https://rickandmortyapi.com/api/character/' + this.characterId)
            .then(res => {return res.json()})
            .then(res => {
                this.character = res;
            });
    },
    template: `
        <div class="wrapper">
            <div class="index__content" v-if="this.character">
                <h1 class="title">{{ this.character.name }}</h1>
                <div class="character__container">
                    <div class="character__avatar">
                        <img :src="this.character.image" alt="">
                    </div>
                    <div class="character__info">
                        <ul class="info">
                            <li class="info-item status">Status: {{ this.character.status }}</li>
                            <li class="info-item species">Species: {{ this.character.species }}</li>
                            <li class="info-item gender">Gender: {{ this.character.gender }}</li>
                            <li class="info-item origin">Origin: {{ this.character.origin }}</li>
                            <li class="info-item location">Location: {{ this.character.location }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
}