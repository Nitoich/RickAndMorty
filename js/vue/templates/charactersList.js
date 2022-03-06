import characterCard from "../components/characterCard.js";
import NavLink from "../components/NavLink.js";

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
        NavLink
    },
    template: `
            <div class="characters__list">
                <characterCard :name="character.name" :imgUrl="character.image" v-for="character in characters"/>
            </div>
    `,
};