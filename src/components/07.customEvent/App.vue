<template>
    <div>
        <my-counter @countChange="getCount"></my-counter>
    </div>
</template>

<script>
import MyCounter from './Counter.vue'
export default {
    name: 'MyApp',
    components: {
        MyCounter
    },
    methods: {
        getCount(val) {
            console.log('getCount触发了', val)
        }
    }
}
</script>

<style scoped></style>