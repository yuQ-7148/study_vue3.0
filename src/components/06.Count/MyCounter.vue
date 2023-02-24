<template>
    <div>
        <input type="text" v-model.number="count">
        <p>{{ count }} x 2 = {{ plus }}</p>
    </div>
</template>

<script>
export default {
    name: 'MyCounter',
    data() {
        return { count: 1 }
    },
    computed: {
        plus() {
            return this.count * 2
        }
    }
}
</script>

<style scoped></style>