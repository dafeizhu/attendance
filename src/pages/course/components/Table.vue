<template>
    <div class="wrapper">
        <a-button class="editable-add-btn" type="primary" @click="handleAdd" icon="plus">新建</a-button>
        <a-table
                row-key="cou_info_id"
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
                <a-divider type="vertical" />
                <a @click="handleEdit(record.key)">
                    Edit
                </a>
            </template>
        </a-table>
        <edit-modal
                :edit-data="EditData"
                @submit="handleOk"
                ref="editmodal"
        >

        </edit-modal>
        <create-modal ref="createmodal" @submit="CreateOk"></create-modal>
    </div>
</template>

<script>
  import { courseDataPost,courseDelete,courseEdit,courseEdited,courseCreate } from '../../../api/axios'
  import EditModal from './modules/EditModal'
  import CreateModal from './modules/CreateModal'
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
    components:{
      EditModal,
      CreateModal
    },
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
        data: [],
        pagination: {},
        loading: false,
        DeleteInfo: {},
        EditData:{},
        EditedData:{},
        columns
      }
    },
    methods: {
      CreateOk(val){
        courseCreate(val).then((data) =>{
          console.log(data);
          this.fetch()
        })
      },
      handleAdd(){
        this.$refs.createmodal.add()
      },
      handleEdit(key){
        this.EditData = {}
        courseEdit(key).then((data) =>{
          if(data.statusText == 'OK'){
            this.EditData = data.data
            this.$refs.editmodal.edit()
            // this.visible = true
          }
        })
      },
      handleOk(val) {
        // this.EditData= {}
        console.log(this.EditData);
        courseEdited(val).then((data) =>{
          if (data.data =='OK'){
            this.fetch()
          }
        })
      },
      onDelete(key){
        console.log(key);
        courseDelete(key).then((data) =>{
          if(data.data=="OK"){
            this.fetch()
          }
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
.editable-add-btn {
    margin-bottom: 8px;
}
</style>

