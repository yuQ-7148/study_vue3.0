<template>
    <div>
        <h1 class="title">这是 List.vue 组件</h1>

        <p>List 中的 p 标签</p>

        <div>
            <p>List 中的 p 标签</p>
            <p>List 中的 p 标签</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyList'
}
</script>

<style lang="less" scoped>
p {
    color: cyan;
}

// .title{
//     color: green;
// }
</style>