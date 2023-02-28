<template>
    <div>
        <h3 v-color="'red'">MyHome--{{ count }}</h3>
        <p v-color="'red'">test</p>
        <input type="text" v-focus v-color="'cyan'">
        <button @click="count++">+1</button>

        <hr>

        <span class="badge rounded-pill text-bg-primary">Primary</span>
        <span class="badge rounded-pill text-bg-secondary">Secondary</span>
        <span class="badge rounded-pill text-bg-success">Success</span>
        <span class="badge rounded-pill text-bg-danger">Danger</span>
        <span class="badge rounded-pill text-bg-warning">Warning</span>
        <span class="badge rounded-pill text-bg-info">Info</span>
        <span class="badge rounded-pill text-bg-light">Light</span>
        <span class="badge rounded-pill text-bg-dark">Dark</span>
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