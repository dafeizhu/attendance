<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <login-header></login-header>
      </a-layout-header>
      <a-layout-content>
        <login-content></login-content>
      </a-layout-content>
      <a-layout-footer>
        <login-footer></login-footer>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import LoginHeader from './components/Header'
import LoginContent from './components/Content'
import LoginFooter from './components/Footer'
export default {
  name: 'Login',
  components: {
    LoginHeader,
    LoginContent,
    LoginFooter
  }
}
</script>

<style scoped>
#components-layout-demo-basic .ant-layout-content,
#components-layout-demo-basic .ant-layout-footer {
  padding: 0 10%;
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  padding: 0 10%;
  background: #f8f8f8;
  border: 1px solid #e7e7e7;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0
}
#components-layout-demo-basic .ant-layout-content {
  padding-top: 5%;
  background: #fff;
  color: #ccc;
  min-height: 120px;
  line-height: 120px;
}
</style>
