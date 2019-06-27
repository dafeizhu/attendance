<template>
  <!--@change="handleTableChange"-->
  <!-- @click="handleSubmit"  -->
  <div class="wrapper">
    <a-table class="table" :columns="columns" :dataSource="data" :pagination="pagination" :loading="loading" @change="handleTableChange">
      <template slot="operate" slot-scope="text, record">
        <a-popconfirm v-if="data.length" title="确定要删除吗?" @confirm="() => onDelete(record.key)">
          <a href="javascript:;">删除</a>
        </a-popconfirm>
        <a @click="showModal" href="javascript:;">
          修改
        </a>
        <a-modal class="modal" :maskStyle="maskStyle" v-model="visible" title="随手记" onOk="handleOk">
          <template slot="footer">
            <a-button key="back" @click="handleCancel">返回</a-button>
            <a-button key="submit" type="primary" html-type="submit" :loading="EditLoading" @click="handleOk">
              提交
            </a-button>
          </template>
          <div class="form-wrapper">
            <a-form :form="form" @submit="handleSubmit">
              <a-form-item label="cou_info_id" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
                <a-input v-decorator="[
        'cou_info_id',
        {rules: [{ required: true, message: 'Please input your cou_info_id!' }]}
      ]" />
              </a-form-item>
              <a-form-item label="课程名" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
                <a-input v-decorator="[
        '课程名',
        {rules: [{ required: true, message: 'Please input your 课程名!' }]}
      ]" />
              </a-form-item>
              <a-form-item label="course_num" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
                <a-input v-decorator="[
        'course_num',
        {rules: [{ required: true, message: 'Please input your course_num!' }]}
      ]" />
              </a-form-item>
              <a-form-item label="class_num" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
                <a-input v-decorator="[
        'class_num',
        {rules: [{ required: true, message: 'Please input your class_num!' }]}
      ]" />
              </a-form-item>
              <a-form-item label="tea_num" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
                <a-input v-decorator="[
        'tea_num',
        {rules: [{ required: true, message: 'Please input your tea_num!' }]}
      ]" />
              </a-form-item>
              <a-form-item label="class_term" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
                <a-input v-decorator="[
        'class_term',
        {rules: [{ required: true, message: 'Please input your class_term!' }]}
      ]" />
              </a-form-item>
              <a-form-item label="weekcount" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
                <a-input v-decorator="[
        'weekcount',
        {rules: [{ required: true, message: 'Please input your weekcount!' }]}
      ]" />
              </a-form-item>
              <a-form-item label="地址" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
                <a-input v-decorator="[
        '地址',
        {rules: [{ required: true, message: 'Please input your 地址!' }]}
      ]" />
              </a-form-item>
              <a-form-item label="长度" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
                <a-input v-decorator="[
        '长度',
        {rules: [{ required: true, message: 'Please input your 长度!' }]}
      ]" />
              </a-form-item>
              <a-form-item label="开始" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
                <a-input v-decorator="[
        '开始',
        {rules: [{ required: true, message: 'Please input your 开始!' }]}
      ]" />
              </a-form-item>
              <a-form-item label="星期X" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
                <a-input v-decorator="[
        '星期X',
        {rules: [{ required: true, message: 'Please input your 星期X!' }]}
      ]" />
              </a-form-item>
            </a-form>
          </div>
        </a-modal>
      </template>
    </a-table>
  </div>
</template>

<script>
import { courseDataPost, courseDelete } from '../../../api/axios'
const columns = [{
  title: '课程名',
  dataIndex: 'cou_info_course_name',
  key: 'cou_info_course_name',
  align: 'center'
}, {
  title: '年级',
  dataIndex: 'class_grade',
  key: 'class_grade',
  filters: [
    { text: '2015', value: '2015' },
    { text: '2016', value: '2016' },
    { text: '2017', value: '2017' },
    { text: '2016', value: '2016' }
  ],
  align: 'center'
}, {
  title: '学院',
  dataIndex: 'class_academic',
  key: 'class_academic',
  align: 'center'
}, {
  title: '专业',
  dataIndex: 'class_profession',
  align: 'center',
  key: 'class_profession',
}, {
  title: '班级',
  dataIndex: 'class_class',
  key: 'class_class',
  align: 'center'
}, {
  title: '周数',
  dataIndex: 'cou_info_weekcount',
  key: 'cou_info_weekcount',
  align: 'center'
}, {
  title: '上课地点',
  dataIndex: 'cou_info_address',
  key: 'cou_info_address',
  align: 'center'
}, {
  title: '操作',
  dataIndex: 'operate',
  scopedSlots: { customRender: 'operate' },
  align: 'center'
}];
export default {
  name: 'CourseTable',
  props: {
    searchData: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.fetch();
  },
  data () {
    return {
      maskStyle: { opacity: 0.2, backgroundColor: 'rgba(0, 0, 0, 0.2)' },
      data: [],
      pagination: {},
      loading: false,
      EditLoading: false,
      visible: false,
      bbb: {},
      abc: [],
      columns,
      formLayout: 'vertical',
      form: this.$form.createForm(this),
      bodyStyle: {}
    }
  },
  methods: {
    showModal () {
      this.visible = true;
    },
    handleOk () {
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 3000);
    },
    handleCancel () {
      this.visible = false;
    },
    onDelete (key) {
      const dataSource = [...this.data]
      console.log(key);
      this.bbb = dataSource.find(item => item.key == key)
      courseDelete(this.bbb.cou_info_id).then((data) => {
        console.log(data);
      })
    },
    handleTableChange (pagination, filters, sorter) {
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      });
    },
    fetch (params = {}) {
      console.log(params);
      this.loading = true
      courseDataPost(params, this.searchData).then((data) => {
        const pagination = { ...this.pagination };
        pagination.total = data.total;
        this.loading = false;
        this.data = data.rows;
        console.log(this.data);
        this.pagination = pagination;
      });
    },
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  },
  watch: {
    searchData () {
      this.fetch()
    }
  }
}
</script>

<style scoped>
.wrapper {
  min-height: 70px;
  background: #fff;
  margin: 24px 16px;
  padding: 24px;
  overflow: hidden;
}
.form-wrapper {
  height: 650px;
}
.ant-form-item {
  width: 100%;
}
</style>
