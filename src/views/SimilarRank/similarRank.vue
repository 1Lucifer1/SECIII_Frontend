<template>
  <el-table
    :data=this.$store.state.file.rank
    border
    style="width: 80%;margin:auto;">
    <el-table-column
      fixed
      prop="cosineSimilarity"
      label="相似度">
    </el-table-column>
    <el-table-column
      prop="fileIndex"
      label="文件序号">
    </el-table-column>
    <el-table-column
      prop="fileName"
      label="文件名">
    </el-table-column>
    <el-table-column
      prop="fileRank"
      label="文件排序">
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
  name: "similarRank",
  async mounted() {
    await this.getSimilarityRank(1);
    console.log(this.$store.state.file.rank);
  },
  methods: {
    handleClick(row) {
      //console.log(this.$route.query.id);
      router.push({ path: '/msg', query: { id: row.fileIndex }});
    },
    ...mapActions([
      'getSimilarityRank',
    ])
  },

  data() {
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
