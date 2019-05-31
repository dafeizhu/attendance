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
                <a class="login-form-forgot" @click="handleForgetClick">忘记密码</a>
                <a-button type="primary" html-type="submit" class="login-form-button">登录</a-button>
                <a class="login-form-register" @click="handleRegisterClick">注册</a>
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
export default {
  name: "Login",
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  data () {
    return {
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
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          loginDataPost(values).then((res) => {
            if (res[0].islogin == "1") {
              alert(res[0].Msg)
              this.$router.push({
                name: 'SignIn'
              })
            }else {
              alert(res[0].Msg)
            }
          })
        }
      });
    },
    handleForgetClick () {
      this.$router.push('/forget')
    },
    handleRegisterClick () {
      this.$router.push('/register')
    }
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
  widows: 100%;
}
.login-form-border {
  border: 1px solid skyblue;
  padding: 36px;
  border-radius: 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, .4);
  max-width: 420px;
  min-width: 400px
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
#components-form-demo-normal-login .login-form-button {
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
