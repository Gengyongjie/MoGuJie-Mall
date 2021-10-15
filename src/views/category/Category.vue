<template>
<!--  <h2>分类</h2>-->
  <div class="wrapper" ref="aaaa">
    <ul>
      <button @click="btnClick">按钮</button>
      <li>列表分类1</li>
      <li>列表分类2</li>
      <li>列表分类3</li>
      <li>列表分类4</li>
      <li>列表分类5</li>
      <li>列表分类6</li>
      <li>列表分类7</li>
      <li>列表分类8</li>
      <li>列表分类9</li>
      <li>列表分类10</li>
      <li>列表分类11</li>
      <li>列表分类12</li>
      <li>列表分类13</li>
      <li>列表分类14</li>
      <li>列表分类15</li>
      <li>列表分类16</li>
      <li>列表分类17</li>
      <li>列表分类18</li>
      <li>列表分类19</li>
      <li>列表分类20</li>
      <li>列表分类21</li>
      <li>列表分类22</li>
      <li>列表分类23</li>
      <li>列表分类24</li>
      <li>列表分类25</li>
      <li>列表分类26</li>
      <li>列表分类27</li>
      <li>列表分类28</li>
      <li>列表分类29</li>
      <li>列表分类30</li>
      <li>列表分类31</li>
      <li>列表分类32</li>
      <li>列表分类33</li>
      <li>列表分类34</li>
      <li>列表分类35</li>
      <li>列表分类36</li>
      <li>列表分类37</li>
      <li>列表分类38</li>
      <li>列表分类39</li>
      <li>列表分类40</li>
      <li>列表分类41</li>
      <li>列表分类42</li>
      <li>列表分类43</li>
      <li>列表分类44</li>
      <li>列表分类45</li>
      <li>列表分类46</li>
      <li>列表分类47</li>
      <li>列表分类48</li>
      <li>列表分类49</li>
      <li>列表分类50</li>
      <li>列表分类51</li>
      <li>列表分类52</li>
      <li>列表分类53</li>
      <li>列表分类54</li>
      <li>列表分类55</li>
      <li>列表分类56</li>
      <li>列表分类57</li>
      <li>列表分类58</li>
      <li>列表分类59</li>
      <li>列表分类60</li>
      <li>列表分类61</li>
      <li>列表分类62</li>
      <li>列表分类63</li>
      <li>列表分类64</li>
      <li>列表分类65</li>
      <li>列表分类66</li>
      <li>列表分类67</li>
      <li>列表分类68</li>
      <li>列表分类69</li>
      <li>列表分类70</li>
      <li>列表分类71</li>
      <li>列表分类72</li>
      <li>列表分类73</li>
      <li>列表分类74</li>
      <li>列表分类75</li>
      <li>列表分类76</li>
      <li>列表分类77</li>
      <li>列表分类78</li>
      <li>列表分类79</li>
      <li>列表分类80</li>
      <li>列表分类81</li>
      <li>列表分类82</li>
      <li>列表分类83</li>
      <li>列表分类84</li>
      <li>列表分类85</li>
      <li>列表分类86</li>
      <li>列表分类87</li>
      <li>列表分类88</li>
      <li>列表分类89</li>
      <li>列表分类90</li>
      <li>列表分类91</li>
      <li>列表分类92</li>
      <li>列表分类93</li>
      <li>列表分类94</li>
      <li>列表分类95</li>
      <li>列表分类96</li>
      <li>列表分类97</li>
      <li>列表分类98</li>
      <li>列表分类99</li>
      <li>列表分类100</li>
    </ul>
  </div>
</template>

<script>
import BSscroll from 'better-scroll'

export default {
  name: "Category",
  data(){
    return {
      scroll: null
    }
  },
  //组件创建完后调用
  mounted() {
    console.log(this.$refs.aaaa);
    //函数栈：当函数调用完毕以后没有一个变量去指向它，则函数调用完毕后，里面的所有东西都销毁
    this.scroll = new BSscroll(document.querySelector('.wrapper'),{
      probeType: 3,  //监听滚动
      pullUpLoad: true, //上拉加载更多
    });
    this.scroll.on('scroll',(position) => {
      // console.log(position);
    })
    this.scroll.on('pullingUp',() => {
      console.log("上拉加载更多");

    })
  },
  methods: {
    btnClick(){
      console.log('----');
    }
  }
}
</script>

<style scoped>
  .wrapper{
    height: 150px;
    background-color: red;

    overflow: hidden;
    /*overflow-y: scroll;*/
  }
</style>
