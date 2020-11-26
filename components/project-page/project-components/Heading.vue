<template>
    <div class="video hero">
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/437175844" width="640" height="360" frameborder="0" allowfullscreen></iframe>
    </div>
</template>

<script>
    export default {
        name: 'Heading'
    }
</script>

<style lang="scss" scoped>

.video {
    width: 100vw;
    height: 100vh;
    iframe { 
        width: 100%; 
        height: 100%;
    }
}

</style>