<template>
  <div class="wrapper">
    <a-form
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item
        v-for="(select, index) in selects"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 18 }"
        :label="select.name"
        :key="index"
      >
        <a-select
          v-decorator="[select.name]"
          :placeholder='"请选择"+select.name'
        >
          <a-select-option
            :value="value"
            v-for="(value, index) in select.option"
            :key="index"
          >
            {{value}}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        label="课程"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 19 }"
      >
        <a-input v-decorator="['课程']" placeholder='请输入课程名' />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 1 }">
        <a-button
          type="primary"
          html-type="submit"
        >
          搜索
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'SelectTable',
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
      selects: [
        {
          name: '年级',
          option: ['2015', '2016', '2017', '2018']
        },
        {
          name: '院系',
          option: ['信息科学学院', '会计学院', '管理学院', '经贸学院']
        },
        {
          name: '专业',
          option: ['计算机科学与技术', '电子', '软件工程', '数字媒体']
        },
        {
          name: '班级',
          option: ['A班', 'B班', 'C班']
        }
      ],
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  },
}
</script>

<style>
.wrapper {
  min-height: 70px;
  background: #fff;
  margin: 24px 16px;
  padding: 24px;
  overflow: hidden;
}
.ant-form-item {
  min-width: 180px;
  float: left;
  margin: 10px 10px
}
</style>