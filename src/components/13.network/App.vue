<template>
    <div>
       <get-info></get-info>
       <post-info></post-info>
    </div>
</template>

<script>
import GetInfo from './GetInfo.vue'
import PostInfo from './PostInfo.vue'
export default {
    name: 'MyApp',
    components: {
        GetInfo,
        PostInfo
    }
}
</script>

<style scoped></style>