<template>
  <div>
    <HeaderVue>
      <span slot="header">Echarts练习 --- 线形图二</span>
      <div slot="btn">
        <button @click="toHome">回首页</button>
        <button @click="toCircular">饼状图</button>
        <button @click="toLinear">线性图</button>
      </div>
    </HeaderVue>
    <div class="number_container">
      <div @click="click(item)" v-for="(item,index) in finish" :key="index">{{item}}</div>
    </div>
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
  computed: {
    finish() {
      let i = 0;
      if (this.sum % 10 == 0) {
        i = this.sum / 10;
      } else {
        i = Number.parseInt(this.sum / 10) + 1;
      }
      return i;
    }
  },
  data() {
    return {
      pageSize: 10,
      pageNum: 1,
      sum: 0,
      option: {
        xAxis: {
          type: "category",
          name: "商品名称",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value",
          name: "商品价格"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "bar"
          }
        ]
      }
    };
  },
  methods: {
    click(val) {
      this.pageNum = val;
      this.req();
    },
    toLinear() {
      this.$router.push("/linear");
    },
    toHome() {
      this.$router.push("/");
    },
    toCircular() {
      this.$router.push("/circular");
    },
    req() {
      let main = document.getElementById("main");
      var myChart = this.$echarts.init(main);
      myChart.showLoading();
      bus
        .productList({
          pageSize: this.pageSize,
          pageNum: this.pageNum
        })
        .then(res => {
          let val = res.data.data;

          if (res.data.status == 0) {
            setTimeout(() => {
              myChart.hideLoading();
              this.sum = val.total;
              this.option.xAxis.data = [];
              this.option.series[0].data = [];
              val.list.forEach(element => {
                  console.log(element.name)
                if (element.name == '') {
                  element.name = "无名氏";
                }
                this.option.xAxis.data.push(element.name);
                this.option.series[0].data.push(element.price);
              });
              myChart.setOption(this.option);
            }, 500);
          } else {
            alert("请登录");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    init() {
      this.req();
    }
  }
};
</script>

<style scoped>
.number_container {
  width: 100%;
  background: cadetblue;
  display: inline-flex;
  justify-content: center;
}
.number_container > div {
  width: 20px;
  height: 20px;
  border: 1px solid gray;
  line-height: 20px;
  text-align: center;
}
</style>