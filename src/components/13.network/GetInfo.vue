<template>
    <div>
        <h3>GetInfo</h3>
        <button type="button" @click="getInfo">Get</button>
    </div>
</template>

<script>
export default {
    name: 'GetInfo',
    methods: {
        async getInfo() {
            const { data: res } = await this.$http.get('/api/get', {
                params: {
                    name: 'zs',
                    age: 33
                }
            })
            console.log(res);
        }
    }
}
</script>

<style scoped></style>