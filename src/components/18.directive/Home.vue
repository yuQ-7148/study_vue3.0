<template>
    <div>
        <h3 v-color="'red'">MyHome--{{ count }}</h3>
        <p v-color="'red'">test</p>
        <input type="text" v-focus v-color="'cyan'">
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
        focus: (el) => { el.focus() },
        color: (el, binding) => { el.style.color = binding.value }
    }
}
</script>

<style scoped></style>