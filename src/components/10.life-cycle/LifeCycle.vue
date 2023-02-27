<template>
    <div>
       <h3>{{ count }}</h3>
       <button @click="count++">+1</button>
    </div>
</template>

<script>
export default {
    name: 'LifeCycle',
    data() {
        return {
            count: 0
        }
    },
    created() {
        console.log('created');
    },
    mounted() {
        console.log('mounted');
    },
    unmounted() {
        console.log('unmounted');
    },
    updated() {
        console.log('updated');
    }
}
</script>

<style scoped></style>