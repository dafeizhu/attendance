<template>
  <div>
    <a-table :columns="columns" :dataSource="data" :pagination="pagination" :loading="loading" @change="handleTableChange">
      <div slot="operate">
        <a-button type="primary" @click="showModal">查看详情</a-button>
      </div>
    </a-table>
    <a-modal :footer="null" :centered="true" title="缺勤名单" :visible="visible" @ok="handleOk" :confirmLoading="confirmLoading" @cancel="handleCancel">
      <ul class="list" v-for="(item, index) in absenceList[currentTarget]" :key="index">
        <li>{{item.stu_name}} {{item.stu_num}}</li>
      </ul>
    </a-modal>
  </div>
</template>

<script>
import { signInDataPost } from "../../../api/axios"
const columns = [
  {
    title: "院系",
    dataIndex: "class_academic",
    key: "class_academic",
    align: "center"
  },
  {
    title: "年级",
    dataIndex: "class_grade",
    key: "class_grade",
    align: "center"
  },
  {
    title: "专业",
    dataIndex: "class_profession",
    key: "class_profession",
    align: "center"
  },
  {
    title: "班级",
    dataIndex: "class_class",
    key: "class_class",
    align: "center"
  },
  {
    title: "任课老师",
    dataIndex: "tea_name",
    key: "tea_name",
    align: "center"
  },
  {
    title: "课程名",
    dataIndex: "cou_info_course_name",
    key: "cou_info_course_name",
    align: "center"
  },
  {
    title: "上课地点",
    dataIndex: "cou_info_address",
    key: "cou_info_address",
    align: "center"
  },
  {
    title: "上课日期",
    dataIndex: "cou_pl_date",
    key: "cou_pl_date",
    align: "center"
  },
  {
    title: "缺勤人数",
    dataIndex: "count",
    key: "count",
    align: "center"
  },
  {
    title: '缺勤学生',
    scopedSlots: { customRender: 'operate' },
    key: "key",
    align: "center"
  }
]
export default {
  name: "Table",
  props: {
    searchData: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.fetch()
  },
  data () {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns,
      ModalText: '查看缺勤学生',
      visible: false,
      confirmLoading: false,
      absenceList: [],
      currentTarget: 0
    }
  },
  methods: {
    handleTableChange (pagination, filters, sorter) {
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      })
    },
    fetch (params = {}) {
      this.loading = true
      signInDataPost(params, this.searchData).then(data => {
        const pagination = { ...this.pagination }
        pagination.total = data.total
        this.loading = false
        this.data = data.rows
        this.pagination = pagination
        this.absenceListAdd(data.rows)
      })
    },
    showModal (e) {
      this.visible = true
      this.currentTarget = e.path[3].dataset.rowKey - 1
    },
    handleOk () {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel () {
      this.visible = false
    },
    absenceListAdd (list) {
      list.forEach(item => {
        this.absenceList.push(item.absencelist)
      })
    }
  },
  watch: {
    searchData () {
      this.fetch()
      this.pagination.current = 1
    }
  }
}
</script>

<style scoped>
.list {
  list-style: none;
  text-align: center;
  font-size: 16px;
}
</style>
