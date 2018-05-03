<template>
    <div class="vote">
      <h3 class="title">{{ $t("vote.title") }}</h3>
      <div class="vote-view flex">
        <div>
          <img src="/static/img/password-see1.png" alt="">
          {{ $t("vote.view.prompt") }} (<span>0</span>/33)
        </div>
        <button>{{ $t("vote.view.btn") }}</button>
      </div>
      <div class="search">
        <div class="search-input">
          <input type="text" :placeholder="$t('vote.search.placeholder')" />
        </div>
        <div class="result" v-show="searchList.length > 0">
          <h5><span>3</span> {{ $t("vote.search.result") }}</h5>
          <searchTable :tableData="searchList" @handleSelectionChange="searchSelect"></searchTable>
        </div>
      </div>
      <div class="vote-data">
        <el-tabs v-model="activeName">
          <el-tab-pane :label="$t('vote.voteData.delegates.tab')" name="first">
            <h4>{{ $t("vote.voteData.all") }} 544 {{ $t("vote.voteData.delegates.unit") }}</h4>
            <delegatesTable :tableData="delegatesData"></delegatesTable>
            <pagination @pageChange="getPageData"></pagination>
          </el-tab-pane>
          <el-tab-pane :label="$t('vote.voteData.record.tab')" name="second">
            <h4>{{ $t("vote.voteData.all") }} {{ recordData.length }} {{ $t("vote.voteData.record.unit") }}</h4>
            <recordTable :tableData="recordData"></recordTable>
          </el-tab-pane>
          <el-tab-pane :label="$t('vote.voteData.voters.tab')" name="third">
            <h4>{{ $t("vote.voteData.all") }} {{ votersData.length }} {{ $t("vote.voteData.voters.unit") }}</h4>
            <votersTable :tableData="votersData"></votersTable>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
import searchTable from '../../components/searchTable'
import pagination from '../../components/pagination'
import delegatesTable from '../../components/delegatesTable'
import recordTable from '../../components/recordTable'
import votersTable from '../../components/votersTable'
export default {
  name: "vote",
  data(){
    return {
      searchList: [{
        name: 'seatrips2',
        address: '2675385658327038858S'
      }, {
        name: 'seatrips2',
        address: '2675385658327038858S'
      }, {
        name: 'seatrips2',
        address: '2675385658327038858S'
      }], //搜索结果列表
      activeName: 'first',
      delegatesData: [{
        rank: '1',
        name: 'fiaifdsaj',
        address: '138721043174121324',
        productivity: '99.78%',
        forgedBlocks: '87809',
        approval: '18.1%'
      },{
        rank: '1',
        name: 'fiaifdsaj',
        address: '138721043174121324',
        productivity: '99.78%',
        forgedBlocks: '87809',
        approval: '18.1%'
      },{
        rank: '1',
        name: 'fiaifdsaj',
        address: '138721043174121324',
        productivity: '99.78%',
        forgedBlocks: '87809',
        approval: '18.1%'
      }], //所有数据
      recordData: [{
        rank: '1',
        name: 'fiaifdsaj',
        address: '138721043174121324',
        productivity: '99.78%',
        forgedBlocks: '87809',
        approval: '18.1%'
      },{
        rank: '1',
        name: 'fiaifdsaj',
        address: '138721043174121324',
        productivity: '99.78%',
        forgedBlocks: '87809',
        approval: '18.1%'
      },{
        rank: '1',
        name: 'fiaifdsaj',
        address: '138721043174121324',
        productivity: '99.78%',
        forgedBlocks: '87809',
        approval: '18.1%'
      }], //投票记录
      votersData: [{
        name: 'jofajfl',
        address: 'fhislhfkeruhvkzdnvjdksvkjdznzbdfhbvfjk',
        percentage: '18.6%'
      },{
        name: 'jofajfl',
        address: 'fhislhfkeruhvkzdnvjdksvkjdznzbdfhbvfjk',
        percentage: '18.6%'
      },{
        name: 'jofajfl',
        address: 'fhislhfkeruhvkzdnvjdksvkjdznzbdfhbvfjk',
        percentage: '18.6%'
      }] //投票数据
    }
  },
  methods:{
    searchSelect(val){
      console.log(val)
    },
    getPageData(val){
      console.log('接收到的分页：'+val)
    }
  },
  components:{
    searchTable,
    pagination,
    delegatesTable,
    recordTable,
    votersTable
  }
}
</script>

<style scoped>

</style>
