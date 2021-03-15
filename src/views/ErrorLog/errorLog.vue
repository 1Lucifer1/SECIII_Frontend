<template>
  <el-table
    :data= this.$store.state.log.log
    border
    style="width: 80%;margin:auto;">
    <el-table-column
      fixed
      prop="bugId"
      label="缺陷序号">
    </el-table-column>
    <el-table-column
      prop="fixDate"
      label="修复日期">
    </el-table-column>
    <el-table-column
      prop="openDate"
      label="打开日期">
    </el-table-column>
    <el-table-column
      prop="reportIndex"
      label="报告序号">
    </el-table-column>
    <el-table-column
      prop="summary"
      label="简述">
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
  name: "errorLog",
  async mounted() {
    await this.getErrorLogList(2);
    console.log(this.$store.state.log.log[0].bugId);
  },
  methods: {
    handleClick(row) {
      console.log(row.reportIndex);
      router.push({ path: '/rank', query: { id: row.reportIndex }});
    },
    ...mapActions([
      'getErrorLogList',
    ])
  },

  data() {
    return {
      tableData: this.$store.state.log.log
    }
  }
}
</script>

<style scoped>

</style>
