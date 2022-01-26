<template>
    <div>
        <header>
            <toppart />
        </header>
        <main>
            <pagenav class="marg-bottom" :pagenavname="'shopping cart'" />
            <carttest></carttest>
        </main>
        <footer>
            <bottompart />
        </footer>
    </div>
</template>

<script>

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
        carttest
        },
        computed: {
            list() {
                return this.$store.getters.getCart
        }
    }
}
</script>



<style lang="scss">

.marg-bottom {
    margin-bottom: 50px;
}
    
</style>