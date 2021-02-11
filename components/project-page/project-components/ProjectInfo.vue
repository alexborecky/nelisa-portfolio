<template>
    <div class="project-info">
        <div class="title flex">
            <h1>{{title}}</h1>
        </div>
        <div class="tabs">
            <Tabs 
                tabOneTitle="Basic Info"
                tabTwoTitle="Technical"
                tabThreeTitle=""
                tabFourTitle=""
            >
                <div class="green-bkg" slot="tabOne">
                    <div slot="tabTwo" class="credits-columns">
                        <div class="credits">
                            <div class="flex">
                                <div class="roles">
                                    <slot name="roles">
                                        <p>{{ role }}</p>
                                    </slot>
                                </div>
                                <div class="names">
                                    <slot name="names">
                                        <p>{{ name }}</p>
                                    </slot>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Description 
                        :description="description"
                    />
                </div>
                <!-- <div slot="tabTwo" class="flex">
                    <Awards 
                        v-for="award in awards"
                        :key="award.award"
                        :award="award.award"
                    />
                </div> -->
                <!-- <div slot="tabTwo" class="credits-columns">
                    <div class="credits">
                        <div class="flex">
                            <div class="roles">
                                <slot name="roles">
                                    <p>{{ role }}</p>
                                </slot>
                            </div>
                            <div class="names">
                                <slot name="names">
                                    <p>{{ name }}</p>
                                </slot>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div slot="tabTwo" class="technical-columns">
                    <div class="credits">
                        <div class="flex">
                            <div class="equip">
                                <slot name="equip">
                                    <p>{{ equip }}</p>
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            </Tabs>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'ProjectInfo',
        data() {
            return {
            }
        },
        props: [
            'title',
            'description',
            'role',
            'name',
            'equip',
        ]
    }
</script>

<style lang="scss" scoped>

.project-info {
    margin: 40px 0;
    position: relative;
    .title {
        h1 {
            text-transform: uppercase;
        }
    }
    // .credits-columns {
    //     -moz-column-count: 2;
    //     -moz-column-gap: 20px;
    //     -webkit-column-count: 2;
    //     -webkit-column-gap: 20px;
    //     column-count: 2;
    //     column-gap: 80px;
    // }
}

.credits {
    margin: 24px 0;
    p {
        text-transform: uppercase;
        text-align: left;
    }
    .names {
        margin-left: 40px;
        font-weight: 700;
    }
}

</style>