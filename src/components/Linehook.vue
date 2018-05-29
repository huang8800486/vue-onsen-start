<template>
  <v-ons-page @init="init">
      載入中...
      {{ $route.query.name }}
  </v-ons-page>
</template>

<script>
export default {
  name: 'Linehook',
  methods: {
    init(event) {
      debugger;
      console.log(this.$route.query.name);
      
    }
  }
}
</script>

<style>

</style>
