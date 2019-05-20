<template>
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
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      items: ['基本版', 'English', '手机版']
    }
  }
}
</script>

<style scoped>
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
</style>
