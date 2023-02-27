<template>
    <div>
        <my-com>
            <template #header>
                <p>header</p>
            </template>

            <template #default>
                <p>111</p>
                <p>222</p>
                <p>333</p>
            </template>

            <template #footer>
                <p>footer</p>
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