<template>
    <div>
        <h3>{{ count }}</h3>
        <button @click="count++">+1</button>
    </div>
</template>

<script>
export default {
    name: 'MyCounter',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        reset() {
            this.count = 0
        }
    }
}
</script>

<style scoped></style>