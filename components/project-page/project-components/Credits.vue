<template>
    <div class="credits flex half">
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
            'nameOne',
            'nameTwo',
            'nameThree',
            'nameFour',
            'nameFive',
            'nameSix'
        ]
    }
</script>

<style lang="scss" scoped>

.credits {
    max-width: 40%;
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