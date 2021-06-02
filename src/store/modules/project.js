import {getProjectListAPI} from "../../api/project";

const log = {
  state: {
    project:[]
  },
  mutations: {
    set_projectList: function(state, data) {
        state.project = data.data.data;
        console.log(state.project);
    },

  },
  actions: {
    getProjectList : async({ commit }) => {
      const res = await getProjectListAPI();
      //console.log(res.data.data);
      if(res){
        commit('set_projectList', res)
      }
    },
  }
}
export default log
