import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faEllipsisH, 
  faTimes, 
  faPlus,
  faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faEllipsisH)
library.add(faTimes)
library.add(faPen)
library.add(faPlus)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueFire)
firebase.initializeApp({
   projectId: 'YOUR_PROJECT_ID', 
   databaseURL: 'YOUR_DB_URL'
})
export const db = firebase.firestore()

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
