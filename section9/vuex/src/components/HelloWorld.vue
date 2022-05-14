<template>
  <div>
    <button @click="incrementAction">+</button>
    <button @click="addCount">10</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    /* increment(){
      // mutationsの場合はcommitでmutations呼び出し
      this.$store.commit('increment')
    },

    addCount(){
      this.$store.commit('addCount', {
        value: 10
      })
    } */
    // 配列で複数指定可
    ...mapActions(['incrementAction', 'addCountAction']),

    /* increment(){
      // actionはdispatch
      this.$store.dispatch('incrementAction')
    }, */
    addCount(){
      this.addCountAction({
        // mapActionsは引数を指定できないので、他の関数から呼び出す。addCountActionを呼び出してここで引数を指定する
        // payloadに10が入る
        value: 10
      })
    }
  }
}
</script>