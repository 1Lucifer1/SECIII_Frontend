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
      prop="log"
      label="错误信息">
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
export default {
  name: "errorLog",
  async mounted() {
    await this.getErrorLogList();
  },
  methods: {
    handleClick(row) {
      console.log(row.index);
      router.push({ path: '/rank', query: { id: row.index }});
    },
  },

  data() {
    return {
      tableData: [{
        index:0,
        log:'hahahah'
      }, {
        index:1,
        log:'hahahah'
      },{
        index:2,
        log:'hahahah'
      },{
        index:3,
        log:'hahahah'
      }]
    }
  }
}
</script>

<style scoped>

</style>
