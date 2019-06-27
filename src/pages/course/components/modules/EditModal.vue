<template>
    <a-modal
        v-model="visible"
        title="信息编辑框"
        @cancel="handleCancel"
        @ok="handleOk"
        cancelText="取消"
        okText="确认"
        :width="490"

    >
        <a-row>
        <a-form  v-if="EditData"  :key="EditData.cou_info_id"   :form="form">
                    <a-form-item
                            label='cou_info_id'
                            v-bind="formItemLayout"
                    >
                        <a-input
                                style="width:100%"
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
                            style="width:100%"
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
                            style="width:100%"
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
                                style="width:100%"
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
                                style="width:100%"
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
                            style="width:100%"
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
                            style="width:100%"
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
                        style="width:100%"
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
                            style="width:100%"
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
                            style="width:100%"
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
                            style="width:100%"
                            v-decorator="[
                            'cou_info_weekday',
                                {
                                    initialValue:EditData.cou_info_weekday
                                }
                            ]"
                    />
                </a-form-item>
        </a-form>
        </a-row>
        <!--<template slot="footer">-->
            <!--<a-button key="back" @click="handleCancel">取消</a-button>-->
            <!--<a-button key="submit" type="primary" :loading="EditLoading" @click="handleOk" >-->
                <!--完成-->
            <!--</a-button>-->
        <!--</template>-->
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
        // visible:{
        //   type:Boolean,
        //   default:null
        // }
      },
      data () {
        return {
          formItemLayout:{
              labelCol:{
                xs:{ span:24 },
                sm:{ span:7 }
              },
              wrapperCol:{
                xs:{ span:24 },
                sm:{ span:17 }
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
      // watch:{
      //   EditData(){
      //
      //   }
      // }
      // beforeUpdate() {
      //       setTimeout(() => {
      //         this.form.setFieldsValue({
      //           'class_class': "A",
      //           'class_grade': "2016",
      //           'class_profession': "计算机科学与技术",
      //           'cou_info_address': "格物2C302",
      //           'cou_info_class_term': "0302",
      //           'cou_info_course_name': "移动开发实训",
      //           'cou_info_weekcount': "1-18周",
      //         })
      //       },0)
      // }
    }
</script>
<style scoped>
    .from{
        position: relative;
    }
</style>