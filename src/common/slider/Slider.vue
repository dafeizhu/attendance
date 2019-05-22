<template>
<div>
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
      <a-menu-item key="1">
        <a-icon type="team" />
        <span>签到信息查询</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="table" />
        <span>课程管理</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
  <a-layout-header style="background: #fff; padding: 0">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="()=> collapsed = !collapsed"
    />
    <index-portrait></index-portrait>
  </a-layout-header>
  </div>
</template>

<script>
export default {
  name: 'Slider'
}
</script>

<style scoped>
.index-menu {
  margin-top: 16px;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}
.trigger:hover {
  color: #1890ff;
}
.logo {
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
.router-link-active {
  text-decoration: none;
}
</style>
