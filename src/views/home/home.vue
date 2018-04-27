<template>
  <div class="home">
    <ul class="survey flex">
      <li class="flex">
        <div>
          <h5>{{ $t("home.survey.balance") }}</h5>
          <h2>4.560000</h2>
          <p>HTC</p>
        </div>
        <img src="/static/img/home-balance.png" alt="">
      </li>
      <li class="flex">
        <div>
          <h5>{{ $t("home.survey.lastHeight") }}</h5>
          <h2>563154</h2>
          <p>2018.01.13 13:31</p>
        </div>
        <img src="/static/img/home-last.png" alt="">
      </li>
      <li class="flex">
        <div>
          <h5>{{ $t("home.survey.version") }}</h5>
          <h2>1.3.6</h2>
          <p>2018.01.13 mainnet</p>
        </div>
        <img src="/static/img/home-version.png" alt="">
      </li>
    </ul>
    <h3 class="title">{{ $t("home.transactions") }}</h3>
    <div class="my-transactions">
      <el-tabs v-model="activeName">
        <el-tab-pane :label="$t('home.tab.all')" name="first">
          <homeTable :allTableData="allData"></homeTable>
        </el-tab-pane>
        <el-tab-pane :label="$t('home.tab.sent')" name="second">配置管理</el-tab-pane>
        <el-tab-pane :label="$t('home.tab.received')" name="third">角色管理</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import homeTable from '../../components/homeTable'
export default {
  name: "home",
  data(){
    return {
      activeName: 'first', //默认第一个tab
      allData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  components:{
    homeTable
  }
}
</script>

<style scoped>

</style>
