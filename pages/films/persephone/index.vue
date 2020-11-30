<template>
    <div class="project-page hero flex center-column-top">
        <Heading />
        <div class="container">
            <ProjectInfo 
                :filmTitle="pers.title"
                :description="pers.description"
            />
            <Stills />
        </div>
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