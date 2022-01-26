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
  methods: {
  onCartOpen() {
    this.isCartVisible = !this.isCartVisible
      }
  },
}
</script>

<style lang="scss">

</style>