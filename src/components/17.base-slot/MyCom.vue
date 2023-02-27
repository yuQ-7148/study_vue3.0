<template>
    <div>
        <slot name="header"></slot>
        <hr>
        <slot></slot>
        <hr>
        <slot name="footer"></slot>
        <slot :info="count"></slot>
    </div>
</template>

<script>
export default {
    name: 'MyCom',
    data() {
        return {
            count: 0
        }
    }
}
</script>

<style scoped></style>