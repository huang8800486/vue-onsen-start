<template>
  <div id="app">
    <v-ons-navigator swipeable swipe-target-width="200px"
      :page-stack="pageStack"
      :pop-page="goBack"
    ></v-ons-navigator>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters('navigator', ['pageStack']),
  methods: {
    goBack() {
      // Go to the parent route component
      this.$router.push({ name: this.$route.matched[this.$route.matched.length - 2].name });
    }
  }
}
</script>

<style>

</style>
