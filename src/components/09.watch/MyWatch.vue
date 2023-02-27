<template>
    <div>
        <input type="text" v-model.trim="username">
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MyWatch',
    data() {
        return {
            username: 'admin'
        }
    },
    watch: {
        // async username(newVal, oldVal) {
        //     console.log(newVal, oldVal)
        //     const { data: res } = await axios.get('https://www.escook.cn./api/finduser/' + newVal)
        //     console.log(res)
        // }
        username: {
            async handler(newVal, oldVal) {
                console.log(newVal, oldVal);
                const { data: res } = await axios.get('https://www.escook.cn./api/finduser/' + newVal)
                console.log(res);
            },
            immediate: true
        }
    }
}
</script>

<style scoped></style>