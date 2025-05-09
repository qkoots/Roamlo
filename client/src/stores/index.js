import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state: { 
    isLoggedIn: false,
    token: 'null',
    userInfo: {
      name: 'Quincy',
      email: '',
    }
  },

  getters: {
    getToken(state) {
      return state.token
    },
    getUserInfo(state)  {
      return state.userInfo
    }
  },

  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload
    },
    SET_USER_INFO(state, payload) {
      state.userInfo = payload
    },
    SET_IS_LOGGED_IN(state, payload) {
      state.isLoggedIn = payload
    }
  },

  actions: {
    setUserInfo(context , payload) {
      context.commit('SET_USER_INFO', payload)
    }
  }
})

export default store