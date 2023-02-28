<template>
    <div>
        <h3>MyApp</h3>
        <hr>

        <router-link to="/home">Home</router-link>
        <router-link to="/movie">Movie</router-link>
        <router-link to="/about">About</router-link>
        <br>

        <router-link to="/movie/1">电影1</router-link>
        <router-link to="/movie/2">电影2</router-link>
        <router-link to="/movie/3">电影3</router-link>

        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'MyApp'
}
</script>

<style scoped>
a {
    display: inline-block;
    margin-right: 20px;
}
</style>