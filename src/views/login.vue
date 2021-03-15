<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="登陆" name="first">登陆</el-tab-pane>
    <el-tab-pane label="注册" name="second">注册</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      activeName: 'second'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>

</style>
