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
import SigninIntroduction from "./components/Introduction"
import SigninTable from "./components/Table"
import SigninSelecttable from "./components/SelectTable"
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
      this.searchData = val
      const params = {}
      signInDataPost (params, val).then((data) => {
        this.searchData = data
        console.log(this.searchData)
      })
>>>>>>> pages-user
    }
  }
}
</script>

<style scoped>
</style>
