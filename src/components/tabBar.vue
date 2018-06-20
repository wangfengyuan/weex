<template>
    <div class="tab-wrapper">
        <div class="tab=item" @click="tabSwitch('home')">
            <text class="tab-icon iconfont">&#xe660;</text>
            <text class="tab-txt">首页</text>
        </div>
        <div class="tab=item" @click="tabSwitch('class')">
            <text class="tab-icon iconfont">&#xe744;</text>
            <text class="tab-txt">分类</text>
        </div>
        <div class="tab=item" @click="tabSwitch('shopCart')">
            <text class="tab-icon iconfont">&#xe61a;</text>
            <text class="tab-txt">购物车</text>
        </div>
        <div class="tab=item" @click="tabSwitch('myCenter')">
            <text class="tab-icon iconfont">&#xe639;</text>
            <text class="tab-txt">个人</text>
        </div> 
    </div>
</template>
<script>
export default {
  methods: {
      tabSwitch (index) {
          this.$emit("tabSwitch", {data: index});
      }
  }
}
</script>
<style lang="stylus" scoped>
    .iconfont 
        font-family: iconfont;
    .tab-wrapper
        display: flex;
        width: 100%;
        height: 90px;
        flex-direction: row;
        justify-content: space-around;
        border-top-width: 1px;
        border-top-color: #d9d9d9;
        background-color: #fafafa;
        .tab-item
            flex: 1;
            text-align: center;
            .tab-icon
                color: #666;
                font-size: 38px;
                text-align: center;
            .tab-txt
                color: #666;
</style>
