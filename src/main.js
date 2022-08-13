import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// 测试vant组件
// import { Button } from 'vant'
// app.use(Button);

/* 引入插件 */
import getVant from './plugins'
const app = createApp(App)
getVant(app)
 
app.use(router).use(createPinia()).mount('#app')
