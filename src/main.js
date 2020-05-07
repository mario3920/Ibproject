import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
 import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVueIcons from "bootstrap-vue";
import "./plugins/axios";
import firebase from "firebase"

Vue.config.productionTip = false;
Vue.use(BootstrapVueIcons);

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyB8S2v1i7TUMwzJHPWLsxpuKndZE-qgbtc",
  authDomain: "projetoweb-b3f0a.firebaseapp.com",
  databaseURL: "https://projetoweb-b3f0a.firebaseio.com/",
  projectId: "projetoweb-b3f0a",
  storageBucket: "projetoweb-b3f0a.appspot.com",
  messagingSenderId: "371630001955"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");