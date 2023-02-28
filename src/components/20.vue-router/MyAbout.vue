<template>
    <div>
        <h3>MyAbout</h3>
        <hr>

        <router-link to="/about/tab1">tab1</router-link>&nbsp;
        <router-link to="/about/tab2">tab2</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'MyAbout',
}
</script>

<style lang="less" scoped>
h3 {
    color: blue;
}
</style>