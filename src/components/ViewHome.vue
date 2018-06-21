<template>
  <div class="home-wrapper">
    <home-header></home-header>
    <top-channel></top-channel>
    <scroller class="main-list">
      <refresh class="refresh" @refresh="onrefresh" :display="refreshing ? 'show' : 'hide'">
        <image class="loading-bg" resize="contain" src="http://doc.zwwill.com/yanxuan/imgs/yxbox-bg.png?v5"></image>
        <!-- <loading-indicator class="indicator"></loading-indicator> -->
      </refresh>
      <banner-slider :imageList="bannerImgs"></banner-slider>
      <div class="servicePolicy">
        <text class="ic policy">&#xe63a; 网易自营品牌</text>
        <text class="ic policy">&#xe63a; 30天无忧退换货</text>
        <text class="ic policy">&#xe63a; 48小时快速退款</text>
      </div> 
      <maker :makers="makers"></maker> 
      <new-product :head="recommend.head1" :goods="recommend.goods1"></new-product>  
    </scroller>
    <!-- <text class="message">Home</text> -->
    <!-- <text @click="searchGoods()">搜索</text> -->
    <!-- <web class="webview" src="http://m.you.163.com" style="width: 100%; height: 100%"></web> -->
  </div>
</template>

<script>

import HomeHeader from './home/HomeHeader';
import TopChannel from './home/TopChannel';
import BannerSlider from './home/Slider';
import Maker from './home/Maker';
import NewProduct from './home/NewProduct';
// const navigator = weex.requireModule('navigator');
const stream = weex.requireModule('stream');
// const modal = weex.requireModule('modal');

export default {
    data () {
        return {
            refreshing: false,
            bannerImgs: [],
            makers: {},
            recommend: {}
        }
    },
    created () {
        let that = this;
        stream.fetch({
            method: 'GET',
            url: 'http://doc.zwwill.com/yanxuan/api/home/index',
            type: 'json'
        }, function (res) {
            // console.log(that);
            let result = res.data.result; 
            that.bannerImgs = result.banners;
            that.makers = result.makers;
            that.recommend = result.recommend;
            console.log(that.recommend.head1);
        });
    },
    components: {
        'home-header': HomeHeader,
        'top-channel': TopChannel,
        'banner-slider': BannerSlider,
        'maker': Maker,
        'new-product': NewProduct
    },
    methods: {
      // jumpWeb (url) {
      //     navigator.push({
      //         url: url,
      //         animated: "true"
      //     })
      // },
      onrefresh (event) {
          // modal.toast({ message: 'Refreshing', duration: 1 })
          this.refreshing = true;
          setTimeout(() => {
              this.refreshing = false;
          }, 1000)
      }
    }
}
</script>

<style lang="stylus" scoped>
  .ic
    font-family: iconfont;
    font-size: 24px;
    color: #333;
  .home-wrapper
    width: 100%;
    height: 100%;
  .main-list
    position: fixed;
    top: 200px;
    bottom: 90px;
    left: 0;
    right: 0;
    z-index: 99
    .refresh
      width: 750px;
      height: 180px;
      display: flex;
      .loading-bg
        position: absolute;
        left: 250px;
        width: 250px; 
        height: 150px;
    .servicePolicy
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding: 15px 0;
      border-bottom: 1px solid #ccc;
      .policy
        margin: 0 5px;
</style>


