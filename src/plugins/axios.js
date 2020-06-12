import Vue from "vue"
import axios from "axios"

axios.defaults.baseURL = "http://localhost:3333"

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
        
    }
})