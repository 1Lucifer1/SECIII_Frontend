<template>
  <a-modal
    v-loading.fullscreen.lock="loading"
    :visible="this.$store.state.file.isShowEvalution"
    title="显示评估指标"
    cancelText="取消"
    @cancel="cancel"
  >
    <template slot="footer">
      <a-button @click="cancel">取消</a-button>
    </template>
    <div>Top@1 : {{this.$store.state.file.top1}}%</div>
    <div>Top@5 : {{this.$store.state.file.top5}}%</div>
    <div>Top@10 : {{this.$store.state.file.top10}}%</div>
    <div>MRR : {{this.$store.state.file.mrr}}</div>
    <div>MAP : {{this.$store.state.file.map}}</div>
  </a-modal>
</template>
    <script>
    import { mapGetters, mapMutations, mapActions } from 'vuex'

    export default {
      name: 'evalution',
      data() {
        return {
          loading:true
        }
      },
      async mounted() {
        console.log(this.$route.query.id);
        await this.getEvalution(this.$route.query.id);
        this.loading = false;
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

