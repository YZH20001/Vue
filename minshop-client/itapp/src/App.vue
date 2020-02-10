<template>
  <div id="app">
    <router-view />
    <FooterGuide />
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
//import { reqPwdLogin } from "./api";
export default {
  // async mounted() {
  //   //测试
  //   const result = await reqPwdLogin();
  //   console.log(result);
  // },
  components: {
    FooterGuide
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
