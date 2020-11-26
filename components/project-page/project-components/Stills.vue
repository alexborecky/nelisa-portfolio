<template>
    <div class="stills">
        <h3>Stills</h3>
        <div class="grid">
            <div class="row two-column flex">
                <div class="small-still"></div>
                <div class="small-still"></div>
            </div>
            <div class="row one-column">
                <div class="big-still"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Stills'
    }
</script>

<style lang="scss" scoped>

.stills {
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
                width: 49%;
                height: 400px;
                background-color: red;
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