<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-back-button>回上頁</v-ons-back-button>
      </div>
      <div class="center">綁定帳號</div>
    </v-ons-toolbar>
    <v-ons-list>
        <v-ons-list-item>
            <div class="center">
                <v-ons-input placeholder="請輸入員工編號" float
                v-model="emno"
                >
                </v-ons-input>
            </div>
        </v-ons-list-item>
        <v-ons-list-item>
            <div class="right">
                Hello {{ emno || 'anonymous' }}!
            </div>
        </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
export default {
    data() {
        return {
            emno: '',
            password: ''
        }
    }
}
</script>

<style>

</style>
