<template>
    <div class="hero">
        <div class="container">
            <Tabs 
                tabOneTitle="Narrative"
                tabTwoTitle="Documentaries"
                tabThreeTitle="Music Videos"
                tabFourTitle="Archive"
            >
                <div class="green-bkg" slot="tabOne"><Narrative /></div>
                <div slot="tabTwo"><Documentaries /></div>
                <div slot="tabThree"><MusicVideos /></div>
                <div slot="tabFour">This is tab Four</div>
            </Tabs>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                currentTab: 1,
                isActive: ''
            }
        },
        methods: {
            selectTab(selectedTab) {
                this.currentTab = selectedTab
            },
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
</style>