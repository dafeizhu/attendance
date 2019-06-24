<template>
    <div style="min-height:100vh">
        <course-introduction ></course-introduction>
        <course-select-table @searchBtn="handleSearchBtn"></course-select-table>
        <course-table :searchData="searchData"></course-table>
    </div>
</template>

<script>
  import CourseIntroduction from './components/Introduction'
  import CourseTable from './components/Table'
  import CourseSelectTable from './components/SelectTable'
  export default {
    name: 'Course',
    data () {
      return {
        searchData: {}
      }
    },
    components: {
      CourseIntroduction,
      CourseTable,
      CourseSelectTable
    },
    methods: {
      handleSearchBtn (val) {
        this.searchData = val
      }
    }
  }
</script>

<style scoped>
</style>
