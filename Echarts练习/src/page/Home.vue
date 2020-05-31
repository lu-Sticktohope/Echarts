<template>
  <div>
    <HeaderVue>
      <span slot="header">Echarts练习 --- 条形图一</span>
      <div slot="btn">
        <button @click="toLogin">登录</button>
        <button @click="toCircular">饼状图</button>
        <button @click="toLinear">线性图</button>
        <button @click="toBar">条形图</button>
      </div>
    </HeaderVue>
    <BodyVue @init="init" />
  </div>
</template>

<script>
import HeaderVue from "../components/Header.vue";
import BodyVue from "../components/Body.vue";
import { bus } from "../network/index";

export default {
  components: {
    HeaderVue,
    BodyVue
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
    toBar() {
      this.$router.push("/bar");
    },
    toCircular() {
      this.$router.push("/circular");
    },
    toLinear() {
      this.$router.push("/linear");
    },
    init() {
      let main = document.getElementById("main");
      var myChart = this.$echarts.init(main);
      myChart.showLoading();
      bus
        .initData()
        .then(res => {
          setTimeout(() => {
            myChart.hideLoading();
            myChart.setOption(res.data);
          }, 1500);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
</style>