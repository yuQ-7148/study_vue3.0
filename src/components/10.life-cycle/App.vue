<template>
    <div>
        <life-cycle v-if="flag"></life-cycle>
        <button @click="flag = !flag">flag</button>
    </div>
</template>

<script>
import LifeCycle from './LifeCycle.vue'
export default {
    name: 'MyApp',
    data() {
        return {
            flag: true
        }
    },
    components: {
        LifeCycle
    }
}
</script>

<style scoped></style>