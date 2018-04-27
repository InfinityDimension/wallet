<template>
  <div class="register">
    <div class="tab">
      <div :class="{active: step === 1}">{{ $t('register.step1.tab') }}</div>
      <div :class="{active: step === 2}">{{ $t('register.step2.tab') }}</div>
    </div>
    <div class="steps" v-show="step === 1">
      <textarea v-model="password"></textarea>
      <div class="info">
        <p>{{ $t('register.info') }}</p>
      </div>
      <div class="sub-box">
        <button v-clipboard:copy="password" v-clipboard:success="onCopy" v-clipboard:error="onError">{{ $t("register.step1.btn1") }}</button>
        <button @click="next">{{ $t("register.step1.btn2") }}</button>
      </div>
    </div>
    <div class="steps" v-show="step === 2">
      <textarea v-model="subPassword"></textarea>
      <div class="info">
        <div class="error" v-show="err">
          <img src="/static/img/login-error.png" alt="">{{ $t("login.error") }}
        </div>
        <p>{{ $t('register.info') }}</p>
      </div>
      <div class="sub-box">
        <span @click="back">{{ $t("register.step2.btn1") }}</span>
        <button @click="loginSub">{{ $t("register.step2.btn2") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {handleLocalStorage} from '../../utils/util'
export default {
  name: 'index',
  data () {
    return {
      password: 'property dune human cluster penalty police monitor mammal blush license civil vault', //生成的密码
      subPassword: '', //填写的密码
      step: 1, //步骤1，步骤2
      err: false,  //登录出错
    }
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background-image: url(/static/img/login-bg.png);min-width: 700px;');
  },
  methods: {
    next(){
      this.step = 2;
      this.err = false;
      this.subPassword = '';
    },
    back(){
      this.step = 1;
    },
    loginSub(){
      //判断密码
      if(this.password.length > 20){
        handleLocalStorage('set','login','yes');
        this.$router.push({path: '/'})
      }else{
        this.err = true;
      }
    },
    onCopy(){ //复制成功
      this.$message({
        message: this.$t('register.copy.success'),
        type: 'success'
      });
    },
    onError(){ //复制失败
      this.$message.error(this.$t('register.copy.fail'));
    }
  }
}
</script>

<style scoped>

</style>
