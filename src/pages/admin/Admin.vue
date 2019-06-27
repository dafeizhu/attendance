<template>
    <div>
        <introduction></introduction>
        <select-table @searchBtn="handleSearchBtn"></select-table>
        <a-layout-content
                :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '70vh' }"
        >
            <admin-table :sessionId="sessionId" :searchData="searchData"></admin-table>
        </a-layout-content>
    </div>
</template>

<script>
    import Introduction from "../admin/components/Introduction";
    import SelectTable from "../admin/components/SelectTable";
    import AdminTable from "../admin/components/Table";
    import {adminDataPost} from '../../api/axios'
    export default {
        name: "Admin",
        data () {
            return{
                searchData: {}
            }
        },
        components: {
            AdminTable,
            SelectTable,
            Introduction
        },
        props: {
            sessionId: {
                type: String,
                default: ""
            }
        },
        methods: {
            handleSearchBtn (val) {
                this.searchData = val
                const params = {}
                adminDataPost (params, val).then((data) => {
                    this.searchData = data
                    console.log(this.searchData)
                })
            }
        }
    }
</script>

<style scoped>

</style>