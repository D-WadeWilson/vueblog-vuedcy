import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//数据状态管理  一个子组件更新后，通知到其他子组件。所有的组件都会监听store下这里面的内容
export default new Vuex.Store({
  state: {
    token:"",
    userinfo:{}
  },
  mutations: {     //相当于bean里的set方法
    SET_TOKEN: (state, token) =>{
      state.token = token
      localStorage.setItem("token",token)
    },
    SET_USERINFO:(state,userInfo )=>{
      state.userInfo = userInfo
      sessionStorage.setItem("userInfo",JSON.stringify(userInfo))
    }


  },
  actions: {
  },
  modules: {
  }
})
