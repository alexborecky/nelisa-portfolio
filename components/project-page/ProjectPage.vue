<template>
    <div class="project-page hero flex center-column-top">
        <Heading />
        <div class="container">
            <ProjectInfo 
                :filmTitle="filmTitle"
                :description="description"
            />
            <Stills />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProjectPage',
        props: [
            'filmTitle',
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