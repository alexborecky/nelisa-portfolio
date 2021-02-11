<template>
    <div class="hero">
        <div class="container">
            <Heading 
                :link="film.link"
            />
            <ProjectInfo 
                :title="film.title"
                :description="film.description"
            >
                <div slot="roles"
                    v-for="item in film.roles" 
                    :key="item.role">
                    <p>{{item.role}}</p>
                </div>
                <div slot="names"
                    v-for="item in film.roles" 
                    :key="item.role">
                    <p>{{item.name}}</p>
                </div>
                <div slot="equip"
                    v-for="item in film.equipment" 
                    :key="item.equipment">
                    <p>{{item.equip}}</p>
                </div>
            </ProjectInfo>
            <div class="stills">
                <h3>Stills</h3>
                <div class="grid">
                    <div class="row two-column still-grid">
                        <img class="small-still"
                            v-for="image in film.images" 
                            :key="image" 
                            :src="image.src" 
                            alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        async asyncData({$content, route}){
        const film = await $content('films', route.params.genre, route.params.slug).fetch();
            return {
                film,
                params: route.params
            }
        },
    }
</script>

<style lang="scss" scoped>

.stills {
    margin-top: 80px;
    h3 {
        text-transform: uppercase;
        font-size: 24px;
        letter-spacing: 4px;
    }
    .grid {
        width: 100%;
        .row {
            margin: 2% 0;
        }
        .two-column {
            width: 100%;
            justify-content: space-between;
            .small-still {
                width: 100%;
                height: auto;
                gap: 20px;
            }
        }
        .one-column {
            width: 100%;
            .big-still {
                width: 100%;
                height: 800px;
                background-color: blue;
            }
        }
    }
}

</style>