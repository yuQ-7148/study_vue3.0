<template>
    <div>
        <button @click="comName = 'MyHome'">Home</button>
        <button @click="comName = 'MyMovie'">Movie</button>
        <component :is="comName"></component>
    </div>
</template>

<script>
import MyHome from './Home.vue'
import MyMovie from './Movie.vue'

export default {
    name: 'MyApp',
    data() {
        return {
            comName: 'MyHome'
        }
    },
    components: {
        MyHome,
        MyMovie
    }
}
</script>

<style scoped></style>