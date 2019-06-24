<template>
  <div>
    <signin-introduction></signin-introduction>
    <signin-selecttable @searchBtn="handleSearchBtn"></signin-selecttable>
    <a-layout-content
      :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '70vh' }"
    >
      <signin-table :sessionId="sessionId" :searchData="searchData"></signin-table>
    </a-layout-content>
  </div>
</template>

<script>
<<<<<<< HEAD
import SigninIntroduction from './components/Introduction'
import SigninTable from './components/Table'
import SigninSelecttable from './components/SelectTable'
// import { signInDataPost } from '../../api/axios'
=======
import SigninIntroduction from "./components/Introduction"
import SigninTable from "./components/Table"
import SigninSelecttable from "./components/SelectTable"
>>>>>>> a561dffa137e65ea71e04e83120e9b6d9a2c7fda
export default {
  name: "SignIn",
  data () {
    return {
      searchData: {}
    }
  },
  components: {
    SigninIntroduction,
    SigninTable,
    SigninSelecttable
  },
  props: {
    sessionId: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleSearchBtn (val) {
      console.log(val);
      this.searchData = val
      const params = {}
      signInDataPost (params, val).then((data) => {
        this.searchData = data
        console.log(this.searchData)
      })
    }
  }
}
</script>

<style scoped>
</style>
