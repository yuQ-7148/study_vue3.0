<template>
    <div>
        <input type="text" v-if="inputVisible" ref="inp">
        <button v-else @click="showImput">显示文本框</button>
    </div>
</template>

<script>
export default {
    name: 'MyApp',
    data() {
        return {
            inputVisible: false
        }
    },
    methods: {
        showImput() {
            this.inputVisible = !this.inputVisible
            this.$nextTick(() => this.$refs.inp.focus())
        }
    }
}
</script>

<style scoped></style>