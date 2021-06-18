import {getErrorLogListAPI} from "../../api/log";

const log = {
  state: {
    log: [

    ],
  },
  mutations: {
    set_errorLogList: function(state, data) {
      state.log = data.data.data
      //console.log(state.log);
    },

  },
  actions: {
    getErrorLogList : async({ commit },id) => {
      console.log(id);
      const res = await getErrorLogListAPI(id)
      //console.log(res);
      if(res){
        commit('set_errorLogList', res)
      }
    },
  }
}
export default log
