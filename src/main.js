import { createApp } from 'vue'
// import App from './App.vue'
// import App from './components/05.class&style/App.vue'
// import App from './components/06.Count/App.vue'
// import App from './components/07.customEvent/App.vue'
import App from './components/08.v-model/App.vue'
import './index.css'

import Swiper from './components/01.globalReg/Swiper.vue'
import Test from './components/01.globalReg/Test.vue'

const app = createApp(App)
app.mount('#app')

app.component(Swiper.name, Swiper)
app.component('MyTest', Test)
