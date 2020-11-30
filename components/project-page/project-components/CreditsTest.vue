<template>
    <div class="credits">
        <div class="row flex">
            <p class="role">{{ role }}</p>
            <p class="names">{{ name }}</p>
        </div>
        <!-- <div class="half flex">
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
        </div> -->
    </div>
</template>

<script>
    export default {
        name: 'Credits',
        props: [
            'role',
            'name'
        ]
    }
</script>

<style lang="scss" scoped>

.credits {
    max-height: 200px;
    margin: 8px 0;
    p {
        text-transform: uppercase;
        text-align: left;
    }
    .role {
        min-width: 280px;
        max-width: 280px;
    }
    .names {
        margin-left: 40px;
        font-weight: 700;
    }
    .row {
        -moz-column-count: 2;
        -moz-column-gap: 20px;
        -webkit-column-count: 2;
        -webkit-column-gap: 20px;
        column-count: 2;
        column-gap: 20px;
    }
}

</style>