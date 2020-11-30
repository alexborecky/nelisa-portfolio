<template>
    <div class="project-info">
        <div class="title flex">
            <h1>{{filmTitle}}</h1>
        </div>
        <div class="tabs">
            <Tabs 
                tabOneTitle="Basic Info"
                tabTwoTitle="Awards"
                tabThreeTitle="Credits"
                tabFourTitle=""
            >
                <div class="green-bkg" slot="tabOne">
                    <Description 
                        :description="description"
                    />
                </div>
                <div slot="tabTwo" class="flex">
                    <Awards 
                        v-for="award in awards"
                        :key="award.award"
                        :award="award.award"
                    />
                </div>
                <div slot="tabThree" class="credits-columns">
                    <CreditsTest
                        v-for="role in roles"
                        :key="role.title"
                        :role="role.role"
                        :name="role.name"
                    />
                </div>
            </Tabs>
        </div>
    </div>
</template>

<script>

import roles from '@/assets/films/persephone/roles.js'
import awards from '@/assets/films/persephone/awards.js'

    export default {
        name: 'ProjectInfo',
        data() {
            return {
                roleName: 'Director',
                roleTwo: 'Director of Photography',
                name: 'Name Surname',
                roles: roles,
                awards: awards
            }
        },
        props: [
            'filmTitle',
            'description'
        ]
    }
</script>

<style lang="scss" scoped>

.project-info {
    margin: 40px 0;
    position: relative;
    top: 0;
    .title {
        h1 {
            text-transform: uppercase;
        }
    }
    .credits-columns {
        -moz-column-count: 2;
        -moz-column-gap: 20px;
        -webkit-column-count: 2;
        -webkit-column-gap: 20px;
        column-count: 2;
        column-gap: 80px;
    }
}

</style>