import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 初期値
        count: 0,
        users: [
            { id: 1, name: '大谷', isVisible: true },
            { id: 2, name: 'ダルビッシュ', isVisible: false },
            { id: 3, name: '錦織', isVisible: true },
        ]
    },
    getters: {
        /* visibleUsers(state) {
            // isVisibleがtrueなら表示
            return state.users.filter(user => user.isVisible)
        } */
        // アロー関数での書き方(1行で書く場合はreturnが不要)
        visibleUsers: state => state.users.filter(user => user.isVisible),
        // メソッド形式
        getUserById: state => id => {
            // user.idがコンポーネントのidと同じなら表示
            return state.users.find(user => user.id === id)
        }
    },
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
        // commitはmutations
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