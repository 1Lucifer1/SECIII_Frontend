import {getFileMessageAPI,getSimilarityRankAPI,getEvalutionAPI} from '../../api/file'
const file = {
  state: {
    file:{},
    rank:[],
    isShowEvalution:false,
    id:0,
    evalution:'',
    top1:0,
    top5:0,
    top10:0,
    mrr:0,
    map:0
  },
  mutations: {
    set_similarityRank: function(state, data) {
      state.rank = data.data.data
    },
    set_fileMessage: function(state, data) {
      state.file = data.data.data;
    },
    set_isShowEvalution: function(state, data){
      state.isShowEvalution = data;
    },
    set_evalution: function(state, data){
      //console.log(data);
      state.evalution = data;
      state.top1 = Math.ceil(data.top1*10000)/100;
      state.top5 = Math.ceil(data.top5*10000)/100;
      state.top10 = Math.ceil(data.top10*10000)/100;
      state.mrr = Math.ceil(data.mrr*10000)/100;
      state.map = Math.ceil(data.map*10000)/100;
      //console.log(state.map);
    },
    set_id: function(state, data){
      state.id = data;
      //console.log(state.id);
    }

  },
  actions: {
    getFileMessage : async({ commit },id) => {
      const res = await getFileMessageAPI(id)
      //console.log(res.data.data);
      if(res){
        commit('set_fileMessage', res)
      }
    },
    getEvalution : async({ commit },id) => {
      //console.log(id);
      const res = await getEvalutionAPI(id)
      //console.log(res.data.data);
      if(res){
        commit('set_evalution', res.data.data)
      }
    },
    getSimilarityRank : async({ commit },id) => {
      const res = await getSimilarityRankAPI(id)
      console.log(res);
      if(res){
        commit('set_similarityRank', res)
      }
    },
  }
}
export default file
