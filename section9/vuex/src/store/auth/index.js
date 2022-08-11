const state = {
    loginUserName: ''
}

const mutations = {
    // commitで設定した値を書く
    setLoginUser(state, user) {
        state.loginUserName = user.name
    }
}

const actions = {
    // 第一引数はメソッド、第二引数はオブジェで渡ってくる値
    setLoginUser({ commit }, user) {
        commit('setLoginUser', user)
    }
}

const getters = {}

export default {
    namespaced: true, // 名前空間を有効にする
    state,
    mutations,
    actions,
    getters
}