<template>
  <div class="wrapper">
    <a-form
        :form="form"
        @submit="handleSubmit"
    >
        <!--年级-->
      <a-form-item
            label="Grade"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18 }"
       >
            <a-select
                style="width: 120px"
                placeholder="请选择年级"
                @change="handleSelectGrade"
            >
                <a-select-option
                    v-for="(item,index) in Grade.option"
                    :key="index"
                >
                    {{item}}
                </a-select-option>
            </a-select>
        </a-form-item>
        <!--年级-->
        <!--院系-->
      <a-form-item
          label="院系"
          :label-col="{ span: 6 }"
          :wrapper-col="{ span: 18 }"
          v-if="academic"
      >
          <a-select
              placeholder="请选择院系"
              style="width: 120px"
              @change="handleSelectAcademic"
          >
              <a-select-option
                  :value="item"
                  v-for="(item, index) in academic"
                  :key="index"
              >
                  {{item}}
          </a-select-option>
          </a-select>
      </a-form-item>
        <!--院系-->
        <!--专业-->
      <a-form-item
            label="专业"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18 }"
            v-if="profession"
      >
          <a-select
              placeholder="请选择专业"
              style="width: 120px"
          >
            <a-select-option
                :value="item"
                v-for="(item, index) in profession"
                :key="index"
            >
            {{item}}
            </a-select-option>
          </a-select>
      </a-form-item>
        <!--专业-->
      <a-form-item
            label="课程"
            :label-col="{ span: 6 }"
            :wrapper-col="{ span: 18 }"
        >
            <a-input  placeholder='请输入课程名' />
        </a-form-item>
        <!--搜索按钮-->
      <a-form-item
          :wrapper-col="{ span: 12, offset: 1 }"
      >
          <a-button
              type="primary"
              html-type="submit"
          >
              search
          </a-button>
      </a-form-item>
        <!--搜索按钮-->
    </a-form>
  </div>
</template>

<script>
  import { selectListGrade, selectListAcademic } from '../../../api/axios'
  export default {
    name:'CourseSelecTable',
    data() {
      return {
        Grade: {
          id: 'grade',
          name: '年级',
          option: ['2015', '2016', '2017', '2018']
        },
        academic: '',
        profession: ''
      }
    },
    methods: {
      handleSubmit() {

      },
      handleSelectAcademic(item) {
        var Profession = []
        console.log(item);
        selectListAcademic(item).then((data) =>{
          console.log(data);
          data.forEach((item) => {
            Profession.push(item.profession_name)
          })
        })
        this.profession = Profession
      },
      handleSelectGrade(){
        var Academic = []
        selectListGrade().then((data) => {
          data.forEach((item) => {
            Academic.push(item.academic_name)
          })
        })
        this.academic= Academic
      },
      handleSelectProfession (){

      }
    }
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