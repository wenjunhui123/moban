import Vue from 'vue';
import App from './App.vue';
import routers from './routers/index';
import store from './store/index';
import ElementUI from 'element-ui';
import './assets/css/reset.min.css';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import "swiper/css/swiper.css";
import VueLazyload from 'vue-lazyload';
import axios from './api/axios';

Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);
Vue.use(VueLazyload,{
  error:'',
  loading:'',
  try:6,
});
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  routers,
  store,
  render: h => h(App),
}).$mount('#app')
