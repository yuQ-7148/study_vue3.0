import { createApp } from 'vue'
// import App from './App.vue'
// import App from './components/05.class&style/App.vue'
// import App from './components/06.Count/App.vue'
// import App from './components/07.customEvent/App.vue'
// import App from './components/08.v-model/App.vue'
// import App from './components/09.watch/App.vue'
// import App from './components/10.life-cycle/App.vue'
// import App from './components/11.brother/App.vue'
// import App from './components/12.provide&injict/App.vue'
// import App from './components/13.network/App.vue'
// import App from './components/14.ref/App.vue'
// import App from './components/15.$nextTick/App.vue'
import App from './components/18.directive/App.vue'



import './index.css'
import axios from 'axios'

const app = createApp(App)

axios.defaults.baseURL = 'https://www.escook.cn'
app.config.globalProperties.$http = axios

app.directive('focus', {
    mounted(el) {
        el.focus()
    }
})

app.mount('#app')



//全局注册组件
import Swiper from './components/01.globalReg/Swiper.vue'
import Test from './components/01.globalReg/Test.vue'
app.component(Swiper.name, Swiper)
app.component('MyTest', Test)
