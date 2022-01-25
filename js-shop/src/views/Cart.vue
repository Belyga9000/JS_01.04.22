<template>
    <div>
        <header>
            <toppart />
        </header>
        <main>
            <pagenav class="marg-bottom" :pagenavname="'shopping cart'" />
            <carttest :list="cart"></carttest>
        </main>
        <footer>
            <bottompart />
        </footer>
    </div>
</template>

<script>
const API_URL = 'http://localhost:3000/api/v1';

import bottompart from '../components/Footer.vue'
import toppart from '../components/Header.vue'
import pagenav from '../components/PageNav.vue'
import carttest from '../components/CartTest.vue'


export default {
    name: "Cart",
    components: {
        bottompart,
        toppart,
        pagenav,
        carttest,
    },
    data() {
        return {
            cart: [],
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



<style lang="scss">

.marg-bottom {
    margin-bottom: 50px;
}
    
</style>