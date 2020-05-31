<template>
  <div>
    <HeaderVue>
      <span slot="header">Echarts练习 --- 饼状图</span>
      <div slot="btn">
        <button @click="toHome">回首页</button>
        <button @click="toLinear">线性图</button>
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
  data() {
    return {
      option: {
        title: {
          text: "Mmails站点访问统计",
          subtext: "纯属虚构",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["用户总数", "订单总数", "商品总数"]
        },
        series: [
          {
            name: "统计",
            type: "pie",
            radius: "200",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "用户总数" },
              { value: 310, name: "订单总数" },
              { value: 234, name: "商品总数" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    };
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
     toBar() {
      this.$router.push("/bar");
    },
    toLinear() {
      this.$router.push("/linear");
    },
    init() {
      let main = document.getElementById("main");
      var myChart = this.$echarts.init(main);
      myChart.showLoading();
      bus
        .statistic()
        .then(res => {
          let val = res.data.data;
          setTimeout(() => {
            myChart.hideLoading();
            if (res.data.status == 0) {
              console.log(val);
              this.option.series.forEach(element => {
                element.data.forEach(ele => {
                  switch (ele.name) {
                    case "用户总数":
                      ele.value = val.userCount;
                      break;
                    case "订单总数":
                      ele.value = val.orderCount;
                      break;
                    case "商品总数":
                      ele.value = val.productCount;
                      break;
                    default:
                      break;
                  }
                });
              });

              myChart.setOption(this.option);
            } else {
              alert("你还未登录");
            }
          }, 500);
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