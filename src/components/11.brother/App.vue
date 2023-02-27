<template>
    <div>
        <my-left></my-left>
        <my-right></my-right>
    </div>
</template>

<script>
import MyLeft from './Left.vue'
import MyRight from './Right.vue'
export default {
    name: 'MyApp',
    components: {
        MyLeft,
        MyRight
    }
}
</script>

<style lang="less" scoped>
div {
    border: 1px black solid;
    width: 300px;
    height: 200px;
    display: inline-block;}
</style>