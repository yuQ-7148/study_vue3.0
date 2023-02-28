<template>
    <div>
        <h3>MyHome--{{ count }}</h3>
        <input type="text" v-focus>
        <button @click="count++">+1</button>
    </div>
</template>

<script>
export default {
    name: 'MyHome',
    data() {
        return {
            count: 0
        }
    },
    directives: {
        focus: (el) => { el.focus() }
    }
}
</script>

<style scoped></style>