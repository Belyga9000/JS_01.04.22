<template>
    <div class="sales">
        <h2 class="sales__heading visually-hidden">Sales</h2>
        <ul class="sales__list container">
            <li class="sales__item sales__item-first">
                <p class="sales__text">30% off</p>
                <h3 class="sales__item-title">for women</h3>
            </li>
            <li class="sales__item sales__item-second">
                <p class="sales__text">hot deals</p>
                <h3 class="sales__item-title">for men</h3>
            </li>
            <li class="sales__item sales__item-third">
                <p class="sales__text">new arrivals</p>
                <h3 class="sales__item-title">for kids</h3>
            </li>
            <li class="sales__item sales__item-fourth">
                <p class="sales__text-special">luxirous & trendy</p>
                <h3 class="sales__item-title">accesories</h3>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "sales"
}
</script>

<style lang="scss">

@import "@/assets/scss/_reset.scss";
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/_general.scss";

.sales {

    .sales__list {
        display: flex;
        flex-flow: wrap;
        align-items: center;
        justify-content: space-between;
        align-content: center;

        @include mobile {
            justify-content: center;
            flex-flow: column;
        }
    }

    .sales__item {
        margin: 64px 0 30px 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: $white;
        text-transform: uppercase;
        background-size: cover;
        background-repeat: no-repeat;
        font-size: 16px;
        width: 360px;
        height: 260px;

        @include tablet {
            margin-top: 0;
            width: 233px;
            height: 167px;
        }

        @include mobile {
            padding: 0;
            min-height: 247px;
            margin: 0 0 32px 0;
            width: 343px;
            height: 247px;
        }
    }

    .sales__item-first {
        background-image: url('~@/assets/img/woman.png');
    }

    .sales__item-second {
        background-image: url('~@/assets/img/item-man.png');
    }

    .sales__item-third {
        background-image: url('~@/assets/img/item-kid.png');
    }

    .sales__item-fourth {
        background-image: url('~@/assets/img/item-accesories.png');
        flex-grow: 1;
        margin-top: 0px;
        margin-bottom: 96px;
        width: 100%;
        height: 180px;

        @include tablet {
            height: 116px;
        }

        @include mobile {
            background-size: auto;
            min-height: 111px;
            min-width: 343px;
            margin-bottom: 64px;
            height: 180px;
        }
    }

    .sales__item-title {
        color: $darkpink;
        @include font(24px, 29px, 700);
    }

    .sales__text {
        @include font(16px, 19px, 400)
    }
}
    
</style>