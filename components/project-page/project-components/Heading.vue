<template>
    <div class="video hero">
        <iframe :src="link" width="640" height="360" frameborder="0" allowfullscreen></iframe>
    </div>
</template>

<script>
    export default {
        name: 'Heading',
        props: [
            'link'
        ]
    }
</script>

<style lang="scss" scoped>

.video {
    width: 100%;
    height: 100vh;
    iframe { 
        top: 0;
        left: 0;
        position: absolute;
        width: 100%; 
        height: 100%;
    }
}

</style>