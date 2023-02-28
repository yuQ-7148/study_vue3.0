<template>
    <div>
        <h3>MyHome</h3>
        <router-link :to="{ name: 'mov', params: { id: 2 } }">go to movie</router-link>
    </div>
</template>

<script>
export default {
    name: 'MyHome',
}
</script>

<style lang="less" scoped>
h3 {
    color: red;
}
</style>