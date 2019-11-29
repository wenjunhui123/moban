<template>
  <div class="home">
    <div id="home1"></div>
    <div id="home2"></div>
    <div id="home3"></div>
  </div>
</template>

<script>
var echarts = require("echarts");
// 引入柱状图
require("echarts/lib/chart/bar");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
// 基于准备好的dom，初始化echarts实例

export default {
  mounted() {     
    var myChart = echarts.init(document.getElementById("home1"));
    window.console.log(myChart);
    // 绘制图表
    myChart.setOption({
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
    // window.console.log(myChart);
  },
  components: {}
};
</script>

<style escope lang='less'>
.home {
  font-size: 0.2rem;
//   display: flex;
  #home1 {
    width: 6rem;
    height:6rem;
    //   background: red;
    div{
        width: 100%;
        height: 100%;
    }
  }
  #home2 {
    width: 3rem;
    height: 3rem;
    background: blue;
  }
  #home3 {
    width: 3rem;
    height: 3rem;
    background: green;
  }
}
</style>