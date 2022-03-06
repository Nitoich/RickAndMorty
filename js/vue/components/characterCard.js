export default {
    data() {
        return {
            isHovering: false,
        }
    },
    props: ['name', 'imgUrl'],
    methods: {
        setDefaultRotate(el) {
            el.style.transform = 'rotateX(0) rotateY(0)';
        },
        hoverToggle() {
            this.isHovering = !this.isHovering;
            if (!this.hovering) {
                this.setDefaultRotate(this.$refs.animateEl)
            }
        },
        animate(event) {
            const character = this.$refs.animateEl;
            let halfHeight = character.offsetHeight / 2;
            let halfWidth = character.offsetWidth / 2;

            character.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 5 + 'deg)';
        },
    },
    template: `
    <div class="characters__item" :class="{hovering : isHovering}" @mouseenter="hoverToggle" @mouseleave="hoverToggle" @mousemove="animate">
        <div class="character" ref="animateEl">
            <div class="character__avatar">
                <img :src="imgUrl" alt="Avatar">
            </div>
            <div class="character__name">
                {{ name }}
            </div>
        </div>
    </div>
    `,
}