<template>
<div class="home">
    <header>
        <toppart />
    </header>
    <main>
        <brand />
        <sales />
        <featureditems />
    </main>
    <footer>
        <qualities />
        <bottompart />
    </footer>
</div>
</template>

<script>
const API_URL = 'http://localhost:3000/api/v1';

import bottompart from '../components/Footer.vue'
import toppart from '../components/Header.vue'
import qualities from '../components/Qualities.vue'
import brand from '../components/Brand.vue'
import sales from '../components/Sales.vue'
import featureditems from '../components/FeaturedItems.vue'

export default {
  name: "Home",
  components: {
      toppart,
      bottompart,
      qualities,
      brand,
      sales,
      featureditems,

  },
  data() {
      return {
          cart: [],
      }
  },
  methods: {
  onCartOpen() {
    this.isCartVisible = !this.isCartVisible
      }
  },
  mounted() {
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

</style>