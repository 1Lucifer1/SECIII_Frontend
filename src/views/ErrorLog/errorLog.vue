<template>
  <div>
    <el-table
      v-loading="loading"
      :data= this.$store.state.log.log
      border
      style="width: 80%;margin:auto;z-index:0;">
      <el-table-column
        fixed
        prop="bugId"
        label="缺陷序号">
      </el-table-column>
      <!--    <el-table-column-->
      <!--      prop="fixDate"-->
      <!--      label="修复日期">-->
      <!--    </el-table-column>-->
      <!--    <el-table-column-->
      <!--      prop="openDate"-->
      <!--      label="打开日期">-->
      <!--    </el-table-column>-->
      <!--    <el-table-column-->
      <!--      prop="reportIndex"-->
      <!--      label="报告序号">-->
      <!--    </el-table-column>-->
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
    <el-button type="primary" round icon="el-icon-search" class="btn" @click="showEvalution()">
      评估
    </el-button>
    <Evalution></Evalution>
  </div>
</template>

<script>
import router from '../../router'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Evalution from './component/evalution'
export default {
  name: "errorLog",
  components:{
    Evalution
  },
  async mounted() {
    await this.getErrorLogList(2);
    this.loading = false;
    console.log(this.$store.state.log.log[0].bugId);
  },
  methods: {
    handleClick(row) {
      console.log(row.reportIndex);
      router.push({ path: '/rank', query: { id: row.reportIndex }});
    },
    showEvalution(){
      this.set_isShowEvalution(true);
      console.log(this.$store.state.file.isShowEvalution);
    },
    ...mapActions([
      'getErrorLogList',
    ]),
    ...mapMutations([
      'set_isShowEvalution',
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
.btn{
  position:fixed;
  bottom:30px;
  right:18px;
  z-index: 2;
}
</style>
