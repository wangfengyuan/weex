<template>
    <div>
        <slider class="slider" interval="2000" auto-play="true">
            <div class="frame" v-for="(img, index) in imageList" :key="index">
                <image class="image" resize="cover" :src="img.src"></image>
            </div>
        </slider>
    </div>
</template>

<script>
export default {
    props: {
        imageList: {
            Type: Array,
            Value: null
        }
    },
    data () {
        return {
           
        }
    },
    created () {
        // console.log(this.imageList);
    }
}
</script>

<style lang="stylus" scoped>
    .slider
        width: 750px;
        height: 400px;
    .image
        width: 750px;
        height: 400px;
</style>
