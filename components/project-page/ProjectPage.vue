<template>
    <div class="project-page hero flex center-column-top">
        <Heading />
        <div class="container">
            <ProjectInfo />
            <Stills />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProjectPage'
    }
</script>

<style lang="scss" scoped>

.project-page {
    position: absolute;
    top: 0;
}

</style>