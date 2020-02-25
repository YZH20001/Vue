<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title">
      <span class="ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>
<script>
export default {
  props: {
    title: String
  },
};
</script>
<style>
/*头部搜索框*/
header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  background: #fe5400;
}
.head-wrap {
  width: 100%;
  padding: 6px 6px 6px 36px;
  background-size: 27px 20px;
  background-position: 3px 8px;
}
.head-top {
  width: 100%;
  border-radius: 5px;
  background: #b52600;
  text-align: center;
}
.head-top span {
  display: inline-block;
  line-height: 25px;
  color: #fff;
}
</style>