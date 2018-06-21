<template>
    <div class="wrapper">
        <div class="block-header">
            <image class="title-image" resize="cover" src="http://doc.zwwill.com/yanxuan/imgs/bg-new.png"></image>
            <text class="tlt tlt-new">新品首发</text>
            <text class="btn-all">查看全部 ></text>
        </div>
        <scroller class="goods-scroller" scrollDirection="horizontal" show-scrollbar=false >
            <div v-for="(good, index) in goods" :ref="'item'+index" :key="index" class="new-item">
                <image class="image" resize="cover" :src="good.img"></image>
                <text class="txt txt-format">{{good.tlt}}新品首发新品首发</text>
                <text class="info txt-format">{{good.info}}新品首发新品首发</text>
                <text class="price txt-format">￥{{good.price}}新品首发新品首发</text>
            </div>
        </scroller>
    </div>
</template>

<script>
export default {
    props: ["head", "goods"]
}
</script>

<style lang="stylus" scoped>
    .wrapper
        background-color: #fff;
    // .txt-format
    //     white-space: nowrap;
    //     text-overflow: ellipsis;
    //     overflow: hidden;
    .block-header
        width: 750px;
        margin: 15px 0 50px 0;
        height: 260px;
        background-color: #ccc;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .title-image
            position: absolute;
            top:0;
            left: 0;
            right: 0;
            bottom: 0;
        .tlt-new 
            font-size: 40px;
            color: #8BA0B6;
        .btn-all
            margin-top: 16px;
            width: 240px;
            height: 56px;
            font-szie: 28px;
            background-color: #D8E5F1;
            text-align: center;
            line-height: 56px;
            color: rgb(139, 160, 182);
    .goods-scroller
        width: 750px;
        // height: 300px;
        .new-item
            margin-left: 30px;
            margin-bottom: 100px;
            width: 280px;
            .image
                width: 280px;
                height: 280px;
                background-color: #f4f4f4;
            .txt
                color: #333;
                lines: 1;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            .info
                color: #7f7f7f;
                font-szie: 24px;
                width: 100px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
</style>

