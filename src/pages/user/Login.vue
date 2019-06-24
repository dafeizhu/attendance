<template>
  <div id="components-layout-demo-basic">
      <div class="wrapper">
          <a-row>
            <a-col :xs="0" :sm="0" :md="12" :lg="12" :xl="12">
              <div class="content-right">
                <span class="content-right-title">好学生，不逃课！</span>
                <p class="content-right-dscone">{{contentRight[randomNum].dscOne}}</p>
                <p class="content-right-dsctwo">{{contentRight[randomNum].dscTwo}}</p>
                <img class="content-right-img" :src="contentRight[randomNum].imgUrl" />
              </div>
            </a-col>
            <a-col :xs="0" :sm="4" :md="0" :lg="0" :xl="0" />
            <a-col :xs="24" :sm="20" :md="12" :lg="12" :xl="12">
              <div class="login-form-border">
                <p>欢迎登录</p>
                <a-form
                  id="components-form-demo-normal-login"
                  :form="form"
                  class="login-form"
                  @submit="handleSubmit"
                >
                  <a-form-item>
                    <a-input
                      v-decorator="['userName',
                      { rules: [{ required: true, message: '请输入用户名!' }] }]"
                      placeholder="用户名"
                    >
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
                    </a-input>
                  </a-form-item>
                  <a-form-item>
                    <a-input
                      v-decorator="['password',
                      { rules: [{ required: true, message: '请输入密码!' }] }]"
                      type="password"
                      placeholder="请输入密码"
                    >
                      <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
                    </a-input>
                  </a-form-item>
                  <a-form-item>
                    <a-checkbox
                      v-decorator="['remember', { valuePropName: 'checked', initialValue: true, }]"
                    >记住我</a-checkbox>
                    <a-button type="primary" html-type="submit" class="login-form-button">登录</a-button>
                  </a-form-item>
                </a-form>
              </div>
            </a-col>
          </a-row>
      </div>
  </div>
</template>

<script>
import { loginDataPost } from '../../api/axios'
import {message} from 'ant-design-vue'
import Vue from 'vue'
Vue.prototype.$message = message
export default {
  name: "Login",
  beforeCreate() {
    this.form = this.$form.createForm(this)
  },
  data () {
    return {
      visible: false,
      fail: false,
      contentRight: [{
        dscOne: '逃得了初一，逃不过十五',
        dscTwo: '跑得了和尚，跑不了庙',
        imgUrl: '/images/background-1.png'
      },
      {
        dscOne: '沉舟侧畔千帆过',
        dscTwo: '病树前头万木春',
        imgUrl: '/images/background-2.png'
      },
      {
        dscOne: '读书破万卷，下笔如有神',
        dscTwo: '书读百遍，其意自见',
        imgUrl: '/images/background-3.png'
      },
      {
        dscOne: '书山有路勤为径',
        dscTwo: '学海无涯苦作舟',
        imgUrl: '/images/background-4.png'
      },
      {
        dscOne: '宝剑锋从磨砺出',
        dscTwo: '梅花香自苦寒来',
        imgUrl: '/images/background-5.png'
      }]
    }
  },
  mounted () {
    this.getCookie()
  },
  methods: {
    handleSubmit(e) {
      var that = this
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          loginDataPost(values).then((res) => {
            if (res[0].islogin == "1") {
              this.$message.success('登录成功',2)
              this.$router.push({
                    name: 'SignIn'
                })
              if (values.remember === true) {
                that.setCookie(values.userName,values.password,7)
              }
            } else {
                this.$message.error('用户名或密码不正确',2)
                this.form.setFieldsValue({
                    'userName': '',
                    'password': ''
                })
            }
          })
        }
      });
    },
    // 设置cookie
    setCookie (c_name, c_pwd, exdays) {
      var exdate = new Date()
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays)
      window.document.cookie = 'userName' + '=' + c_name + ';path=/;expires=' + exdate.toGMTString()
      window.document.cookie = 'userPwd' + '=' + c_pwd + ';path=/;expires=' + exdate.toGMTString()
    },
    // 读取cookie
    getCookie:function() {
      var that = this
      if (document.cookie.length > 0) {
        var arr = document.cookie.split('; ') // 这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split('=') // 再次切割
          // 判断查找相对应的值
          if (arr2[0] === 'userName') {
            that.form.setFieldsValue({
              'userName': arr2[1]
            }) // 保存到保存数据的地方
          } else if (arr2[0] === 'userPwd') {
            that.form.setFieldsValue({
              'password': arr2[1]
            })
          }
        }
      }
    },
  },
  computed: {
    randomNum () {
      const randomNum = parseInt(Math.random()*5)
      return randomNum
    }
  }
};
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
.content-right {
  position: relative;
  width: 400px;
  float: right;
  margin-right: 30px
}
.content-right-title {
  font-size: 24px;
  color: #018ab8;
  position: absolute;
  top: 0;
  left: 20px
}
.content-right-dscone {
  position: absolute;
  top: 42px;
  left: 20px;
  color: #333
}
.content-right-dsctwo {
  position: absolute;
  top: 62px;
  left: 20px;
  color: #333
}
.content-right-img {
  width: 400px;
  height: 400px;
  border-radius: 8px
}
.wrapper {
  width: 100%;
}

.login-form >>> .ant-input {
    width: 331.75px;
}

.login-form-button {
    min-height: 40px;
    width: 331.75px;
    font-size: 20px;
}
.login-form-border {
  border: 1px solid skyblue;
  padding: 36px;
  border-radius: 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, .4);
  max-width: 420px;
  min-width: 400px;
  min-height: 405px;
}
.login-form-border p {
  font-size: 36px;
  height: 64px;
  line-height: 64px;
  color: #333;
}
#components-form-demo-normal-login .login-form {
  min-width: 430px;
}
#components-form-demo-normal-login  {
  min-height: 40px;
  width: 100%;
  font-size: 20px
}
#components-form-demo-normal-login .ant-checkbox-wrapper {
  float: left;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
</style>
