<template>
    <div class="project-page hero flex center-column-top">
        <Heading />
        <div class="container">
            <ProjectInfo 
                v-for="film in films" 
                :key="film.slug"
                :title="film.title"
                :description="description"
            />
        </div>
        <Stills />
    </div>
</template>

<script>
    export default {
        name: 'ProjectPage',
        props: [
            'title',
            'description'
        ]
    }
</script>

<style lang="scss" scoped>

.project-page {
    position: absolute;
    top: 0;
}

</style>