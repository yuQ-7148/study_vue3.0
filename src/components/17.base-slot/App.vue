<template>
    <div>
        <my-com>
            <template #default="{info}">
                {{ info }}
            </template>
        </my-com>
    </div>
</template>

<script>
import MyCom from './MyCom.vue';
export default {
    name: 'MyApp',
    components: {
        MyCom
    }
}
</script>

<style scoped></style>