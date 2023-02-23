<template>
    <div>
        <h3>根节点</h3>
        <hr>
        <my-style></my-style>
    </div>
</template>

<script>
import MyStyle from './Style.vue'

export default {
    name: 'MyApp',
    components: {
        MyStyle
    }
}

</script>

<style lang="less" scoped></style>