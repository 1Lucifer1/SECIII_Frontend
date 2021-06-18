<template>
  <div>
    <el-table
      v-loading="loading"
      :data=this.$store.state.file.rank
      border
      style="width: 80%;margin:auto;z-index:0">
      <el-table-column
        fixed
        prop="fileRank"
        label="文件排序">
      </el-table-column>
      <el-table-column
        prop="cosineSimilarity"
        label="得分">
      </el-table-column>
      <el-table-column
        prop="fileIndex"
        label="文件序号">
      </el-table-column>
      <el-table-column
        prop="packageName"
        label="包名">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import router from '../../router'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: "similarRank",
  async mounted() {
    console.log(this.$route.query.id);
    await this.getSimilarityRank(this.$route.query.id);
    this.loading = false;
    console.log(this.$store.state.file.rank);
    await this.set_id(this.$route.query.id);
  },
  methods: {
    handleClick(row) {
      //console.log(this.$route.query.id);
      router.push({ path: '/msg', query: { id: row.fileIndex,similarity:row.cosineSimilarity }});
    },
    showEvalution(id){
      this.set_isShowEvalution(true);
      console.log(this.$store.state.file.isShowEvalution);
      console.log(this.$store.state.file.id);
    },
    ...mapActions([
      'getSimilarityRank',
    ]),
    ...mapMutations([
      'set_isShowEvalution',
      'set_id',
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
      }],
      loading:true
    }
  }
}
</script>

<style scoped>
  .btn{
    position:fixed;
    bottom:30px;
    right:18px;
    z-index: 2;
  }

</style>
