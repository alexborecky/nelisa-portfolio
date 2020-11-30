<template>
    <div>
        <ProjectPage 
            :filmTitle="pers.title"
            :description="pers.description"
        />
    </div>
</template>

<script>

    export default {
        async asyncData({$content}) {
            const pers = await $content('Persephone').fetch();
            return {pers}
        },
        data () {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>