<template>
    <div>
        <h3>MyRight</h3>
        <h3>count: {{ count }}</h3>
    </div>
</template>

<script>
import bus from './eventBus'

export default {
    name: 'MyRight',
    data() {
        return {
            count: 0
        }
    },
    created() {
        bus.on('countChange',(count) => {
            this.count = count
        })
    }
}
</script>

<style lang="less" scoped>

</style>