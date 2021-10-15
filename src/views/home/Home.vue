<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-bar"><div slot="center">购物街</div></nav-bar>

    <scroll class="content" ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature></feature>
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']"
                   @tabClick="tabClick"
      ></tab-control>
      <good-list :goods="showGoods"></good-list>
    </scroll>
<!--   .natiive修饰符 用于监听路由组件的原生事件 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import Feature from "./childComps/Feature";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodList from "../../components/content/goods/GoodList";
import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/content/backtop/BackTop";

import {getHomeMultidata,getHomeGoods} from "network/home";

export default {
  name: "Home",
  components:{
    HomeSwiper,
    RecommendView,
    Feature,
    NavBar,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },
  data(){
    return{
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isShowBackTop: false
    }
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata()

    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /*
    * 事件监听相关的代码
    * */
    tabClick(index){
      switch (index){
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },
    backClick(){
      // this.$refs.scroll.scrollTo(0,0,300)
      this.$refs.scroll.ScrollTo(0,0);
    },
    contentScroll(position){
      // console.log(position);
      this.isShowBackTop = (-position.y) > 1000
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
      //让BScroll重新计算可滚动区域:解决图片加载慢，计算可滚动区域时没有算上图片高度导致只能滚动一部分区域的bug
      this.$refs.scroll.scroll.refresh()
      // console.log("上拉加载更多");
    },

    /*
    * 网络请求相关的代码
    * */
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
/*scoped 的作用：作用域
只会对当前组件中的某个类名设置的样式起效果，不会对其他组件中的相同类名的样式起效果
*/
  #home{
    padding-top: 44px;
    /* vh : viewport height 视口高度*/
    height: 100vh;
    position: relative;
  }
  .home-bar{
    background-color: var(--color-tint);
    color: #f6f6f6;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }

  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  /*.content{*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*  margin-top: 44px;*/
  /*}*/

</style>
