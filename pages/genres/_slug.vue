<template>
    <div class="hero">
        <div class="container">
            <div class="tab-bar flex full-width">
                <nuxt-link 
                    :to="`/genres/${genre.slug}`"
                    v-for="genre in genres" 
                    :key="genre.slug"
                    class="tab flex ">
                    <p class="tab-text">{{genre.slug}}</p>
                </nuxt-link>
            </div>
            <div class="video-grid">
                <projectPost 
                    v-for="film in films" 
                    :key="film.slug"
                    :title="film.title"
                    :thumbnail="film.thumbnail"
                    :hover="film.hover"
                    :to="`/films/${genre}/${film.slug}`"
                >
                </projectPost>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        async asyncData({$content, route}){
            const films = await $content('films', route.params.slug).sortBy('order','asc').fetch();
            const genres = await $content('genres').sortBy('order','asc').fetch();
            return {
                genres,
                films,
                genre: route.params.slug
            }
        },
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

.tab-bar {
    margin: 40px 0;
    .tab {
        opacity: 0.4;
        margin-right: 40px;
        &:hover {
            cursor: pointer;
            opacity: 1;
        }
    }
}

.nuxt-link-exact-active {
    opacity: 1 !important;
}

</style>