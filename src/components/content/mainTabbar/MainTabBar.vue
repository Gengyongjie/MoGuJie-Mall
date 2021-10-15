<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="orange">
      <img slot="item-icon" src="~assets/img/tabbar/tabbarhome2.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/tabbarhome.svg" alt="">
      <div slot= "item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/tabbar2.svg" alt="">
      <img slot="item-icon-active"  src="~assets/img/tabbar/tabbar.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/icontabbarshoppingup2.svg" alt="">
      <img slot="item-icon-active"  src="~assets/img/tabbar/icontabbarshoppingup.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/icontabbarmyup2.svg" alt="">
      <img slot="item-icon-active"  src="~assets/img/tabbar/icontabbarmyup.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from "components/common/tabbar/TabBarItem";


export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
