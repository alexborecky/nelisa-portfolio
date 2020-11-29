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
                <div slot="tabTwo"><Awards /></div>
                <div slot="tabThree">
                    <Credits 
                        :roleOne="roleName"
                        :roleTwo="roleTwo"
                        :roleThree="roleName"
                        :roleFour="roleName"
                        :roleFive="roleName"
                        :nameOne="name"
                        :nameTwo="name"
                        :nameThree="name"
                        :nameFour="name"
                        :nameFive="name"
                    />
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
                roleName: 'Director',
                roleTwo: 'Director of Photography',
                name: 'Name Surname'
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
}

</style>