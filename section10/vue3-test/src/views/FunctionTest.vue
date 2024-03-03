<template>
  <div>
    <p>Composition</p>
    <div>
    <p>商品名: {{ item.name }}</p>
    <p>単価: {{ item.price }}</p>
    <p>合計: {{ totalPrice }}</p>
    <div>数量</div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
// 合成関数 頭にuseをつけるのが慣習
const useCounter = (item) => {
  const increment = () => {
    item.amount++;
  };
  const decrement = () => {
    item.amount--;
  };

  const totalPrice = computed(() => {
    return item.price * item.amount;
  });

  return { increment, decrement, totalPrice };
};

export default {
  setup() {
    const item = reactive({
      name: "商品名",
      price: 100,
      amount: 0,
    });

    const { increment, decrement, totalPrice } = useCounter(item);

    return { item, increment, decrement, totalPrice };
  },
};
</script>

<style></style>
