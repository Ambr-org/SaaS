import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: { 
    lang : true,
  },
  getters: {
    getlang: state=> {
      return state.lang;
    }
  },
  mutations:{
    changelang(state){
      state.lang = !state.lang;
    }
  },
  actions:{
    
  }
})

export default store

