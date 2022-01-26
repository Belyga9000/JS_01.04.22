<template>
  <div id="nav">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('loadShowcase')
    this.$store.dispatch('loadCart')
  },
}
</script>

<style lang="scss">
@font-face {
    font-family: "Lato";
    src: local("Lato"),
        url("../src/assets/fonts/lato-v20-latin-regular.woff2") format("woff2"),
        url("../src/assets/fonts/lato-v20-latin-regular.woff") format("woff"),
}
</style>
