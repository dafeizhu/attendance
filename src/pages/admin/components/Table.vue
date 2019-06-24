<template>
  <a-table
    :columns="columns"
    :dataSource="data"
    :pagination="pagination"
    :loading="loading"
    rowKey="id"
    @change="handleTableChange"
  ></a-table>
</template>

<script>
  import {adminDataPost} from "../../../api/axios"
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
    title: "学生管理员",
    dataIndex: "stu_name",
    key: "stu_name",
    align: "center"
  },
  {
    title: "管理员学号",
    dataIndex: "cou_info_admin",
    key: "cou_info_admin",
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
      id:'',
      columns
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
      adminDataPost(params, this.searchData).then(data => {
        const pagination = { ...this.pagination }
        pagination.total = data.total
        this.loading = false
        this.data = data.rows
        this.pagination = pagination
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
</style>
