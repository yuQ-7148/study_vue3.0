<template>
    <div>
       <h3 ref="myh3">根组件</h3>
       <button @click="getRefs">获取</button>
       <my-counter ref="counterRef"></my-counter>
    </div>
</template>

<script>
import MyCounter from './Counter.vue'

export default {
    name: 'MyApp',
    methods: {
        getRefs() {
            this.$refs.counterRef.reset()
        }
    },
    components: {
        MyCounter
    }
}
</script>

<style scoped></style>