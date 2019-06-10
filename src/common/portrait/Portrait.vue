<template>
  <div class="protrait">
    <div class="protrait-icon">
      <a-icon type="bell" :style="{ fontSize: '16px', }"></a-icon>
    </div>
    <a-dropdown class="protrait-dropdown">
      <a class="ant-dropdown-link" href="#">
        <img class="ant-dropdown-link-img" src="/images/touxiang.png" />dafeizhu
      </a>
      <a-menu class="protrait-menu" slot="overlay">
        <a-menu-item class="protrait-menu-item" v-for="item of items" :key="item.id" @click="handleClick">
            <a href="javascript:;"><a-icon class="protrait-menu-item-icon" :type="item.icon"/>{{item.name}}</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-modal
            title="提示"
            v-model="visible"
            @ok="handleOk"
            @cancel="handleCancel"
    >
      <p>是否退出？</p>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'Portrait',
  data() {
    return {
      visible:false,
      items: [{
        id: 1,
        name: '个人中心',
        icon: 'user'
      },
        {
          id: 2,
          name: '账号设置',
          icon: 'setting'
        },
        {
          id: 3,
          name: '退出登录',
          icon: 'logout'
        }]
    }
  },

  methods: {
    handleClick: function (e) {
      const id = e.key
      switch (id) {
        case 1:{
          console.log(id)
          break
        }
        case 2:{
          console.log(id)
          break
        }
        case 3:{
          this.visible = true

        }
      }
    },
    handleOk:function () {
      this.visible = false
      this.delCookie()
      this.$message.success('退出成功！')
      this.$router.push({
        name: 'login'
      })
    },
    handleCancel:function () {
      this.visible = false
    },
    delCookie:function () {
      const cookie = window.document.cookie
      if (cookie != null) {
        window.document.cookie = 'userName' + '=' + '' + ';path=/;expires=' + ''
        window.document.cookie = 'userPwd' + '=' + '' + ';path=/;expires=' + ''
      }
    }
  }
}
</script>

<style scoped>
.protrait {
  position: absolute;
  margin-right: 10px;
  max-width: 170px;
  top: 0;
  right: 0;
}
.protrait-icon {
  float: left;
  cursor: pointer;
  text-align: center;
  padding: 0 8px;
  width: 38px;
}
.protrait-dropdown {
  float: right;
  padding: 0 8px;
  width: 122px;
}
.protrait-dropdown:hover,
.protrait-icon:hover {
  background-color: rgba(0, 0, 0, 0.025)
}
.ant-dropdown-link {
  color: rgba(0, 0, 0, 0.65)
}
.ant-dropdown-link:focus {
  text-decoration: none;
}
.ant-dropdown-link-img {
  margin-right: 10px;
  width: 30px;
  height: 30px;
}
/* .protrait-menu {
  position: absolute;
  top: 0;
  right: 0;
} */
.protrait-menu-item {
  width: 170px;
}
.protrait-menu-item-icon {
  margin-right: 14px;
}
</style>
