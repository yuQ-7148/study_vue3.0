<template>
    <div>
        <my-count  :state="state"></my-count>
    </div>
</template>

<script>
import MyCount from './Count.vue'
export default {
    name: 'MyApp',
    data() {
        return {
            count: 123,
            state: false
        }
    },
    components: {
        MyCount
    }
}
</script>

<style scoped></style>