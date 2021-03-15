import {getFileMessageAPI,getSimilarityRankAPI} from '../../api/file'
const file = {
  state: {
    file:{},
    rank:[]
  },
  mutations: {
    set_similarityRank: function(state, data) {
      state.rank = data.data.data
    },
    set_fileMessage: function(state, data) {
      state.file = data
    },

  },
  actions: {
    getFileMessage : async({ commit },id) => {
      console.log(id);
      const res = await getFileMessageAPI(id)
      if(res){
        commit('set_fileMessage', res)
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
