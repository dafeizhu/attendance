<template>
  <div>
    <signin-introduction></signin-introduction>
    <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '70vh' }">
      <signin-table></signin-table>
    </a-layout-content>
  </div>
</template>

<script>
import SigninIntroduction from './components/Introduction'
import SigninTable from './components/Table'
export default {
  name: 'SignIn',
  components: {
    SigninIntroduction,
    SigninTable
  }
}
</script>

<style scoped>
</style>
