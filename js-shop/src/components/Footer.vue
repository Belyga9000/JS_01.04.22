<template>
<div class="footer">
        <section class="footer__subscribe">
            <div class="footer__subscribe-wrap container">
            <div class="footer__subscribe-quote">
                <img class="footer__subscribe-quote-img" src="@/assets/img/face.png" alt="face">
                <p class="footer__subscribe-quote-text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“</p>
            </div>
            <form class="footer__subscribe-form" action="" method="post">
                <h2 class="footer__subscribe-form-heading">subscribe</h2>
                <p class="footer__subscribe-form-text">for our newletter and promotion</p>
                <input class="footer__subscribe-form-email" type="email" placeholder="Enter Your Email">
                <button type="submit" class="footer__subscribe-form-btn">Subscribe</button>
            </form>
        </div>
        </section>
        <div class=" footer__wrap">
            <div class="footer__wrap-controls container">
                <p class="footer__text">© 2021  Brand  All Rights Reserved.</p>
                <ul class= "footer__social-list">
                    <li class="footer__social-list-item"><a href="#"><img src="@/assets/img/facebook.svg" alt="facebook"></a></li>
                    <li class="footer__social-list-item"><a class="social__item-link" href="#"><img src="@/assets/img/insta.svg" alt="instagramm"></a></li>
                    <li class="footer__social-list-item"><a class="social__item-link" href="#"><img src="@/assets/img/psocial.svg" alt="psocialicon"></a></li>
                    <li class="footer__social-list-item"><a class="social__item-link" href="#"><img src="@/assets/img/twitter.svg" alt="twitter"></a></li>
                </ul>
            </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'bottompart'
}
</script>

<style lang="scss">

@import "@/assets/scss/_reset.scss";
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/_general.scss";

.footer {
@include mobile {
    @include min-width;
}

.footer__subscribe {
    background-image: url('~@/assets/img/footerphoto.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.footer__subscribe-wrap {
    display: flex;
    justify-content: space-between;

    @include tablet {
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
    }

}

.footer__subscribe-quote {
    width: 360px;
    text-align: center;

    .footer__subscribe-quote-img {
        margin: 97px 0 30px 0;

        @include mobile {
            margin: 64px 0 29px 0;
        }
    }

    .footer__subscribe-quote-text {
        font-size: 20px;
        font-style: italic;
        font-weight: 400;
        line-height: 24px;
    }

}

.footer__subscribe-form {
    margin: 150px 0 156px 0;

    .footer__subscribe-form-heading {
        font-size: 24px;
        font-weight: 700;
        line-height: 40px;
        text-align: center;
        text-transform: uppercase;
    }

    .footer__subscribe-form-text {
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        text-align: center;
        margin: 0 0 32px 0;
        text-transform: uppercase;
    }

    .footer__subscribe-form-email {
        background-color: #E1E1E1;
        border: none;
        padding: 15px 64px 15px 22px;
        border-radius: 25px 0 0 25px;
    }

    .footer__subscribe-form-btn {
        background-color: $darkpink;
        border: none;
        color: $white;
        padding: 15px 12px 15px 12px;
        border-radius: 0 25px 25px 0;
        position: absolute;
    }

    .footer__subscribe-form-btn:hover {
        opacity: 0.8;
    }

    .footer__subscribe-form-btn:active {
        background-color: red;
    }

    @include mobile {
        margin: 59px 0 110px 0;
    }
}

.footer__wrap {
    color: $white;
    background-color: $black;

    .footer__wrap-controls {
        display: flex;
        justify-content: space-between;

        @include mobile {
            align-items: center;
            justify-content: center;
            flex-direction: column-reverse;
        }
    }
}


.footer__text {
    margin: 30px 0 30px 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
}

.footer__social-list {
    display: inline-flex;
    margin: 24px 0px 0px 0px;

    .footer__social-list-item {
        margin: 0 7px 0 0;
    }
}


}
</style>