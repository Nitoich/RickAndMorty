import characterCard from "./components/characterCard.js";

const characterList = Vue.createApp({
    data() {
        return {
            characters: {},
            name: 'KEK'
        }
    },

    mounted(){
        fetch('https://rickandmortyapi.com/api/character')
            .then(r => r.json())
            .then(response => {
                this.characters = response.results;
            });
    },
    components: {
        characterCard
    },
    template: `
            <characterCard :name="character.name" :imgUrl="character.image" v-for="character in characters"/>
    `,
}).mount('#characterList');