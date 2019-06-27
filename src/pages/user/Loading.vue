<template>
    <div class="loading">
        <a-spin :spinning="spinning" size="large"></a-spin>
        <div class="desc">正在加载，请耐心等待...</div>
    </div>
</template>

<script>
    export default {
        name: "Loading",
        data(){
            return{
                spinning:true
            }
        }
    }
</script>

<style scoped>
    .loading{
        width: 100%;
        text-align: center
    }
    .desc{
        line-height: 20px
    }
</style>
