<template>
    <div class="cart__item">
        <img class="cart__item-img" :src="require(`@/assets/img/${good.image}`)" :alt="`${good.title}`">
        <div class="cart__item-wrp">
            <h2 class="cart__item-heading">{{ good.title }}</h2>
            <i class="fas fa-times"></i>
            <ul class="cart__item-list">
                <li class="cart__item-text">Price: <span class="cart__list-price">${{ good.price }}</span></li>
                <li class="cart__item-text">Color: {{ good.color }}</li>
                <li class="cart__item-text">Size: {{ good.size }}</li>
                <li class="cart__item-text">Quantity: <span class="cart__list-quantity">{{ good.count }}</span></li>
            </ul>
        </div>
    </div>  
</template>
<script>
export default {
    name: 'cartitem',
    props: ['good'],
}
</script>

<style lang="scss">
    
</style>
