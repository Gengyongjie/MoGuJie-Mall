<template>
  <div class="goods-list-item">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goodsItem: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .goods-list-item{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-list-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0px;
    right: 0px;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price{
    color: var(--color-height-text);
    margin-right: 20px;
  }
  .goods-info .collect{
    position: relative;
  }
  .goods-info .collect::before{
    content: '';
    position: absolute;
    left: -14px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }




  /*.goods-list-item{*/
  /*  width: 50%;*/
  /*  height: 100%;*/
  /*  display: inline-block;*/
  /*}*/
  /*.goods-list-item img{*/
  /*  width: 100%;*/
  /*  height: 240px;*/
  /*  border-radius: 5px;*/
  /*}*/
  /*.goods-list-item div p{*/
  /*  overflow: hidden;!*超出部分隐藏*!*/
  /*  text-overflow:ellipsis;!* 超出部分显示省略号 *!*/
  /*  white-space: nowrap;!*规定段落中的文本不进行换行 *!*/
  /*  width: 100%;!*需要配合宽度来使用*!*/
  /*}*/
  /*.price{*/
  /*  text-align: center;*/
  /*  color: red;*/
  /*  padding-left: 40px;*/
  /*}*/
</style>
