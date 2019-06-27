<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      width="260"
      :trigger="null"
      v-model="collapsed"
    >
      <router-link to="/index">
        <div class="logo">
          <img src="/images/logo.png" :style="{ height: '80px', width: '75px' }"/>
          拿你桃管理系统
        </div>
      </router-link>
      <a-menu class="index-menu" theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1" @click="itemClick">
          <a-icon type="team" />
          <span>签到信息查询</span>
        </a-menu-item>
        <a-menu-item key="2" @click="itemClick">
          <a-icon type="table" />
          <span>课程管理</span>
        </a-menu-item>
        <a-menu-item key="3" @click="itemClick">
          <a-icon type="user" />
          <span>管理员查询</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
          style="float: left"></a-icon>
        <indexlayout-portrait></indexlayout-portrait>
      </a-layout-header>
      <router-view></router-view>
      <indexlayout-footer></indexlayout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import IndexlayoutFooter from '../common/footer/Footer'
import IndexlayoutPortrait from '../common/portrait/Portrait'
export default {
  data () {
    return {
      collapsed: false,
      sessionId: ''
    }
  },
  components: {
    IndexlayoutFooter,
    IndexlayoutPortrait
  },
  methods: {
    itemClick ({ key }) {
      if (key == 1) {
        this.$router.push('/index/signin')
      } else if (key == 2) {
        this.$router.push('/index/course')
      } else if (key == 3) {
        this.$router.push('/index/admin')
      }
    }
  }
}
</script>

<style scoped>
.index-menu {
  margin-top: 16px;
}
#components-layout-demo-custom-trigger .ant-layout-header {
  min-height: 64px;
  position: relative;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}
#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
#components-layout-demo-custom-trigger .logo {
  padding-right: 32px;
  cursor: pointer;
  overflow: hidden;
  height: 80px;
  line-height: 80px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  background: #002140;
  transition: all 0.3s;
  text-decoration: none
}
#components-layout-demo-custom-trigger .router-link-active {
    text-decoration: none;
}
</style>
