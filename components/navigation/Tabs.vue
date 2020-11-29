<template>
    <div class="full-width flex center-column-left tabs">
        <div class="tab-bar flex full-width">
            <div 
                :class="{'active': currentTab == 1}" 
                class="tab flex " 
                @click="selectTab(1)">
                <p class="tab-text">{{tabOneTitle}}</p>
            </div>
            <div 
                :class="{'active': currentTab == 2}" 
                class="tab flex " 
                @click="selectTab(2)">
                <p class="tab-text">{{tabTwoTitle}}</p>
            </div>
            <div 
                :class="{'active': currentTab == 3}" 
                class="tab flex " 
                @click="selectTab(3)">
                <p class="tab-text">{{tabThreeTitle}}</p>
            </div>
            <div 
                :class="{'active': currentTab == 4}" 
                class="tab flex " 
                @click="selectTab(4)">
                <p class="tab-text">{{tabFourTitle}}</p>
            </div>
        </div>

        <div class="tab-content full-width">
            <div v-if="currentTab == 1" class="text">
                <slot name="tabOne"></slot>
            </div>

            <div v-if="currentTab == 2" class="text">
                <slot name="tabTwo"></slot>
            </div>

            <div v-if="currentTab == 3" class="text">
                <slot name="tabThree"></slot>
            </div>

            <div v-if="currentTab == 4" class="text">
                <slot name="tabFour"></slot>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Tabs',
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
    props: [
        'tabOneTitle',
        'tabTwoTitle',
        'tabThreeTitle',
        'tabFourTitle'
    ]
}
</script>

<style lang="scss" scoped>



.text {
    width: 100%;
    transition: .4s;
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
    .active {
        opacity: 1;
    }
}

    
</style>