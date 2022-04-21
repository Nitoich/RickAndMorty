import CharacterCard from "../components/characterCard.js";

export default {
    data() {
        return {
            episodeId: localStorage.getItem('episode_id'),
            characterLinks: undefined,
            characterList: []
        }
    },
    mounted() {
        console.log('CharactersFromEpisode page loaded!');
        fetch('https://rickandmortyapi.com/api/episode/' + this.episodeId)
            .then(res => {return res.json()})
            .then(res => {
                this.characterLinks = res.characters;
                console.log(this.characterLinks)
            });
    },
    watch: {
        characterLinks: function() {
            this.characterList = [];
            this.characterLinks.forEach(el => {
                fetch(el)
                    .then(res => {return res.json()})
                    .then(res => {
                        this.characterList.push(res);
                    })
            });
            console.log(this.characterList)
        }
    },
    components: {
        CharacterCard
    },
    template: `
    <div class="wrapper">
        <div class="index__content">
            <div class="characters">
                <h1 class="title"><a href="characters.html">Characters</a></h1>
                <div class="characters__list">
                       <CharacterCard v-for="character in this.characterList" :ids="character.id" :imgUrl="character.image" :name="character.name" />
                </div>   
            </div>
        </div> 
    </div>
    `
}