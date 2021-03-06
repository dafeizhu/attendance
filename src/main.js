import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Affix, Layout, Breadcrumb, Form, Input, Icon, Checkbox, Button, Row, Col, Menu, Dropdown, Divider, Avatar, Table, Select,Popconfirm,message, Modal,Spin} from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'
import store from './store'
import axios from 'axios';

Vue.use(Affix)
Vue.use(Layout)
Vue.use(Breadcrumb)
Vue.use(Form)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Checkbox)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Dropdown)
Vue.use(Divider)
Vue.use(Avatar)
Vue.use(Table)
Vue.use(Select)

Vue.use(Modal)
Vue.use(Spin)
Vue.prototype.$message = message

Vue.use(Popconfirm)
Vue.use(Modal)

Vue.config.productionTip = false
axios.defaults.withCredentials=true;

new Vue({
  router,
  render: h => h(App),
  store
}).$mount("#app")
