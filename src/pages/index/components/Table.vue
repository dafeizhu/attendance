<template>
  <a-table
    :columns="columns"
    :rowKey="data.cou_pl_id"
    :dataSource="data"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
  </a-table>
</template>

<script>
import reqwest from 'reqwest';
const columns = [{
  title: '院系',
  dataIndex: 'class_academic',
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
  title: '专业',
  dataIndex: 'class_profession',
  align: 'center'
}, {
  title: '班级',
  dataIndex: 'class_class',
  align: 'center'
}, {
  title: '任课老师',
  dataIndex: 'tea_name',
  align: 'center'
}, {
  title: '课程名',
  dataIndex: 'cou_info_course_name',
  align: 'center'
}, {
  title: '上课地点',
  dataIndex: 'cou_info_address',
  align: 'center'
}, {
  title: '上课日期',
  dataIndex: 'cou_pl_date',
  align: 'center'
}, {
  title: '缺勤人数',
  dataIndex: 'count',
  align: 'center'
}];
export default {
  name: 'Table',
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
      this.loading = true
      reqwest({
        url: 'http://139.199.192.171:8080/nanitao/attenceInfo/list.action',
        method: 'post',
        data: {
          page: params.page ? params.page : 1
        },
        type: 'json',
      }).then((data) => {
        const pagination = { ...this.pagination };
        pagination.total = data.total;
        this.loading = false;
        this.data = data.rows;
        this.pagination = pagination;
      });
    }
  },
}
</script>

<style scoped>

</style>
