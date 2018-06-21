<template>
    <div class="maker-wrapper">
        <text class="maker-title ic">{{makers.title}} &#xe74b;</text>
        <div class="box">
            <div class="maker-item" v-for="(item, index) in makers.items" :key="index">
                <image class="image" resize="cover" :src="item.bg"></image>
                <text class="item-name">来自{{item.name}}</text>
                <text class="item-price">{{item.price}}元起</text>
                <!-- <text class="item-state">{{item.state}}</text> -->
                <image v-if="item.state" class="item-state"  resize="cover" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/new-5e42f2db1f.png"></image>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['makers'],
    data () {
        return {
            // title: '',
            // items: null
        }
    },
    created () {
    }
}
</script>

<style lang="stylus" scoped>
    .ic
        font-family: iconfont
    .maker-title
        width: 750px;
        height: 100px;
        line-height: 60px;
        text-align: center;
        padding: 20px 0px;
    .box
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .maker-item
            position: relative;
            width: 50%;
            height: 200px;
            padding: 30px 30px 0 30px;
            border-top: 1px solid #ccc;
            border-right: 1px solid #ccc;
            .item-name
                font-size: 24px;
                padding: 5px 0;
            .item-price
                font-size: 20px;
                padding: 5px 0;
            .item-state
                width: 60px; 
                height: 30px;
                margin-top: 5px;
            .image
                position: absolute;
                top: 0;
                left: 0;
                width: 375px;
                height: 200px;
</style>

