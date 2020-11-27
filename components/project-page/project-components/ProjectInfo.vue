<template>
    <div class="project-info">
        <div class="title flex">
            <h1>This is title</h1>
        </div>
        <div class="tabs">
            <Tabs 
                tabOneTitle="Basic Info"
                tabTwoTitle="Awards"
                tabThreeTitle="Credits"
                tabFourTitle="Technical"
            >
                <div class="green-bkg" slot="tabOne"><Narrative /></div>
                <div slot="tabTwo"><Documentaries /></div>
                <div slot="tabThree"><MusicVideos /></div>
            </Tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProjectInfo'
    }
</script>

<style lang="scss" scoped>

.project-info {
    position: relative;
    top: 0;
    background-color: green;
    .title {
        h1 {
            text-transform: uppercase;
        }
    }
}

</style>