<template>
  <div class="home">
    <header>
      <toppart v-on:cart-open="onCartOpen"/>
    </header>
    <catalognav/>
    <catalogfilter />
    <main>
      <showcase :list="showcase" v-on:addtocart="onAddToCart"></showcase>
    </main>

    <cart v-if="isCartVisible" :list="cart" v-on:remove-fromcart="onRemoveFromCart" v-on:cart-close="onCartOpen"></cart>
    <qualities/>
  <bottompart/>
  </div>
</template>

<script>

const API_URL = 'http://localhost:3000/api/v1';

import bottompart from '../components/Footer.vue'
import toppart from '../components/Header.vue'
import cart from '../components/Cart.vue'
import showcase from '../components/Showcase.vue'
import qualities from '../components/Qualities.vue';
import catalognav from '../components/CatalogNav.vue'
import catalogfilter from '../components/Filter.vue'

export default {
  name: 'Home',
  components: {
    cart,
    showcase,
    toppart,
    bottompart,
    qualities,
    catalognav,
    catalogfilter
  },
   data() {
     return {
      showcase: [],
      cart: [],
      isCartVisible: false
     }
  },
  methods: {
    onCartOpen() {
      this.isCartVisible = !this.isCartVisible
    },
    onAddToCart(id) {
      const product = this.showcase.find((good) => good.id == id)
      
      fetch(`${API_URL}/cart`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(product)
      })
        .then(() => {
          this.cart.push(product)
        })
    },

    onRemoveFromCart(id) {
      const product_id = this.cart.find((good) => good.id == id)
      
        fetch(`${API_URL}/cart`, {
          method: 'DELETE',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(this.cart[product_id])
        })
          .then(() => {
            this.cart.splice(product_id, 1)

    })
  }
  },
  mounted() {
    fetch(`${API_URL}/showcase`)
      .then((res) => {
        return res.json()
    })
    .then((data) => {
      this.showcase = data;
    })

    fetch(`${API_URL}/cart`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      this.cart = data;
    })
  }
}
</script>
