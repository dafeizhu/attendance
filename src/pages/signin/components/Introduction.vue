<template>
  <div class="introduction">
    <div class="introduction-nav">
      <a-breadcrumb :routes="routes">
        <template slot="itemRender" slot-scope="{route, params, routes, paths}">
          <span v-if="routes.indexOf(route) === routes.length - 1">
            {{route.breadcrumbName}}
          </span>
          <router-link v-else :to="`${basePath}/${paths.join('/')}`">
            {{route.breadcrumbName}}
          </router-link>
        </template>
      </a-breadcrumb>
      <br/>
    </div>
    <div class="introduction-avatar-dsc">
      <a-avatar class="introduction-avatar" :size="80" src="/images/touxiang.png" />
      <span>晚上好，dafeizhu，熬夜加班伤身体，注意休息哦！</span>
      <p>前端工程师 | 中山大学新华学院 - 代码敲得都队 - AntDesign-Vue</p>
    </div>  
  </div>
</template>
<script>
export default {
  name: 'Introduction',
  data () {
      const { lang } = this.$route.params
      return {
        basePath: `/${lang}/components/breadcrumb`,
        routes: [{
          path: 'index',
          breadcrumbName: '首页'
        }, {
          path: 'first',
          breadcrumbName: '签到信息查询'
        }, {
          path: 'second',
          breadcrumbName: '工作台'
        }],
      }
    },
}
</script>
<style scoped>
.introduction {
  margin-top: 4px;
  width: 100%;
  min-height: 142px;
  background-color: #fff;
  padding: 16px 32px 0;
}
.introduction-avatar-dsc {
  position: relative;
  min-height: 80px;
  max-width: 800px;
}
.introduction-avatar {
  float: left;
  margin-right: 40px;
}
.introduction-avatar-dsc span {
  display: inline-block;
}
.introduction-avatar-dsc span {
  font-size: 24px;
}
.introduction-avatar-dsc p {
  display: inline-block;
  margin-top: 12px;
  color: rgba(0, 0, 0, 0.45)
}
</style>
