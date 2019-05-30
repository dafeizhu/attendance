<template>
  <div>
    <signin-introduction></signin-introduction>
    <signin-selecttable></signin-selecttable>
    <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '70vh' }">
      <signin-table></signin-table>
    </a-layout-content>
  </div>
</template>

<script>
import SigninIntroduction from './components/Introduction'
import SigninTable from './components/Table'
import SigninSelecttable from './components/SelectTable'
export default {
  name: 'SignIn',
  components: {
    SigninIntroduction,
    SigninTable,
    SigninSelecttable
  }
}
</script>

<style scoped>
</style>
