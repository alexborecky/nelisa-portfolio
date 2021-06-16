<template>
        <div class="player">
            <div class="video" :class="{'hidden-video': showVideo}">
                <div class="background flex middle" id="stop" @click="showVideo = true">
                    <iframe :src="link" width="80%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    <div class="cross mobile" @click="showVideo = false" id="stop"><h4>Close player</h4></div>
                </div>
            </div>
            <div class="start-video" id='start' @click="showVideo = false" :style="{backgroundImage: 'url('+ image +')'}">
            </div>
        </div>
</template>

<script>

    export default {
        name: 'VideoPlayer',
        data () {
            return {
                showVideo: true,
            }
        },
        props: [
            'link',
            'image'
        ],
        mounted () {
            var iframe = document.querySelector('iframe');
            var player = new Vimeo.Player(iframe);
            $('#start').click( function() {
                player.play();
            });
            $('#stop').click( function() {
                player.pause();
            });
        }
    }
</script>

<style lang="scss" scoped>

.player {
    width: 100%;
    height: 100vh;
}

.video.hidden-video {
    opacity: 0;
    z-index: -100;
    position: fixed;
    transition: .4s ease-in-out;
    iframe {
        transform: scale(1.2);
        transition: 2s ease-in-out;
    }
}

.start-video {
    width: 100%;
    height: 100%;
    z-index: 100 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    &:hover {
        cursor: url(https://ik.imagekit.io/alexborecky/Playground/play_ARW51TdN2rwE.svg) 35 20, auto;
    }
    img {
        height: auto;
        width: 100%;
    }
}

.video {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 1000;
    transition: .4s ease-in-out;
    iframe {
        width: 80vw !important;
        height: 80vh;
        transition: 1s ease-in-out;
    }
    .background {
        background-color: black;
        width: 100%;
        height: 100%;
        flex-flow: column;
        .cross {
            opacity: .4;
            margin-top: 16px;
            h4 {
                font-weight: 600;
            }
            &:hover {
                cursor: pointer !important;
                opacity: 1;
            }
        }
        &:hover {
            cursor: url(https://ik.imagekit.io/alexborecky/Playground/close_k8B7__sXRMC3B.svg) 25 15, auto !important;
        }
    }
    .start-video {
        display: none;
    }
}

.home {
    width: 80vw;
    .video {
        left: 0;
        .background {
            position: absolute;
            width: 100vw;
            height: 100vh;
            background-color: rgba($color: #000000, $alpha: .88);
            backdrop-filter: blur(4px);
        }
    }
    .start-video {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            height: auto;
        }
    }
}

.mobile.cross {
        @media (min-width: 768px) {
            display: none;
        }
}

</style>