<template>
    <!--@change="handleTableChange"-->
    <div class="wrapper">
        <a-table
            :columns="columns"
            :key="data.id"
            :dataSource="data"
            :pagination="pagination"
            :loading="loading"
            @change="handleTableChange"
    >
        <a slot="action"  href="javascript:;">Delete</a>
    </a-table>
    </div>
</template>

<script>
  import axios from 'axios'
  const columns = [{
    title: '课程名',
    dataIndex: 'cou_info_course_name',
    align: 'center'
  }, {
    title: '年级',
    dataIndex: 'class_grade',
    filters: [
      { text: '2015', value: '2015' },
      { text: '2016', value: '2016' },
      { text: '2017', value: '2017' },
      { text: '2018', value: '2018' }
    ],
    align: 'center'
  }, {
    title: '学院',
    dataIndex: 'class_academic',
    align: 'center'
  }, {
    title: '专业',
    dataIndex: 'class_profession',
    align: 'center'
  }, {
    title: '班级',
    dataIndex: 'class_class',
    align: 'center'
  }, {
    title: '周数',
    dataIndex: 'cou_info_weekcount',
    align: 'center'
  }, {
    title: '上课地点',
    dataIndex: 'cou_info_address',
    align: 'center'
  },  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    scopedSlots: { customRender: 'action' }
  }];
  export default {
    name: 'CourseTable',
    mounted() {
      this.fetch();
    },
    data() {
      return {
        data: [],
        pagination: {},
        loading: false,
        columns,
      }
    },
    methods: {
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
        const url = 'http://139.199.192.171:8080/nanitao/courfeInfo/list.action';
        return axios.get(url, {
          header: {
            'Content-Type': 'application/x-www-form-urlencoded;'
          }
        }).then((data) => {

          const pagination = { ...this.pagination };
          pagination.total = 22;
          this.loading = false;
          this.data = data.data;
          this.pagination = pagination;
        });
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
</style>
