<template>
<div>
    <div class="modal">
        <div class="cart-list"></div>
        <ul class="featured__item-list container">
            <card v-for="item of list" v-on:cardaction="onRemove" :good="item" v-bind:key="item.id" :actionname="'Delete'"></card>
        </ul>
        <button v-on:click="onClick" class="featured__item-cart-button">Close</button>
    </div>
</div>
</template>

<script>
import card from './Card.vue'  

export default {
    name: 'cart',
    components: {
        card,
    },
    props: ['list'],
    methods: {
        onClick() {
            this.$emit('cart-close')
            },
        onRemove(id) {
            this.$emit('remove-fromcart', id)
            }
        }
    }
</script>

<style lang="scss" scoped>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

</style>