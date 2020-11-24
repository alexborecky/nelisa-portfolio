<template>
    <div class="contact-page hero">
        <div class="container flex center-column">
            <div class="message">
                <h1>Feel free to get in touch with me via the following channels. Looking forward to hearing from you!</h1>
            </div>
            <div class="contact-info flex center-column">
                <a class="email flex center-column-left" href="mailto:info@nelisaalcalde.com">info@nelisaalcalde.com<span class="underline"></span></a>
                <a class="email-button" href="mailto:"><button>Email me!</button></a>
                <div class="social-media flex">
                    <a href="">
                        <img src="https://ik.imagekit.io/alexborecky/Nelisa/facebook_ASHwpKqQZi4w.svg" alt="">
                    </a>
                    <a href="">
                        <img src="https://ik.imagekit.io/alexborecky/Nelisa/instagram_WHdurseh05MIP.svg" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.contact-page {
    .container {
        height: 70vh;
        justify-content: space-evenly;
        .message {
            width: 80%;
            max-width: 1200px;
            h1 {
                font-size: 24px;
                text-transform: uppercase;
                opacity: 0.4;
                letter-spacing: 4px;
                line-height: 40px;
                font-weight: 700;
                @media only screen and (max-width: 1100px) {
                    font-size: 20px;
                }
                @media only screen and (max-width: 560px) {
                    font-size: 16px;
                    line-height: 32px;
                }
            }
        }
        .contact-info {
            .email {
                font-size: 80px;
                letter-spacing: 4px;
                @media only screen and (max-width: 1440px) {
                    font-size: 64px;
                }
                @media only screen and (max-width: 1100px) {
                    font-size: 56px;
                }
                @media only screen and (max-width: 900px) {
                    display: none;
                }
            }
            .email-button {
                display: none;
                button {
                    font-size: 24px;
                    font-weight: 700;
                    letter-spacing: 2px;
                    color: white;
                    padding: 16px 32px;
                    background-color: rgba($color: white, $alpha: .16);
                    border: none;
                    border-radius: 0px;
                    margin: 24px 0;
                    @media only screen and (max-width: 450px) {
                        font-size: 16px;
                        letter-spacing: 1px;
                    }
                }
                @media only screen and (max-width: 900px) {
                    display: block;
                }
            }
            .social-media {
                a {
                    margin: 40px;
                    img {
                        opacity: 0.2;
                        &:hover {
                            opacity: 1;
                        }
                        @media only screen and (max-width: 900px) {
                            height: 24px;
                        }
                    }
                    @media only screen and (max-width: 900px) {
                        margin: 24px;
                    }
                }
            }
        }
    }
}

</style>