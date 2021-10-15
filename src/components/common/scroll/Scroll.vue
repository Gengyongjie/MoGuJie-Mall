<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0
      }
    },
    pullUpLoad: {
      type: Boolean,
      default : false
    }
  },
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    //ref如果是绑定在组件中的，那么通过this.$refs.refname获取到的就是一个组件对象
    //ref如果是绑定在普通的元素中，那么获取到的就是一个元素对象
    // this.$refs.refName(标签中的ref名称) 拿到的是这个warpper唯一的标签，
    // 无论其他地方有多少个warpper，拿到的都是此组件中的名称叫wrapper的标签
    //1.创建BSroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      observeDOM : true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    // 2.监听滚动的位置
    this.scroll.on('scroll',(position) => {
      // console.log(position);
      this.$emit('scroll',position)
    }),
      // 3.监听上拉事件
    this.scroll.on('pullingUp',() => {
      // console.log('上拉加载更多');
      this.$emit('pullingUp')
    })
  },
  methods: {
    ScrollTo(x,y,time = 300) {
      this.scroll.scrollTo(x,y,time)
    },
    //重复上拉加载更多
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>
/*.wrapper{*/
/*  height: 100% ;*/
/*}*/
</style>
