<template>
    <div>
        <p>第一个</p>
        <slot>
            <p>后备内容</p>
        </slot>
        <p>最后一个</p>
    </div>
</template>

<script>
export default {
    name: 'MyCom',
}
</script>

<style scoped></style>