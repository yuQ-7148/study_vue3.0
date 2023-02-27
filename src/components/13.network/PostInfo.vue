<template>
    <div>
        <h3>PostInfo</h3>
        <button type="button" @click="postInfo">Post</button>
    </div>
</template>

<script>
export default {
    name: 'PostInfo',
    methods: {
        async postInfo() {
            const {data: res} = await this.$http.post('/api/post', { name: 'zs', age: 20 })
            console.log(res);
        }
    }
}
</script>

<style scoped></style>