<template>
  <div>
    <div class="wrap">
      <el-table
        v-loading="loading"
        :data= this.$store.state.project.project
        border
        style="width: 80%;
        margin:auto;
        -webkit-overflow-scrolling: touch;
        overflow-Y: scroll;">
        <el-table-column
          fixed
          prop="projectIndex"
          label="项目序号">
        </el-table-column>
        <el-table-column
          prop="projectName"
          label="项目名字">
        </el-table-column>
        <el-table-column
          prop="codeFileCount"
          label="源文件数">
        </el-table-column>
        <el-table-column
          prop="reportCount"
          label="报告数">
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
  </div>
</template>

<script>
import router from '../../router'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: "project",
  async created() {
    await this.getProjectList();
    this.loading = false;
  },
  methods: {
    handleClick(row) {
      //console.log(row.projectIndex);
      router.push({ path: '/error', query: { id: row.projectIndex }});
    },
    ...mapActions([
      'getProjectList',
    ]),
    ...mapMutations([

    ])
  },

  data() {
    return {
      tableData: this.$store.state.log.log,
      loading:true
    }
  }
}
</script>

<style scoped>

</style>
