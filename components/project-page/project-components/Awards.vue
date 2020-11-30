<template>
    <div class="awards flex">
        <img :src="award" alt="">
    </div>
</template>

<script>
    export default {
        name: 'Awards',
        props: [
            'award'
        ]
    }
</script>

<style lang="scss" scoped>

.awards {
    img {
        max-height: 120px;
        margin-right: 80px;
    }
}

</style>