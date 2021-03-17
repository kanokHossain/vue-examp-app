// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Datepicker from 'vuejs-datepicker';
import VueSession from 'vue-session'
import Toasted from 'vue-toasted';
import Dialog from 'vue-dialog-loading'
import * as VueSpinnersCss from "vue-spinners-css";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
//uses
Vue.use(Dialog, {
  dialogBtnColor: '#0f0',
  background:'rgba(0, 0, 0, 0.5)'
})
Vue.use(VueSpinnersCss)
Vue.use(Loading);
Vue.use(Toasted)
Vue.use(VueAxios, axios)
Vue.use(VueSession)
//daynammic variable declaration
Vue.prototype.$axios = axios;
Vue.prototype.$hostname = 'http://localhost:8055/edus'
Vue.prototype.$server_host = 'http://localhost:8080'
Vue.prototype.$flag = 'vue_request'
//vue message declaration
Vue.prototype.$message1={duration: 2000,position: 'top-center',theme: 'bubble',
                          action: {
                            text: 'Close',
                            onClick: (e, toastObject) => {
                              toastObject.goAway(0);
                            }
                          },
                        }
// window.axios = require('axios')
//--------------------**here will go js file include**-------------------------------------
// import './assets/edus/assets/bootstrap/bootstrap.min.js'
// import './assets/edus/assets/datetimepicker/datetimepicker.js'
//--------------------**here will end js file include**-------------------------------------
require('./assets/edus/assets/pace/pace.css')
require('./assets/edus/assets/inilabs/jquery.min.js')
// require('./assets/edus/assets/toastr/toastr.min.js')
// require('./assets/edus/assets/custom-scrollbar/jquery.mCustomScrollbar.concat.min.js')
require('./assets/edus/assets/custom-scrollbar/jquery.mCustomScrollbar.css')
require('./assets/edus/assets/bootstrap/bootstrap.min.css')
// require('//cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.6.3/css/bootstrap-select.min.css')
// require('//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/css/select2.min.css')
require('./assets/edus/assets/fonts/font-awesome.css')
require('./assets/edus/assets/fonts/icomoon.css')
require('./assets/edus/assets/datatables/dataTables.bootstrap.css')
require('./assets/edus/assets/inilabs/themes/default/style.css')
require('./assets/edus/assets/inilabs/hidetable.css')
require('./assets/edus/assets/inilabs/themes/default/inilabs.css')
require('./assets/edus/assets/inilabs/responsive.css')
require('./assets/edus/assets/inilabs/custom.css')
require('./assets/edus/assets/toastr/toastr.min.css')
require('./assets/edus/assets/inilabs/mailandmedia.css')
// require('./assets/edus/assets/datatables/buttons.dataTables.min.css')
require('./assets/edus/assets/inilabs/combined.css')
require('./assets/edus/assets/datetimepicker/datetimepicker.css')
// require('./assets/edus/assets/datetimepicker/moment.js')
// require('./assets/edus/assets/datetimepicker/datetimepicker.js')
// require('./assets/edus/assets/datepicker/datepicker.css')
require('./assets/edus/assets/datepicker/datepicker.js')
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
export default {
  // ...
  components: {
    Datepicker
  }
  // ...
}
