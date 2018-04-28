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
          <div class="more">{{ $t("home.more") }}</div>
        </el-tab-pane>
        <el-tab-pane :label="$t('home.tab.sent')" name="second">
          tab页2
        </el-tab-pane>
        <el-tab-pane :label="$t('home.tab.received')" name="third">
          tab页3
        </el-tab-pane>
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
        id: '6421980…18sdsad',
        time: '2018/01/13 17:44:47',
        sender: '674857…22007',
        recipient: '674457…22007',
        amount: '499.12345678',
        fee: '0.10000000',
        confirmations: '7'
      },{
        id: '6421980…18sdsad',
        time: '2018/01/13 17:44:47',
        sender: '674857…22007',
        recipient: '674457…22007',
        amount: '499.12345678',
        fee: '0.10000000',
        confirmations: '7'
      },{
        id: '6421980…18sdsad',
        time: '2018/01/13 17:44:47',
        sender: '674857…22007',
        recipient: '674457…22007',
        amount: '499.12345678',
        fee: '0.10000000',
        confirmations: '7'
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
