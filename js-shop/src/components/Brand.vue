<template>
    <div class="brand">
         <img class="brand__img" src="@/assets/img/dude.jpg" alt="man">
            <div class="brand__wrp">
                <h1 class="brand__title">the brand<span class="brand__subtitle">of luxerious <span class="brand__subtitle-pink">fashion</span></span></h1>
            </div>
    </div>
</template>

<script>
export default {
    name: 'brand',
}
</script>

<style lang="scss">

@import "@/assets/scss/_reset.scss";
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/_general.scss";

.brand {
    display: flex;
    max-width: 2100px;
    margin: auto;
    margin-bottom: 19px;

&__img {
    @include tablet {
        width: 385px;
        height: 369px;
    }

    @include mobile {
        display: none;
    }
    }

.brand__wrp {
    background-color: $pink;
    flex-grow: 1;
    padding: 0 0 0 92px;
    display: flex;
    align-items: center;

    @include tablet {
        padding: 0 0 0 19px;
    }

    @include mobile {
        @include min-width;
        min-height: 363px;
        padding: 0;
        place-content: center;
    }
}

}

.brand__wrp::before {
    content: url('~@/assets/img/brandpseudo.png');
    margin: 0 16px 0 0;
}

.brand__title {
    font-size: 48px;
    font-weight: 900;
    line-height: 58px;
    text-transform: uppercase;

    @include tablet {
        @include font(44px, 52px, 900);
    }

    @include mobile {
        @include font(38px, 46px, 900)
    }
}

.brand__subtitle {
    display: flex;
    font-size: 34px;
    width: max-content;

    @include tablet {
        @include font(29px, 24px, 700);
    }

    @include mobile {
        @include font(24px, 20px, 700)
    }
}

.brand__subtitle-pink {
    margin: 0 0 0 8px;
    color: $darkpink;
}
</style>