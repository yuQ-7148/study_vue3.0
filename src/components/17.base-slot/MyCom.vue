<template>
    <div>
        <slot name="header"></slot>
        <hr>
        <slot></slot>
        <hr>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    name: 'MyCom',
}
</script>

<style scoped></style>