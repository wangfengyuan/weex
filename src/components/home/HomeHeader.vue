<template>
    <div class="wrapper">
        <div class="scan">
            <text class="ic iconfont">&#xe689;</text>
            <text class="txt">扫一扫</text>
        </div>
        <div class="search">
            <text class="ic iconfont">&#xe65c; </text>
            <input type="text" class="search-input" placeholder="搜索商品，共8888款好物" />
        </div>
        <div class="notice">
            <text class="ic iconfont">&#xe70a;</text>
            <text class="txt">消息</text>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .iconfont
        font-family iconfont;
    .ic
        text-align: center;
        font-size: 36px;
    .txt
        color: #666;
    .wrapper
        display: flex;
        // position: absolute;
        // left: 0;
        // top: 0;
        width: 100%;
        padding-top: 30px;
        flex-direction: row;
    .scan
        width: 96px;
        margin: 0 15px;
    .search
        flex: 1;
        background-color: #ccc;
        padding: 10px 30px;
        display: flex;
        flex-direction: row;
        border-radius: 10px;
        .ic
            font-size: 36px;
        .search-input
            background-color: #ccc;
            line-height: 32px;
    .notice
        width: 96px;
        margin: 0 15px;
        .txt
            text-align: center;
</style>
