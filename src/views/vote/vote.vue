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
        <div>
          <input type="text" class="search-input" :placeholder="$t('vote.search.placeholder')" />
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "vote"
    }
</script>

<style scoped>

</style>
