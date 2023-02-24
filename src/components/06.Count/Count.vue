<template>
    <div>
        <p>数量：{{ count }}</p>
        <p>状态：{{ state }}</p>
    </div>
</template>

<script>
export default {
    name: 'MyCount',
    //    props: [
    //     'count',
    //     'state'
    //    ]
    props: {
        count: {
            type: [Number, String],
            default: '默认值'
        },
        state: Boolean,
        type: {
            validator(value) {
                return ['success', 'warning', 'danger'].indexOf(value) !== -1
            }
        }
    }
}
</script>

<style scoped></style>