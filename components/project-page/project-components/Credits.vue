<template>
    <div class="credits flex full-width">
        <div class="half flex">
            <div class="roles">
                <ul>
                    <p>{{roleOne}}</p>
                    <p>{{roleTwo}}</p>
                    <p>{{roleThree}}</p>
                    <p>{{roleFour}}</p>
                    <p>{{roleFive}}</p>
                    <p>{{roleSix}}</p>
                </ul>
            </div>
            <div class="names">
                <ul>
                    <p>{{nameOne}}</p>
                    <p>{{nameTwo}}</p>
                    <p>{{nameThree}}</p>
                    <p>{{nameFour}}</p>
                    <p>{{nameFive}}</p>
                    <p>{{nameSix}}</p>
                </ul>
            </div>
        </div>
        <div class="half flex">
            <div class="roles">
                <ul>
                    <p>{{roleSeven}}</p>
                    <p>{{roleEight}}</p>
                    <p>{{roleNine}}</p>
                    <p>{{roleTen}}</p>
                    <p>{{roleEleven}}</p>
                    <p>{{roleTwelve}}</p>
                </ul>
            </div>
            <div class="names">
                <ul>
                    <p>{{nameSeven}}</p>
                    <p>{{nameEight}}</p>
                    <p>{{nameNine}}</p>
                    <p>{{nameTen}}</p>
                    <p>{{nameEleven}}</p>
                    <p>{{nameTwelve}}</p>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Credits',
        props: [
            'roleOne',
            'roleTwo',
            'roleThree',
            'roleFour',
            'roleFive',
            'roleSix',
            'roleSeven',
            'roleEight',
            'roleNine',
            'roleTen',
            'roleEleven',
            'roleTwelve',
            'nameOne',
            'nameTwo',
            'nameThree',
            'nameFour',
            'nameFive',
            'nameSix',
            'nameSeven',
            'nameEight',
            'nameNine',
            'nameTen',
            'nameEleven',
            'nameTwelve',
        ]
    }
</script>

<style lang="scss" scoped>

.credits {
    p {
        text-transform: uppercase;
        text-align: left;
    }
    .names {
        margin-left: 40px;
        p {
            font-weight: 700;
        }
    }
}

</style>