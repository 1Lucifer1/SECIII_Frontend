<template>
  <div class="title">
    <div class="left">缺陷报告查询系统</div>
    <slot name="title-right" class="right"></slot>
  </div>
</template>

<script>
export default {
  name: "header"
}
</script>

<style scoped>
.title{
  margin-bottom: 10%;
  position:fixed;
}
.left {
  display:flex;
  font-size: 33px;
  color: #486779;
  font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: 600;
  position: fixed;
  top: 10px;
  left:50px;
}
.right{
  color: #486779;
  font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  display:flex;
  font-size:15px;
  position: fixed;
  top: 15px;
  right:50px;
}
</style>
