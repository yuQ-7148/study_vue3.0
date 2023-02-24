<template>
    <div>
        <p>count 的值： {{ count }}</p>
        <button @click="add">+1</button>
    </div>
</template>

<script>
export default {
    name: 'MyCounter',
    data() {
        return { count: 1 }
    },
    emits: ['countChange'],
    methods: {
        add() {
            this.count++
            this.$emit('countChange',this.count)
        }
    },
}
</script>

<style scoped></style>