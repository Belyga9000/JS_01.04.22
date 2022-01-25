<template>
<div class="qualities">
    <ul class="qualities__list container">
        <li class="qualities__item">
            <img class="qualities__item-img" src="@/assets/img/car.svg" alt="car">
            <h3 class="qualities__item-heading">Free Delivery</h3>
            <p class="qualities__item-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </li>
        <li class="qualities__item">
            <img class="qualities__item-img" src="@/assets/img/discount.svg" alt="discount">
            <h3 class="qualities__item-heading">Sales & discounts</h3>
            <p class="qualities__item-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </li>
        <li class="qualities__item">
            <img class="qualities__item-img" src="@/assets/img/crown.svg" alt="crown">
            <h3 class="qualities__item-heading">Quality assurance</h3>
            <p class="qualities__item-text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'qualities',
}
</script>

<style lang="scss">

@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/_general.scss";

.qualities {
    background: #222224;

    @include mobile {
        @include min-width;
    }
}

.qualities__list {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include tablet {
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        padding: 48px 0 40px 0;
    }
}

.qualities__item {
    color: #FBFBFB;
    text-align: center;
    width: 360px;
}

.qualities__item-heading {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    margin: 0 0 16px 0;
}

.qualities__item-text {
    font-size: 14px;
    font-weight: 300;
    line-height: 17px;
    color: #FBFBFB;
    margin: 0 0 104px 0;

    @include tablet {
        margin: 0 0 47px 0;
    }
}

.qualities__item-img {
    margin: 104px 0 28px 0;

    @include tablet {
        margin: 0 0 28px 0;
    }
}   
</style>