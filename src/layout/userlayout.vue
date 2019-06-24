<template>
  <div id="components-layout-demo-basic">
    <div class="loading-container" v-if="show">
      <loading></loading>
    </div>
    <a-layout v-if="!show">
        <a-layout-header>
                  <div>
                    <div class="header-left">
                      <p>拿你桃管理系统</p>
                    </div>
                    <div class="header-right">
                      <a-breadcrumb separator="|">
                        <a-breadcrumb-item
                          v-for="item of items"
                          :key="item"
                        ><a href="">{{item}}</a></a-breadcrumb-item>
                      </a-breadcrumb>
                    </div>
                  </div>
                </a-layout-header>
        <a-layout-content>
            <router-view></router-view>
          </a-layout-content>
        <a-layout-footer >
              <layout-footer></layout-footer>
          </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import layoutFooter from '../common/footer/Footer'
import Loading from "../pages/user/Loading";
export default {
  data () {
    return {
      items: ['基本版', 'English', '手机版'],
      show: true
    }
  },
  created() {
  },
  mounted () {
      document.body.classList.add('userLayout')
      setTimeout(() => {
          this.show = false
      }, 1000)
  },
  beforeDestroy () {
      document.body.classList.remove('userLayout')
  },
  components: {
      Loading,
      layoutFooter
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
.header-left {
  float: left;
  color: #777;
  font-size: 18px
}
.header-right {
  float: right
}
.ant-breadcrumb {
  line-height: 64px;
  height: 64px;
}
.loading-container{
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%)
}
</style>
