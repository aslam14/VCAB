import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from '@/js/router/router'
import store from '@/js/vuex/store'
import SocialSharing from "vue-social-sharing";
import * as VueGoogleMaps from 'vue2-google-maps'





Vue.config.productionTip = false

Vue.use(SocialSharing);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCdKyQ6X4YbkOyg2KF2weGmhqbLpDZT56I",
    libraries: "places" //necessary for places input
  }
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

