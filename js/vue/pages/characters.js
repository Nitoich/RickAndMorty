
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
        characterCard
    },

    methods: {
        getNextPage() {
            this.currentPage++;
            fetch('https://rickandmortyapi.com/api/character/?page=' + this.currentPage)
                .then(res => {return res.json()})
                .then(res => {
                    this.maxPages = res.info.pages;
                    res.results.forEach(el => {
                        this.characters.push(el);
                    })
                })
        }
    },

    computed: {
        activeGetMoreButton: function () {
            return this.currentPage == this.maxPages;
        }
    },

    template: `
    <div class="wrapper">
        <div class="index__content">
            <div class="characters">
                <h1 class="title"><a href="characters.html">Characters</a></h1>
                <div class="characters__list">
                    <characterCard :ids="character.id" :name="character.name" :imgUrl="character.image" v-for="character in characters"/>
                </div>   
            </div>
            <button id="getNextPage" @click="getNextPage()" :disabled="this.activeGetMoreButton">GET MORE</button>  
        </div> 
    </div>
    
    `
}