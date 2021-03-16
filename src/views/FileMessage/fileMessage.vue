<template>
  <el-table
    :data="tableData"
    border
    style="width: 80%;margin:auto;">
    <el-table-column
      fixed
      prop="index"
      label="序号">
    </el-table-column>
    <el-table-column
      prop="fileName"
      label="文件名">
    </el-table-column>
    <el-table-column
      prop="filePath"
      label="文件路径">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
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
      tableData: [{
        index:0,
        fileName:'a.js',
        filePath:'/a/a.js'
      }, {
        index:1,
        fileName:'a.js',
        filePath:'/a/a.js'
      },{
        index:2,
        fileName:'a.js',
        filePath:'/a/a.js'
      },{
        index:3,
        fileName:'a.js',
        filePath:'/a/a.js'
      }]
    }
  }
}
</script>

<style scoped>

</style>
