<template>
  <div class="title">
    IRBL
  </div>
</template>

<script>
export default {
  name: "header"
}
</script>

<style scoped>
.title{
  display:flex;
  font-size: 33px;
  color: #486779;
  font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-weight: 600;
  position: absolute;
  top: 10px;
  left:50px;
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
