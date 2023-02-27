<template>
    <div>
        <input type="text" v-model.trim="info.username">
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MyWatch',
    data() {
        return {
            username: 'admin',
            info: {
                username: 'zs',
                age: 20
            }
        }
    },
    watch: {
        // async username(newVal, oldVal) {
        //     console.log(newVal, oldVal)
        //     const { data: res } = await axios.get('https://www.escook.cn./api/finduser/' + newVal)
        //     console.log(res)
        // }
        // username: {
        //     async handler(newVal, oldVal) {
        //         console.log(newVal, oldVal);
        //         const { data: res } = await axios.get('https://www.escook.cn./api/finduser/' + newVal)
        //         console.log(res);
        //     },
        //     immediate: true
        // }
        // info: {
        //     async handler(newVal, oldVal) {
        //         console.log(newVal);
        //         const { data: res } = await axios.get('https://www.escook.cn./api/finduser/' + newVal.username)
        //         console.log(res);
        //     },
        //     deep: true
        // }
        'info.username': {
            async handler(newVal, oldVal) {
                console.log(newVal);
                const { data: res } = await axios.get('https://www.escook.cn./api/finduser/' + newVal)
                console.log(res);
            }
        }
    }
}
</script>

<style scoped></style>