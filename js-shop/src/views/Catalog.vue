<template>
  <div class="catalog">
    <header>
      <toppart v-on:cart-open="onCartOpen"></toppart>
    </header>
    <main>
      <pagenav :pagenavname="'new arrivals'" />
      <catalogfilter></catalogfilter>
      <showcase></showcase>
      <cart v-if="isCartVisible" :list="cart" v-on:remove-fromcart="onRemoveFromCart" v-on:cart-close="onCartOpen"></cart>
      <qualities/>
    </main>
    <footer>
      <bottompart/>
    </footer>
  </div>
</template>

<script>

import bottompart from '../components/Footer.vue'
import toppart from '../components/Header.vue'
import cart from '../components/Cart.vue'
import showcase from '../components/Showcase.vue'
import qualities from '../components/Qualities.vue';
import pagenav from '../components/PageNav.vue'
import catalogfilter from '../components/Filter.vue'

export default {
  name: 'Catalog',
  components: {
    cart,
    showcase,
    toppart,
    bottompart,
    qualities,
    pagenav,
    catalogfilter
  },
   data() {
     return {
      isCartVisible: false,
     }
  },
}
</script>
