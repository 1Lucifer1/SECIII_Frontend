<template>
  <a-modal
    :visible="this.$store.state.file.isShowEvalution"
    title="显示评估指标"
    cancelText="取消"
    @cancel="cancel"
  >
    <template slot="footer">
      <a-button @click="cancel">取消</a-button>
    </template>
    <div>Top@1 : {{this.$store.state.file.evalution.top1}}</div>
    <div>Top@5 : {{this.$store.state.file.evalution.top5}}</div>
    <div>Top@10:{{this.$store.state.file.evalution.top10}}</div>
    <div>Map  : {{this.$store.state.file.evalution.map}}</div>
    <div>Mrr  : {{this.$store.state.file.evalution.mrr}}</div>
  </a-modal>
    </template>
    <script>
    import { mapGetters, mapMutations, mapActions } from 'vuex'

    export default {
      name: 'evalution',
      data() {
        return {

        }
      },
      async mounted() {
        await this.getEvalution(2);
      },
      methods: {
        ...mapMutations([
          "set_isShowEvalution"
        ]),
        ...mapActions([
          "getEvalution"
        ]),
        cancel() {
          this.set_isShowEvalution(false);
        },
      }
    }
    </script>

