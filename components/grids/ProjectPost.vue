<template>
    <nuxt-link to="/films/persephone" class="project-post flex" :style="{backgroundImage: 'url('+ thumbnail +')'}">
        <h3>{{projectTitle}}</h3>
        <div class="overlay"></div>
    </nuxt-link>
</template>

<script>
    export default {
        name: 'ProjectPost',
        props: [
            'projectTitle',
            'thumbnail'
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
        background: rgba(0,0,0,.4);
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 1;
        transition: background .3s ease-in;
    }
    &:hover {
        .overlay {
            background: rgba(0,0,0,.2);
        }
        background-size: auto 110%;
    }
}

</style>