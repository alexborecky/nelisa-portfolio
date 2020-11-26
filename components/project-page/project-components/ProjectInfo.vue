<template>
    <div class="project-info">
        <div class="title flex">
            <h1>This is title</h1>
        </div>
        <div class="tabs">
            <div class="controls flex">
                <h2>{ {tabOne} }</h2>
                <h2>{ {tabTwo} }</h2>
                <h2>{ {tabThree} }</h2>
            </div>
            <div class="description">
                <p>Lorem Ipsum</p>
            </div>
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
    height: 400px;
    background-color: green;
    .title {
        h1 {
            text-transform: uppercase;
        }
    }
}

</style>