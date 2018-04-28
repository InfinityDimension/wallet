<template>
  <div class="forging">
    <h3 class="title">{{ $t("delegate.title") }}</h3>
    <div class="no-delegate">
      <img src="/static/img/no-delegate.png" alt="">
      <p>{{ $t("delegate.noDelegate.prompt") }}</p>
      <button @click="dialogFormVisible = true">{{ $t("delegate.noDelegate.registerBtn") }}</button>
    </div>
    <div>

    </div>
    <el-dialog :title="$t('delegate.register.title')" width="700px" :visible.sync="dialogFormVisible" class="delegate-register">
      <p>{{ $t("delegate.register.prompt") }}</p>
      <h5>{{ $t("delegate.register.name") }}</h5>
      <input type="text" :placeholder="$t('delegate.register.placeholder')">
      <div slot="footer" class="dialog-footer">
        <span class="spend">{{ $t("delegate.register.spend") }}</span>
        <el-button @click="dialogFormVisible = false">{{ $t("delegate.register.cancel") }}</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">{{ $t("delegate.register.register") }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "forging",
  data(){
    return {
      dialogFormVisible: false
    }
  }
}
</script>

<style scoped>

</style>
