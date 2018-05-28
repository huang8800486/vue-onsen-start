<template>
    <v-ons-page>
        <p class="intro">
        This is a kitchen sink example that shows off the Vue bindings for Onsen UI.<br><br>
        </p>
        <v-ons-card>
            <router-link :to="{name: 'subscribeNotify'}">
                <div class="title">Title</div>
                <div class="content">
                    Content
                </div>                    
            </router-link>

        </v-ons-card>
    </v-ons-page>
</template>

<script>
export default {

}
</script>

<style>

</style>
