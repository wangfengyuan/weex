<template>
  <div class="wrapper">
    <router-view class="r-box"/>
    <tab-bar @tabSwitch="tabSwitch" class="tabBar"></tab-bar>
  </div>
</template>

<script>

import tabBar from '@/components/tabBar';
import util from './assets/util';

export default {
  name: 'App',
  // data () {
  // }, 
  created () {
    util.initIconFont();
  },
  components: {
    'tab-bar': tabBar
  },
  methods: {
    tabSwitch (e) {
      console.log(e);
      this.$router.push('/' + e.data);
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    color: #ccc;
  }
</style>

<style lang="stylus" scoped>
  .wrapper
    background-color:#f4f4f4;
    .tabBar
      position: absolute;
      bottom: 0;
</style>
