<template>
  <div class="index">
    <h1>老婆，我爱你！</h1>
    <img src="/static/img/1.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {

    }
  },
  beforeCreate(){
    document.querySelector('body').removeAttribute('style');
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  line-height: 80px;
  display: flex;
  justify-content: space-between;
}
</style>
