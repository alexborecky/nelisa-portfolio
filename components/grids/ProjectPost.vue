<template>
    <nuxt-link to="/films/persephone" class="project-post flex" :style="{backgroundImage: 'url('+ thumbnail +')'}">
        <h3>{{projectTitle}}</h3>
        <div class="overlay" :style="{backgroundImage: 'url('+ hover +')'}">
        </div>
    </nuxt-link>
</template>

<script>
    export default {
        name: 'ProjectPost',
        props: [
            'projectTitle',
            'thumbnail',
            'hover'
        ]
    }
</script>

<style lang="scss" scoped>

.project-post {
    height: 240px;
    background-size: auto 100%;
    background-position: center;
    align-items: flex-end;
    transition: background-size .3s ease-in;
    -webkit-transition: background-size .3s ease-in;
    h3 {
        margin: 32px;
        z-index: 2;
    }
    .overlay {
        background-size: cover;
        opacity: 0;
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 1;
    }
    &:hover {
        .overlay {
            opacity: 1;
        }
    }
}

</style>