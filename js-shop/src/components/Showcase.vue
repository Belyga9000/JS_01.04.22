<template>
    <ul class="featured__item-list container">
        <card  v-for="item of list" v-bind:key="item.id" v-on:cardaction="onAdd" :good="item" :actionname="'Add To Cart'"></card>
    </ul>
</template>

<script>
import card from './Card.vue'
export default {
    name: 'showcase',
    components: {
        card
    },
    methods: {
        odAdd(product) {
            this.$store.dispatch('addToCart', product)
        }
    },
    computed: {
        list() {
            return this.$store.getters.getShowcase
        }
    }
}
</script>

<style lang="scss">

@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/_general.scss";

.featured__item-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @include mobile {
        justify-content: center;
    }
}
</style>