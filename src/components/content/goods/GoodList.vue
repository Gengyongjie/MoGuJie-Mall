<template>
  <div class="good-list">
    <good-list-item v-for="item in goods" :goods-item="item"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem";
export default {
  name: "GoodList",
  components:{
    GoodListItem
  },
  props: {
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .good-list{
    display: flex;
    /*wrap包裹 就会根据宽度来决定一行显示多少个
    nowrap 不包裹 则一行显示所有*/
    flex-wrap: wrap;
    /*内容均等分 元素和元素之间的距离是元素与边缘的距离的2倍*/
    justify-content: space-around;

    padding: 2px;
  }
</style>
