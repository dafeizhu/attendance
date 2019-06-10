<template>
  <div style="min-height:100vh">
    <course-introduction></course-introduction>
    <course-selec-table></course-selec-table>
    <course-table></course-table>
  </div>
</template>

<script>
import CourseIntroduction from './components/Introduction'
import CourseTable from './components/Table'
import CourseSelecTable from './components/SelectTable'
export default {
  name: 'Course',
  components: {
    CourseIntroduction,
    CourseTable,
    CourseSelecTable
  }
}
</script>

<style scoped>
</style>
