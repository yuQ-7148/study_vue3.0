<template>
    <div>
       <h3>LevelThree</h3>
       <h3>{{ color.value }}</h3>
    </div>
</template>

<script>
export default {
    name: 'LevelThree',
    inject: ['color']
}
</script>

<style scoped></style>