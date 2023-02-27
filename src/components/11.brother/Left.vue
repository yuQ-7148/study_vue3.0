<template>
    <div>
        <h3>MyLeft</h3>
        <h3>count: {{ count }}</h3>
        <button @click="addCount">+1</button>
    </div>
</template>

<script>
import bus from './eventBus'

export default {
    name: 'MyLeft',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        addCount() {
            this.count++
            bus.emit('countChange',this.count)
        }
    }
}
</script>

<style lang="less" scoped>

</style>