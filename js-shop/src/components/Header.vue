<template>
    <div class="header">
        <div class="container header__wrp">
            <div class="header__wrp-controls">
                <img class="header__logo" src="@/assets/img/logo.png" alt="logo">
                <img class="header__search" src="@/assets/img/search.svg" alt="loupe">
            </div>
            <div class="header__wrp-controls">
                <button class="header__menu-btn" id="burger"><img src="@/assets/img/menu.svg" alt=""></button>
                <a class="header__link" href="#"><img src="@/assets/img/person.svg" alt="person"></a>
                <a class="header__link" href="#"><img src="@/assets/img/cart.svg" alt="cart" v-on:click="onClick"></a>
            </div>
            <nav class="header__nav" id="menu">
                <h2 class="header__nav-title">Menu</h2>
                <ul class="header__menu-list">
                    <li class="header__menu_item menu-item">
                        <h3 class="menu-item__title">man</h3>
                        <ul class="menu-item__sub-list">
                            <li class="menu-item__sub-item">Accessories</li>
                            <li class="menu-item__sub-item">Bags</li>
                            <li class="menu-item__sub-item">Denim</li>
                            <li class="menu-item__sub-item">T-Shirts</li>
                        </ul>
                    </li>
                    <li class="header__menu_item menu-item">
                        <h3 class="menu-item__title">woman</h3>
                        <ul class="menu-item__sub-list">
                            <li class="menu-item__sub-item">Accessories</li>
                            <li class="menu-item__sub-item">Jackets & Coats</li>
                            <li class="menu-item__sub-item">Polos</li>
                            <li class="menu-item__sub-item">T-Shirts</li>
                            <li class="menu-item__sub-item">Shirts</li>
                        </ul>
                    </li>
                    <li class="header__menu_item menu-item">
                        <h3 class="menu-item__title">kids</h3>
                        <ul class="menu-item__sub-list">
                            <li class="menu-item__sub-item">Accessories</li>
                            <li class="menu-item__sub-item">Jackets & Coats</li>
                            <li class="menu-item__sub-item">Polos</li>
                            <li class="menu-item__sub-item">T-Shirts</li>
                            <li class="menu-item__sub-item">Shirts</li>
                            <li class="menu-item__sub-item">Bags</li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>     
</template>

<script>
export default {
    name: 'toppart',
    methods: {
        onClick() {
            this.$emit('cart-open')
        }
    },
}
</script>

<style lang="scss">

@import "@/assets/scss/_reset.scss";
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/_general.scss";

.header {
background-color: $black;

.header__search:hover {
    opacity: 0.5;
}

.header__nav {
    display: none;
    position: absolute;
    background-color: $white;
    right: -240px;
    bottom: -771px;

    &--show {
        display: block;
    }

    &-title {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        padding: 37px 163px 24px 34px;
    }
}

.header__wrp {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 75px;
    position: relative;
}

.header__logo {
    margin: 0 41px 0 0;
}

.header__link {
    margin: 0 0 0 31px;
}

.header__link:hover {
    opacity: 0.5;
}

.header__menu-btn {
    border: none;
    background-color: transparent;
}

.header__menu-btn:hover {
        opacity: 0.5;
    }
}

.menu-item__sub-item {
    font-size: 14px;
    line-height: 17px;
    color: #6F6E6E;
    padding: 12px 0 12px 55px;
}

.menu-item__sub-list {
    margin-bottom: 9px;
}

.menu-item__title {
    text-transform: uppercase;
    font-size: 14px;
    line-height: 17px;
    color: $darkpink;
    margin-left: 33px;

}

@media (max-width: $mobile-width) {
    .header {
        @include min-width;

        .header__link {
            display: none;
        }
    }
}
</style>