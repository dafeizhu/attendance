<template>
    <!--@change="handleTableChange"-->
    <div class="wrapper">
        <a-table
            :columns="columns"
            :dataSource="data"
            :pagination="pagination"
            :loading="loading"
            @change="handleTableChange"
    >
    <template slot="operate" slot-scope="text, record">
        <a-popconfirm
            v-if="data.length"
            title="Sure to delete?"
            @confirm="() => onDelete(record.key)"
        >
            <a href="javascript:;">Delete</a>
        </a-popconfirm>
        <a  @click="showModal" href="javascript:;">
            Edit
        </a>
        <a-modal
            :maskStyle="maskStyle"
            v-model="visible"
            title="Title"
            onOk="handleOk"
        >
            <template slot="footer">
                <a-button key="back" @click="handleCancel">Return</a-button>
                <a-button key="submit" type="primary" :loading="EditLoading" @click="handleOk">
                    Submit
                </a-button>
            </template>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </a-modal>
    </template>
    </a-table>
    </div>
</template>

<script>
  import { courseDataPost,courseDelete } from '../../../api/axios'
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
      { text: '2018', value: '2018' }
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
  },{
    title: 'Operate',
    dataIndex: 'operate',
    scopedSlots: { customRender: 'operate' }
  }];
  export default {
    name: 'CourseTable',
    props: {
      searchData: {
        type: Object,
        default: null
      }
    },
    mounted() {
      this.fetch();
    },
    data() {
      return {
        maskStyle: {opacity:0.2,backgroundColor:'rgba(0, 0, 0, 0.2)'},
        data: [],
        pagination: {},
        loading: false,
        EditLoading: false,
        visible: false,
        bbb: {},
        abc:[],
        columns
      }
    },
    methods: {
      showModal() {
        this.visible = true;
      },
      handleOk() {
        this.loading = true;
        setTimeout(() => {
          this.visible = false;
          this.loading = false;
        }, 3000);
      },
      handleCancel() {
        this.visible = false;
      },
      onDelete(key){
        const dataSource = [...this.data]
        console.log(key);
        this.bbb = dataSource.find(item =>item.key == key)
        courseDelete(this.bbb.cou_info_id).then((data) =>{
          console.log(data);
        })
        // // this.data = dataSource.find(item =>item.key == key)
        // this.data = dataSource.filter(item =>item.key!==key)


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
      }
    },
    watch: {
      searchData() {
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
</style>
