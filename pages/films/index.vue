<template>
    <div class="hero">
        <div class="container">
            <nuxt-link id="temporary" to="/films/persephone">Persephone link</nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

#temporary {
    color: white;
        opacity: .4;
    font-size: 40px;
    &:hover {
        color: blue;
        opacity: 1;
    }
}

</style>