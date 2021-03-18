import {getFileMessageAPI,getSimilarityRankAPI,getEvalutionAPI} from '../../api/file'
const file = {
  state: {
    file:{},
    rank:[],
    isShowEvalution:false,
    id:0,
    evalution:''
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
      state.evalution = data;
    },
    set_id: function(state, data){
      state.id = data;
      console.log(state.id);
    }

  },
  actions: {
    getFileMessage : async({ commit },id) => {
      const res = await getFileMessageAPI(id)
      console.log(res.data.data);
      if(res){
        commit('set_fileMessage', res)
      }
    },
    getEvalution : async({ commit },id) => {
      console.log(id);
      const res = await getEvalutionAPI(id)
      console.log(res.data.data);
      if(res){
        commit('set_evalution', res.data.data)
      }
    },
    getSimilarityRank : async({ commit },id) => {
      console.log(id);
      const res = await getSimilarityRankAPI(id)
      if(res){
        commit('set_similarityRank', res)
      }
    },
  }
}
export default file
