<template>
  <div>
    CompositionTest
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>ref: {{ nameRef }}</p>
    <p>reactive: {{ book.title }}</p>
    <p>reactive: {{ book.author[0] }}</p>
    <p>reactiveToRefs: {{ titleRef }}</p>
    <p>reactiveToRefs: {{ authorRef[1] }}</p>
    <button @click="btnClick">クリック</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  // 速さ順左から setup->created->mounted
  // setupではthisが使えない
  setup() {
    let name = "大谷";
    const age = 30;
    const nameRef = ref("錦織");
    const book = reactive({
      title: 'タイトル',
      author: ['大谷', '伊藤']
    })
    const bookToRefs = reactive({
      titleRef: 'タイトル2',
      authorRef: ['大谷2', '伊藤2']
    })
    // 引数が1つの場合は括弧を省略できる
    const btnClick = e => {
      console.log('クリック')
      // イベント情報を取得
      console.log(e)
    }

    console.log("setup");
    console.log(nameRef.value);
    return {
      name,
      age,
      nameRef,
      book,
      // リアクティブなオブジェクトを展開するときはtoRefs
      ...toRefs(bookToRefs),
      btnClick
    };
  },
  data() {
    return {
      number: 1,
      sports: "サッカー",
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style></style>
