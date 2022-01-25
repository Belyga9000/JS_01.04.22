<template>
    <div class="featured">
        <h2 class="featured__title">Fetured Items</h2>
        <p class="featured__text">Shop for items based on what we featured in this week</p>
        <ul class="featured__item-list container">
            <li class="featured__item">
                <div class="featured__item-wrp">
                    <img class="featured__item-picture" src="@/assets/img/card1.jpg" alt="product1">
                    <div class="featured__item-overlay"></div>
                    <button class="featured__item-btn">Add to cart</button>
                </div>
                <h3 class="featured__item-title">ellery x m'o capsule</h3>
                <p class="featured__item-text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                <span class="featured__item-price">$52.00</span>
            </li>
            <li class="featured__item">
                <div class="featured__item-wrp">
                    <img class="featured__item-picture" src="@/assets/img/card2.jpg" alt="product2">
                    <div class="featured__item-overlay"></div>
                    <button class="featured__item-btn">Add to cart</button>
                </div>
                <h3 class="featured__item-title">ellery x m'o capsule</h3>
                <p class="featured__item-text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                <span class="featured__item-price">$52.00</span>
            </li>
            <li class="featured__item">
                <div class="featured__item-wrp">
                    <img class="featured__item-picture" src="@/assets/img/card3.jpg" alt="product3">
                    <div class="featured__item-overlay"></div>
                    <button class="featured__item-btn">Add to cart</button>
                </div>
                <h3 class="featured__item-title">ellery x m'o capsule</h3>
                <p class="featured__item-text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                <span class="featured__item-price">$52.00</span>
            </li>
            <li class="featured__item">
                <div class="featured__item-wrp">
                    <img class="featured__item-picture" src="@/assets/img/card4.jpg" alt="product4">
                    <div class="featured__item-overlay"></div>
                    <button class="featured__item-btn">Add to cart</button>
                </div>
                <h3 class="featured__item-title">ellery x m'o capsule</h3>
                <p class="featured__item-text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                <span class="featured__item-price">$52.00</span>
            </li>
            <li class="featured__item">
                <div class="featured__item-wrp">
                    <img class="featured__item-picture" src="@/assets/img/card5.jpg" alt="product5">
                    <div class="featured__item-overlay"></div>
                    <button class="featured__item-btn">Add to cart</button>
                </div>
                <h3 class="featured__item-title">ellery x m'o capsule</h3>
                <p class="featured__item-text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                <span class="featured__item-price">$52.00</span>
            </li>
            <li class="featured__item">
                <div class="featured__item-wrp">
                    <img class="featured__item-picture" src="@/assets/img/card6.jpg" alt="product6">
                    <div class="featured__item-overlay"></div>
                    <button class="featured__item-btn">Add to cart</button>
                </div>
                <h3 class="featured__item-title">ellery x m'o capsule</h3>
                <p class="featured__item-text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                <span class="featured__item-price">$52.00</span>
            </li>
        </ul>
    <button class="featured__btn"><a class="featured__btn-link" href="#">Browse All Product</a></button>  
    </div>
</template>

<script>
export default {
    name: "featureditems"
}
</script>

<style lang="scss">

@import "@/assets/scss/_reset.scss";
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/_general.scss";

.featured {
    display: flex;
    flex-direction: column;

    @include mobile {
        min-width: 360px;
        margin: auto;
    }
}

.featured__title {
    text-align: center;
    font-size: 30px;
    font-weight: 400;
    line-height: 36px;
}

.featured__text {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    color: #9F9F9F;
    margin-bottom: 18px;
}

.featured__item-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    @include mobile {
        justify-content: center;
    }
}

.featured__item {
    margin-top: 30px;
    width: 360px;
    background-color: $grey;
    padding-bottom: 20px;
}

.featured__item-wrp {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.featured__item-wrp:hover .featured__item-overlay,
.featured__item-wrp:hover .featured__item-btn,
.featured__item-wrp:hover .featured__item-btn::before {
    display: inline-block;
}

.featured__item-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(58, 56, 56, 0.86);
    top: 0;
    display: none;
}

.featured__item-btn {
    position: absolute;
    border: 1px solid #FFFFFF;
    background: transparent;
    color: $white;
    padding: 14px 15px 14px 30px;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    display: none;
}

.featured__item-btn:hover {
    background-color: $black;
}

.featured__item-btn::before {
    content: url('~@/assets/img/featured_cart.png');
    margin-right: 20px;
    vertical-align: sub;
    display: none;
}

.featured__item-title {
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    margin: 24px 0 0 18px;
    text-transform: uppercase;
}

.featured__item-text {
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 17px;
    color: #5D5D5D;
    margin: 12px 28px 18px 18px;
}

.featured__item-price {
    color: $darkpink;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    margin: 0 0 0 18px;
}

.featured__btn {
    align-self: center;
    border: 1px solid #FF6A6A;
    background-color: transparent;
    margin: 49px 0 96px 0;
    padding: 14px 40px 14px 40px;
    color: $darkpink;

    @include mobile {
        margin: 41px 0 98px 0;
    }
}

.featured__btn:hover {
    background-color: $darkpink;
    color: $white;
}

.featured__btn-link {
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: inherit;
}

.featured__btn-link:hover {
    color: $white;
}

</style>