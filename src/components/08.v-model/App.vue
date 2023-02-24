<template>
    <div>
        <h3>count: {{ count1 }}</h3>
        <button @click="count1++">+1</button>

        <hr>

       <my-counter v-model:count2="count1"></my-counter>
    </div>
</template>

<script>
import MyCounter from './Counter.vue'
export default {
    name: 'MyApp',
    data() {
        return {
            count1: 0
        }
    },
    components: {
        MyCounter
    }
}
</script>

<style scoped></style>