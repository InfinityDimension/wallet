<template>
    <div>

    </div>
</template>

<script>
export default {
  name: "error",
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background-image: url(/static/img/404.jpg);background-size: cover;');
  }
}
</script>

<style scoped>

</style>
