import Vue from 'vue'
import Vuex from 'vuex'
import Api from './api'
import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    authenticated: false,
    session:{
      id: 0,          // 编号
      username: '未登录', // 用户名
      name: ''       // 名称
    }
  },

  actions: {
    // 检查授权情况
    CHECK_AUTHENTICATION: ( state ) => {
      state.authenticated = !!localStorage.getItem('token');
      if (state.authenticated) {
        Api.defaults.headers.common['X-Auth-Token'] = localStorage.getItem('token');
        //TODO 更新正确的token
        state.session = {}
        state.session.username = localStorage.getItem('token');
      }
    }
  },

  mutations: {
    SET_USER: ( state, { user } ) => {
      state.authenticated = true
      state.session = user
    },
    LOGOUT: ( state ) => {
      state.authenticated = false
      state.session = {}
    }
  },

  getters: {
    getAuthenticated( state ) {
      return state.authenticated
    },
    getSession( state ) {
      return state.session || {}
    }
  },

  modules: {
    user
  }
})

export default store
