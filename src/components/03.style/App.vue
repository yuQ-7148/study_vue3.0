<template>
    <h1>这是 App.vue 组件</h1>

    <p>App 中的 p 标签</p>
    <p>App 中的 p 标签</p>

    <hr>

    <MyList></MyList>
</template>
  
<script>
import MyList from './List.vue'

export default {
    name: 'MyApp',
    components: {
        MyList
    }
}
</script>
  
<style lang="less" scoped>
p {
    color: red;
}

div {
    background-color: yellow;

    :deep(p) {
        color: goldenrod;
    }
}

:deep(.title) {
    color: cyan;
}
</style>