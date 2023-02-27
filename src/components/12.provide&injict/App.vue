<template>
    <div>
        <level-two></level-two>
    </div>
</template>

<script>
import LevelTwo from './LevelTwo.vue'
import { computed } from 'vue'


export default {
    name: 'MyApp',
    data() {
        return {
            color: 'red'
        }
    },
    provide() {
        return {
            color: computed(() => this.color)
        }
    },
    components: {
        LevelTwo
    }
}
</script>

<style scoped></style>