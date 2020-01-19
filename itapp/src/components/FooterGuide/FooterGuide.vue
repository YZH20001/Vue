<template>
  <div class="footer_guide">
    <a href="javascript:;" class="guide_item" :class="{on:'/msite'===$route.path}" @click="goto('/msite')">
      <span class="item_icon">
       <i class="iconfont icon-Groupx"></i>
      </span>
      <span>主页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/serch'===$route.path}" @click="goto('/serch')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/order'===$route.path}" @click="goto('/order')">
      <span class="item_icon">
        <i class="iconfont icon-danju"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/preson'===$route.path}" @click="goto('/preson')">
      <span class="item_icon">
        <i class="iconfont icon-ren"></i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>
<script>
export default {
  methods:{
goto(path){
  this.$router.replace(path);
}
  }
};
</script>
<style>
.footer_guide{
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 50Px;
  display: flex;
  border-top: 1px solid;
}
.guide_item{
  display: flex;
  flex: 1;
  text-align: center;
  flex-direction: column;
  align-items: center;margin: 5px;
  color: #999999;
}
.on{
  color: #02a774;
}
span{
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 2px;
}
.iconfont{
  font-size: 22px;
}
</style>
