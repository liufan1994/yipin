import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import tool from './tool'
import api from './api'
import echarts from 'echarts'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.use(api)
Vue.use(tool)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})
