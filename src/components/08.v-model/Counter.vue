<template>
    <div>
        <h3>count: {{ count2 }}</h3>
        <button @click="minus">-1</button>
    </div>
</template>

<script>
export default {
    name: 'MyCounter',
    props: {
        count2: Number
    },
    emits: ['update:count2'],
    methods: {
        minus() {
            return this.$emit('update:count2', this.count2 - 1)
        }
    }
}
</script>

<style scoped></style>