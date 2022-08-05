
require('./bootstrap');

import Vue from 'vue'

window.Vue = require('vue');

Vue.component('componente1-index',require('./components/Componente1/index.vue').default)

const app = new Vue({
    el:'#app'
})
