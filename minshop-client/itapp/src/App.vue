<template>
  <div id="app">
    <router-view />
    <FooterGuide />
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
import { mapState, mapActions } from "vuex";
//import { reqPwdLogin } from "./api";
export default {
  mounted() {
    //   //测试
    //   const result = await reqPwdLogin();
    //   console.log(result);
    //this.$store.dispatch('getAddress')
    this.getUserInfo();
    this.getAddress();
  },
  methods: {
    ...mapActions(["getAddress", "getUserInfo"])
  },
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
