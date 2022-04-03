
import CharactersList from "../templates/charactersList.js";
import characterCard from "../components/characterCard.js";

export default {
    data() {
        return {
            maxPages: 0,
            currentPage: 1,
            characters: ''
        }
    },

    mounted() {
        fetch('https://rickandmortyapi.com/api/character/?page=' + this.currentPage)
            .then(res => {return res.json()})
            .then(res => {
                this.maxPages = res.info.pages;
                this.characters = res.results;
            });
    },

    components: {
        CharactersList,
        characterCard
    },

    methods: {
        nextPage() {
            if (this.currentPage != this.maxPages) {
                console.log(this.maxPages)
                this.currentPage++;
            }
        },
        previousPage() {
            if (this.currentPage != 1) {
                console.log(this.maxPages)
                this.currentPage--;
            }
        }
    },

    watch: {
        currentPage: function() {
            fetch('https://rickandmortyapi.com/api/character/?page=' + this.currentPage)
                .then(res => {return res.json()})
                .then(res => {
                    this.maxPages = res.info.pages;
                    this.characters = res.results;
                    console.log(this.characters)
                });
        }
    },

    template: `
    <div class="wrapper">
        <div class="index__content">
            <div class="characters">
            <button @click="nextPage()">+</button>
            <button @click="previousPage()">-</button>
                <h1 class="title"><a href="characters.html">Characters(Page: {{ this.currentPage }})</a></h1>
                <div class="characters__list">
                    <characterCard :name="character.name" :imgUrl="character.image" v-for="character in characters"/>
                </div>   
            </div>  
        </div> 
    </div>
    
    `
}