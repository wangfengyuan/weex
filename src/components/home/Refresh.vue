<template>
    <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
        <text class="indicator-text">Refreshing ...</text>
        <loading-indicator class="indicator"></loading-indicator>
    </refresh>
</template>

<script>
const modal = weex.requireModule('modal');
export default {
    data () {
        return {
            refreshing: true
        }
    },
    methods: {
        onrefresh (event) {
            modal.toast({ message: 'Refreshing', duration: 1 })
            this.refreshing = true
            setTimeout(() => {
                this.refreshing = false
            }, 2000)
        }
    }
}
</script>
