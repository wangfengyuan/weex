<template>
  <div class="home-wrapper">
    <home-header></home-header>
    <top-channel></top-channel> 
    <!-- <text class="message">Home</text> -->
    <!-- <text @click="searchGoods()">搜索</text> -->
    <!-- <web class="webview" src="http://m.you.163.com" style="width: 100%; height: 100%"></web> -->
  </div>
</template>

<script>

import HomeHeader from './home/HomeHeader';
import TopChannel from './home/TopChannel';
var navigator = weex.requireModule('navigator');

export default {
  created () {
    console.log(weex.config);
  },
  components: {
    'home-header': HomeHeader,
    'top-channel': TopChannel
  },
  methods: {
    searchGoods () {
      navigator.push({
        url: 'http://m.you.163.com',
        animated: "true"
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home-wrapper
    width: 100%;
    height: 100%
</style>


