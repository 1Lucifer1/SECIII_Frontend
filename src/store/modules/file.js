import {getFileMessageAPI} from '../../api/file'
const file = {
  state: {
    file:{}
  },
  mutations: {
    set_fileMessage: function(state, data) {
      state.file = data
    },

  },
  actions: {
    getFileMessage : async({ commit },id) => {
      const res = await getFileMessageAPI(id)
      console.log(res);
      if(res){
        commit('set_fileMessage', res)
      }
    },
  }
}
export default file
