<template>
    <div>
        <h3>MyApp</h3>
        <hr>

        <a href="#/home">Home</a>
        <a href="#/movie">Movie</a>
        <a href="#/about">About</a>

        <component :is="comName"></component>
    </div>
</template>

<script>
import MyHome from './MyHome.vue'
import MyMovie from './MyMovie.vue'
import MyAbout from './MyAbout.vue'

export default {
    name: 'MyApp',
    data() {
        return {
            comName: 'MyHome'
        }
    },
    components: {
        MyHome,
        MyMovie,
        MyAbout
    },
    created() {
        window.onhashchange = () => {
            switch (location.hash) {
                case '#/home':
                    this.comName = 'MyHome'
                    break
                case '#/movie':
                    this.comName = 'MyMovie'
                    break
                case '#/about':
                    this.comName = 'MyAbout'
                    break
            }
        }
    }
}
</script>

<style scoped>
a {
    display: inline-block;
    margin-right: 20px;
}
</style>