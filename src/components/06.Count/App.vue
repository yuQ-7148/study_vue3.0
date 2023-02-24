<template>
    <div>
        <my-count  :state="state"></my-count>
        <my-counter></my-counter>
    </div>
</template>

<script>
import MyCount from './Count.vue'
import MyCounter from './MyCounter.vue'

export default {
    name: 'MyApp',
    data() {
        return {
            count: 123,
            state: false
        }
    },
    components: {
        MyCount,
        MyCounter
    }
}
</script>

<style scoped></style>