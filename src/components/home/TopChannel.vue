<template>
    <div class="wrapper">
        <scroller class="scroller" scrollDirection="horizontal" :style="scrollPosition" show-scrollbar=false @click="changePosition()">
            <div v-for="(name, index) in classItems" :ref="'item'+index" :key="index" class="class-item isActive" >
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
            scrollPosition: {left: '0px'}
        }
    },
    methods: {
        changePosition () {
            event.cancelBubble = false;
            console.log(event);
            console.log(event.target);
            // this.scrollPosition.left = (40 * index) + 'px';
        }
    }
}
</script>


<style lang="stylus" scoped>
    .txt
        color: #666;
    .scroller
        display: flex;
        flex-direction: row;
        position: absolute;
        top: 0;
        left: 0px;
        width: 90%;
        margin: 30px auto 10px;
        .class-item
            padding: 0px 20px;
        .isActive
            border-bottom: 2px solid red;
</style>
