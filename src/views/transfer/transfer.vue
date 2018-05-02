<template>
    <div class="transfer">
      <h3>{{ $t("transfer.title") }}</h3>
      <div class="transfer-box">
        <ul class="form">
          <li>
            <h5>{{ $t("transfer.form.recipient") }}</h5>
            <div class="input-box">
              <input type="text" :placeholder="$t('transfer.form.recipientPlaceholder')"/>
              <span><img src="/static/img/login-error.png" alt="">{{ $t("transfer.form.recipientErr") }}</span>
            </div>
          </li>
          <li>
            <h5>{{ $t("transfer.form.amount") }}</h5>
            <div class="input-box">
              <input type="text" id="amount" :placeholder="$t('transfer.form.amountPlaceholder')"/>
              <span><img src="/static/img/login-error.png" alt="">{{ $t("transfer.form.amountErr") }}</span>
              <label for="amount">HTC</label>
            </div>
          </li>
          <li>
            <h5>{{ $t("transfer.form.fee") }}</h5>
            <div class="input-box">
              <input type="text" value="0.01" disabled/>
              <label>HTC</label>
            </div>
          </li>
        </ul>
        <p>{{ $t("transfer.prompt") }}</p>
        <button>{{ $t("transfer.send") }}</button>
      </div>
    </div>
</template>

<script>
export default {
  name: "transfer"
}
</script>

<style scoped>

</style>
