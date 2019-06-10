<template>
  <div class="wrapper">
    <a-form
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 18 }"
        :label="grade.name"
      >
        <a-select
          v-decorator="['grade']"
          :placeholder='"请选择"+grade.name'
          @change="handleSelectGrade"
        >
          <a-select-option
            :value="value"
            v-for="(value, index) in grade.option"
            :key="index"
          >
            {{value}}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 18 }"
        label="院系"
        v-if="academic"
      >
        <a-select
          v-decorator="['academic']"
          placeholder="请选择院系"
          @change="handleSelectAcademic"
        >
          <a-select-option
            :value="value"
            v-for="(value, index) in academic"
            :key="index"
          >
            {{value}}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 18 }"
        label="专业"
        v-if="profession"
      >
        <a-select
          v-decorator="['profession']"
          placeholder="请选择专业"
          @change="handleSelectProfession"
        >
          <a-select-option
            :value="value"
            v-for="(value, index) in profession"
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
        <a-input v-decorator="['courseName']" placeholder='请输入课程名' />
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
import { selectListGrade, selectListAcademic } from '../../../api/axios'
export default {
  name: 'SelectTable',
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
      grade: {
        id: 'grade',
        name: '年级',
        option: ['2015', '2016', '2017', '2018']
      },
      academic: '',
      profession: ''
        // {
        //   id: 'academic',
        //   name: '院系',
        //   option: ['信息科学学院', '会计学院', '管理学院', '经贸学院']
        // },
        // {
        //   id: 'profession',
        //   name: '专业',
        //   option: ['计算机科学与技术', '电子', '软件工程', '数字媒体']
        // },
        // {
        //   id: 'Class',
        //   name: '班级',
        //   option: ['A', 'B', 'C']
        // }
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        console.log(values);
        if (!err) {
          this.$emit('searchBtn', values)
        }
      });
    },
    handleSelectGrade () {
      var Academic = []
      selectListGrade ().then((data) => {
        data.forEach((item) => {
          Academic.push(item.academic_name)
        })
      })
      this.academic = Academic
    },
    handleSelectAcademic (value) {
      console.log(value);
      selectListAcademic (value).then((data) => {
        console.log(data)
      })
    },
    handleSelectProfession (value) {
      console.log(value)
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