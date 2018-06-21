<template>
    <div class="wrapper">
        <scroller class="scroller" scrollDirection="horizontal" show-scrollbar=false >
            <div v-for="(name, index) in classItems" :ref="'item'+index" :key="index" class="class-item" :class="{ 'currrentActive' : currentIndex === index }" @click="changePosition(index)">
                <text class="txt" :ref="'text'+index">{{name}}</text>
            </div>
        </scroller>
    </div>
</template>

<script>
export default {
    data () {
        return {
            classItems: ["推荐", "新品", "众筹", "福利社", "限时购", "居家", "配件", "服装", "电器", "洗护"],
            currentIndex: 0
            // scrollPosition: {left: '0px'}
        }
    },
    methods: {
        changePosition (index) {
            // console.log(index);
            this.currentIndex = index;
            // event.cancelBubble = false;
            // console.log(event);
            // console.log(event.target);
            // this.scrollPosition.left = (40 * index) + 'px';
        }
    }
}
</script>


<style lang="stylus">
    .txt
        color: #666;
    .scroller
        display: flex;
        flex-direction: row;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        margin: 30px auto 10px;
        .class-item
            margin: 0px 15px;
            padding: 5px 10px;
        .currrentActive
            border-bottom: 2px solid red;
            .txt
                color: red;
</style>
