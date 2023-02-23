<template>
    <div>
        <h3>标题：{{ title }}</h3>
        <h5>作者：{{ author }}</h5>
        <input type="text" :placeholder="title">
        <input type="text" :placeholder="author">
    </div>
</template>

<script>
export default{
    name: 'MyArticle',
    props: ['title','author']
}
</script>