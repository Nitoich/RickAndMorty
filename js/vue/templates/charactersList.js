import characterCard from "../components/characterCard.js";

export default {
    data() {
        return {
            characters: {},
        }
    },
    props: [
        'page'
    ],
    mounted(){
        fetch('https://rickandmortyapi.com/api/character?page=' + this.page)
            .then(r => r.json())
            .then(response => {
                this.characters = response.results;
            });
    },
    components: {
        characterCard,
    },
    template: `
            <div class="characters__list">
                <characterCard :ids="character.id" :name="character.name" :imgUrl="character.image" v-for="character in characters"/>
            </div>
    `,
};