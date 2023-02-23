<template>
    <div>
        <h3>根节点</h3>
        <input type="text" v-model="info.title">
        <input type="text" v-model="info.author">
        <my-article :title="info.title" :author="info.author"></my-article>
    </div>
</template>

<script>
import MyArticle from './Article.vue'

export default{
    name: 'MyApp',
    data() {
        return {
            info: {
                title: 'abc',
                author: '123'
            }
        }
    },
    components: {
        MyArticle
    }
}
</script>