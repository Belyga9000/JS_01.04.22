<template>
    <div class="catalog-navigation">
        <div class="container catalog-navigation_wrp">
            <h3 class="catalog-navigation_header" >{{ pagenavname }}</h3>
            <p class="catalog-navigation_menu" v-on:load="onLoad" :class="{ 'visually-hidden': isHidden }" >home /men /<span class= "catalog-navigation_menu_highlighted"> {{ pagenavname }}</span></p>    
        </div>
    </div>
</template>

<script>
export default {
    name: "pagegnav",
    data() {
        return {
            isHidden: true
        }
    },
    props: ["pagenavname"],
    methods: {
        onLoad() {
            if(this.pagenavname == 'new arrivals'){
                this.isHidden = false
            } else {
                this.isHidden = true
                };
        }
    },
    mounted() {
        this.onLoad();
    },
}
</script>

<style lang="scss">

@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/_general.scss";

.catalog-navigation {
    background-color: #F8F3F4;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
}
.catalog-navigation_wrp {
    height: 148px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.catalog-navigation_header {
    text-transform: uppercase;
    color: $darkpink;
}
.catalog-navigation_menu {
    text-transform: uppercase;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 17px;
}
.catalog-navigation_menu_highlighted {
    color: $darkpink;
}

</style>