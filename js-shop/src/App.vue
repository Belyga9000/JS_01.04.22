<template>
  <div id="nav">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showcase: null,
    }
  },

  mounted() {
    fetch('http://localhost:3000/api/v1/showcase')
      .then(res => res.json())
      .then(data => {
        this.showcase = data
      })
  }
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
