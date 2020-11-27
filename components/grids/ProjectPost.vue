<template>
    <nuxt-link to="/films/persephone" class="project-post flex">
        <h3>{ {projectTitle} }</h3>
    </nuxt-link>
</template>

<script>
    export default {
        name: 'ProjectPost'
    }
</script>

<style lang="scss" scoped>

.project-post {
    height: 240px;
    background-color: red;
    align-items: flex-end;
    h3 {
        margin: 32px;
    }
}

</style>