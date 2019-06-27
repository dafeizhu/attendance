<template>
    <a-modal
        v-model="visible"
        title="信息编辑框"
        @cancel="handleCancel"
        @ok="handleOk"
        cancelText="取消"
        okText="确认"
    >
        <div class="form-wrapper">
            <a-form
                v-if="EditData"
                :key="EditData.cou_info_id"
                :form="form"
            >
                <a-form-item
                    label='cou_info_id'
                    v-bind="formItemLayout"
                >
                    <a-input
                        v-decorator="[
                        'cou_info_id',
                            {
                                initialValue:EditData.cou_info_id
                            }
                        ]"
                    />
                </a-form-item>
                <a-form-item
                    label="course_name"
                    v-bind="formItemLayout"
                >
                    <a-input
                        v-decorator="[
                            'cou_info_course_name',
                            {
                                initialValue:EditData.cou_info_course_name
                            }
                        ]"
                    />
                </a-form-item>
                <a-form-item
                    label='course_num'
                    v-bind="formItemLayout"
                >
                    <a-input
                        v-decorator="[
                            'cou_info_course_num',
                            {
                                initialValue:EditData.cou_info_course_num
                            }
                        ]"
                    />
                </a-form-item>
                <a-form-item
                        label='class_num'
                        v-bind="formItemLayout"
                >
                    <a-input
                        v-decorator="[
                            'cou_info_class_num',
                            {
                                initialValue:EditData.cou_info_class_num
                            }
                        ]"
                    />
                </a-form-item>
                <a-form-item
                        label='class_term'
                        v-bind="formItemLayout"
                >
                    <a-input
                        v-decorator="[
                            'cou_info_class_term',
                                {
                                    initialValue:EditData.cou_info_class_term
                                }
                        ]"
                    />
                </a-form-item>
                <a-form-item
                    label='tea_num'
                    v-bind="formItemLayout"
                >
                    <a-input
                        v-decorator="[
                            'cou_info_tea_num',
                                {
                                    initialValue:EditData.cou_info_tea_num
                                }
                        ]"
                    />
                </a-form-item>
                <a-form-item
                    label='weekcount'
                    v-bind="formItemLayout"
                >
                    <a-input
                        v-decorator="[
                            'cou_info_weekcount',
                                {
                                    initialValue:EditData.cou_info_weekcount
                                }
                        ]"
                    />
                </a-form-item>
                <a-form-item
                    label='address'
                    v-bind="formItemLayout"
                >
                    <a-input
                        v-decorator="[
                            'cou_info_address',
                                {
                                    initialValue:EditData.cou_info_address
                                }
                        ]"
                    />
                </a-form-item>
                <a-form-item
                    label='length'
                    v-bind="formItemLayout"
                >
                    <a-input
                        v-decorator="[
                        'cou_info_length',
                            {
                                initialValue:EditData.cou_info_length
                            }
                        ]"
                    />
                </a-form-item>
                <a-form-item
                    label='start'
                    v-bind="formItemLayout"
                >
                    <a-input
                        v-decorator="[
                        'cou_info_start',
                            {
                                initialValue:EditData.cou_info_start
                            }
                        ]"
                    />
                </a-form-item>
                <a-form-item
                    label='星期X'
                    v-bind="formItemLayout"
                >
                    <a-input
                        v-decorator="[
                        'cou_info_weekday',
                            {
                                initialValue:EditData.cou_info_weekday
                            }
                        ]"
                    />
                </a-form-item>
            </a-form>
        </div>
    </a-modal>
</template>:

<script>
  export default {
      name:'EditModal',
      props: {
        EditData:{
          type: Object,
          default: null
        },
      },
      data () {
        return {
          formItemLayout:{
              labelCol:{
                span:6
              },
              wrapperCol:{
                span:16
              }
          },
          disabled:true,
          EditLoading:false,
          EditedData:{},
          visible:false
        }
      },
      methods:{
        edit() {
          this.visible = true
        },
        handleCancel(){
          this.visible = false
        },
        handleOk(){
          this.EditLoading = true
          this.visible = false
          this.form.validateFields((err, values) => {
            this.EditedData = values
            this.$emit('submit',this.EditedData)
          });

        },
      },
      beforeCreate () {
        this.form = this.$form.createForm(this);
      },
    }
</script>
<style scoped>
.form-wrapper {
    height: 650px;
}
.ant-form-item {
    width: 100%;
}
</style>