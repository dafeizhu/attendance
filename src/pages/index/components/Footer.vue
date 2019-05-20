<template>
  <div id="userLayout">
    <div class="container">
      <div class="footer">
        <div class="links">
          <a href="#">关于我们</a>
          <a href="#">服务条款</a>
          <a href="#">联系我们</a>
          <a href="#">帮助中心</a>
          <a href="#">团队说明</a>
        </div>
        <div class="copyright">
          Copyright &copy; 2019 zdxh
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  },
  mounted () {
    document.body.classList.add('userLayout')
  },
  beforeDestroy () {
    document.body.classList.remove('userLayout')
  }
}
</script>

<style scoped>
#userLayout .user-layout-wrapper {
  height: 100%;
}
.container {
  width: 100%;
  min-height: 100%;
  background-size: 100%;
  padding-bottom: 90px;
  position: relative;
}
.container a {
  text-decoration: none;
}
.footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 16px;
  margin: 48px 0 24px;
  text-align: center;
}
.links {
  margin-bottom: 8px;
  font-size: 14px;
  
}
.links a {
  margin-right: 20px;
  color: rgba(0, 0, 0, 0.45);
  transition: all 0.3s;
}
.links a:hover {
  color: rgba(0, 0, 0, 0.65);
}
.copyright {
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
</style>
