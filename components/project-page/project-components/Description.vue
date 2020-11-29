<template>
    <div class="description full-width">
        <p>{{ description }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Description',
        props: [
            'description'
        ]
    }
</script>

<style lang="scss" scoped>

.description {
    p {
        max-width: 1200px;
    }
}

</style>