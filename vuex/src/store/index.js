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
    actions: {},
    // ファイルを分割するときに使う
    modules: {}
})