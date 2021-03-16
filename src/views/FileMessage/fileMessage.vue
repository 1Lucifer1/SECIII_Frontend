<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{this.$store.state.file.file.fileName}}</span>
        <span class="similar">{{this.$store.state.file.file.similarity}}</span>
        <br>
        <span class="path">{{this.$store.state.file.file.filePath}}</span>
      </div>
      <div class="content">
        {{this.$store.state.file.file.content}}
      </div>
    </el-card>
  </div>
</template>

<script>
import router from '../../router'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
name: "fileMessage",
  methods: {
    handleClick(row) {
      //console.log(row.index);
    },
    ...mapActions([
      'getFileMessage',
    ])
  },
  async mounted() {
    await this.getFileMessage(this.$route.query.id);
  },
  data(){
    return {
    }
  }
}
</script>

<style scoped>
.similar{
  font-size:50px;
  float:right;
  color:#7490b0;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 50%;
  margin:auto;
}
.container{
  background-color: #dad3cc;
  border-radius: 10%;
}
  .name{
    font-size:20px;
    margin-left:25%;
    float:left;
  }
  .path{
    font-size:10px;
    color:#9c988a;
  }
  .content{
    color:#2d3443;
    margin:auto;
    white-space: pre-wrap;
    text-align: left;
  }
</style>
