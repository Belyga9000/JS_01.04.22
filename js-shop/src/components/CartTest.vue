<template>
<div class="cart">
    <div class="cart__items-wrp container">
        <div class="cart__items">
           <cartitem v-for="item of list" :good="item" v-bind:key="item.id" ></cartitem>
            <div class="cart__item-btm-wrp">
                <button class="cart__item-btn">clear shopping cart</button>
                <button class="cart__item-btn">continue shopping</button>
            </div>
        </div>
        <div class="cart__adress-filter">
                <div class="cart__adress">
                    <h2 class="cart__adress-heading">shipping adress</h2>
                    <input type="text" class="cart__input" placeholder="City">
                    <input type="text" class="cart__input" placeholder="State">
                    <input type="text" class="cart__input" placeholder="Postcode/Zip">
                    <button class="cart__adress-btn">get a quote</button>
                </div>
                <div class="cart__checkout">
                    <p class="cart__checkout-sub">sub total<span class="cart__checkout-amount-sub">$900</span></p>
                    <p class="cart__checkout-total">grand total<span class="cart__checkout-amount-total">$900</span></p>
                    <hr class="cart__checkout-line">
                    <button class="cart__checkout-btn">proceed to checkout</button>
                    </div>
            </div>
    </div>
</div>
</template>

<script>

import cartitem from "./CartItem.vue"

export default {
    name: 'carttest',
    components: {
        cartitem
    },
    props:['list']
}
</script>

<style lang="scss">

@import "@/assets/scss/_reset.scss";
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/_general.scss";

.cart {
    .cart__title {
        text-transform: uppercase;
        padding: 60px 0 60px 0;
        color: $darkpink;
        margin-bottom: 96px;

        @include font(24px, 29px, 400);

        @include tablet {
            margin-bottom: 40px;
        }
    }

    .cart__wrp {
        background: #F8F3F4;
        @include min-width;
    }

    .cart__items {
        display: flex;
        flex-direction: column;
    }

    .cart__items-wrp {
        display: flex;

        @include tablet {
            flex-direction: column;
        }
    }

    .cart__item {
        display: flex;
        margin-bottom: 40px;
        box-shadow: 15px 10px 12px 8px rgb(0, 0, 0, 0.2);

        @include mobile {
            width: 358px;
            height: 188px;
        }
    }

    .cart__item-wrp {
        width: 390px;
        height: 306px;
        position: relative;
    }

    .cart__item-img {
        width: 262px;
        height: 306px;

        @include mobile {
            width: 144px;
            height: 188px;
        }


    }

    .cart__item-list {
        margin: 42px 0 62px 31px;

        @include mobile {
            margin: 25px 0 0 17px;
        }
    }

    .cart__item-heading {
        margin: 22px 0 0 31px;
        width: 262px;
        text-transform: uppercase;

        @include font(24px, 29px, 400);

        @include mobile {
            margin: 13px 0 0 17px;
            width: 144px;
            @include font(16px, 19px, 400);

        }
    }

    .cart__list-quantity {
        margin-left: 24px;
        padding: 1px 17px;
        border: 1px solid #EAEAEA;

    }

    .cart__item-text {
        margin-bottom: 6px;
        @include font (22px, 26px, 400);

        @include mobile {
            margin-bottom: 4px;
            @include font (14px, 17px, 400);
        }
    }

    .cart__item-btn {
        text-transform: uppercase;
        padding: 17px 40px;
        border: 1px solid #A4A4A4;
        background: transparent;
        @include font (14px, 17px 300);

        @include mobile {
            padding: 9px 18px;
            text-align: center;
            text-transform: capitalize;
            @include font (12px, 14px, 400);
        }
    }

    .cart__list-price {
        color: $darkpink;
    }

    .cart__item-btm-wrp {
        display: flex;
        justify-content: space-between;
        margin-top: 32px;
        margin-bottom: 129px;

        @include tablet {
            justify-content: space-evenly;
            margin-bottom: 64px;
        }

        @include mobile {
            justify-content: space-between;
        }
    }

    .fas {
        position: absolute;
        top: 0;
        right: 0;
        margin: 28px 22px 0 0;

        @include mobile {
            margin: 17px 12px;
        }
    }

    .cart__adress {
        display: flex;
        flex-direction: column;
        margin-left: 129px;

        @include tablet {
            margin-left: 0;
        }
    }

    .cart__adress-heading {
        margin-top: 17px;
        margin-bottom: 20px;
        text-transform: uppercase;
        @include font(16px, 19px, 300);
    }

    .cart__input {
        width: 360px;
        height: 45px;
        border: 1px solid #A4A4A4;
        margin-bottom: 20px;
    }

    .cart__adress-btn {
        text-transform: uppercase;
        padding: 10px 14px;
        border: 1px solid #A4A4A4;
        background: transparent;
        margin-top: 4px;
        align-self: flex-start;
        margin-bottom: 57px;

        @include font (14px, 17px 300);

        @include tablet {
            margin-bottom: 129px;
        }

        @include mobile {
            margin-bottom: 48px;
        }
    }

    .cart__adress-filter {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        @include tablet {
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: flex-start;
        }

        @include mobile {
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;
        }
    }

    .cart__checkout {
        width: 360px;
        background-color: $darkgrey;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-bottom: 40px;

        @include tablet {
            margin-top: 30px;
            margin-left: 15px;
            height: 214px;
        }

        @include mobile {
            margin-left: 0;
            margin-bottom: 96px;
        }
    }

    .cart__checkout-sub {
        margin: 39px 34px 12px 0;
        text-transform: uppercase;
        @include font(11px, 13px, 400);
    }

    .cart__checkout-amount-sub {
        margin-left: 10px;
    }

    .cart__checkout-total {
        margin: 0 34px 21px 0;
        text-transform: uppercase;
        @include font (16px, 19px, 300);
    }

    .cart__checkout-amount-total {
        @include font (16px, 19px, 700);
        color: $darkpink;
        margin-left: 10px;
    }

    .cart__checkout-line {
        width: 275px;
        height: 1px;
        background-color: #E2E2E2;
        margin-bottom: 17px;
    }

    .cart__checkout-btn {
        align-self: center;
        color: $white;
        background-color: $darkpink;
        text-transform: uppercase;
        border: 0;
        padding: 15px 42px;
        margin-bottom: 42px;
        @include font(16px, 19px, 300);

    }
}
</style>