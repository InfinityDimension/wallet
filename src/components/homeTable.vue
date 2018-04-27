<template>
  <div class="home-table">
    <el-table
      :data="allTableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "home-table",
    data(){
        return {

        }
    },
    props:['allTableData']
  }
</script>

<style lang="scss">
  .home-table{
    .el-table th>.cell{
      color: #C5C7CB;
      font-weight: 500;
    }
  }
</style>
