import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 初期値
        count: 0
    },
    getters: {},
    // stateの値を変えるためにmutations
    mutations: {
        increment(state) {
            state.count++
        },
        // 第2引数はオブジェクト
        addCount(state, payload) {
            // payloadには、コンポーネントから渡ってくる値が入る
            state.count += payload.value
        }
    },
    actions: {
        /* incrementAction(context) {
            // mutationsのincrementを呼び出す
            context.commit('increment')
        }, */

        // こっちのほうがシンプル。commitはオブジェクト
        incrementAction({ commit }) {
            commit('increment')
        },
        addCountAction({ commit }, payload) {
            // オブジェがそのまま渡ってくる
            commit('addCount', payload)
        }
    },
    // ファイルを分割するときに使う
    modules: {}
})