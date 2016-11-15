/**
 * 用户
 * @author haycco
 */
import Api from '../api'

const state = {
  message: ""
}

const actions = {
  // 登录
  LOGGING_IN: ({ commit, dispatch, state }, data ) => {
    return getAuth(data.username, data.password, data.type)
            .then( user => {
              var success = user && !!user.id
              if(success) {
                commit('SET_USER', { user })
                dispatch('CHECK_AUTHENTICATION')
              }
              return success
            } )
            //.then(() => dispatch('CHECK_AUTHENTICATION') )
  }
}

const mutations = {
  // 登录成功
  LOGGED_IN: ({ commit, dispatch, state }, { token }) => {
    localStorage.setItem('token', token)
  }
}

const getters = {
  getMessage() {
    return state.message
  }
}

/**
 * 用户登录并获取token
 *
 * @param username
 * @param password
 * @param type
 * @returns {*}
 */
function getAuth(username, password, type) {
  // 构造表单
  let formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  formData.append('type', type);
  return Api.post('/passport/login', formData ).then((response) => {
    let result = response.data
    if(result.success) {
      // success callback
      console.log(`${username} login successful.`)
      localStorage.setItem('token', result.data.username)
      state.message = ''
      result.data['id'] = 1
      return result.data
    } else {
      localStorage.removeItem('token')
      state.message = result.message
    }
  }, (response) => {
    // error callback
    state.message = response.message || response
    console.log(`${response}`);
  });
}

/**
 * 根据用户名获取基本信息
 *
 * @param username
 * @returns {*}
 */
function getInfo(username) {
  console.log(`根据用户名【${username}】获取基本信息...`)
  // 构造表单
  let data = new FormData();
  data.append('username', username);
  return Api.get('/passport/login', data ).then((response) => {
    // success callback
    console.log("OK!");
    this.$router.push({ path:'/', query: { token: '123'}});
  }, (response) => {
    // error callback
    console.log("ERROR!!" + `${type}`);
  });
}

export default{
  state,
  actions,
  mutations,
  getters
}
