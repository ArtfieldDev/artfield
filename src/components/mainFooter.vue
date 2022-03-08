<template>
   <q-footer reveal elevated >
        <q-toolbar class="flex justify-between main-footer">
        <router-link to="home" class="text-white">
          <q-btn size="20px" flat round dense icon="mdi-home-outline" label="" stack>

           <small style="font-size:40%" class="text-caption text-capitalize">Home</small>
          </q-btn>
          </router-link>

        <router-link to="chart" class="text-white">
          <q-btn size="20px" flat round dense icon="mdi-chart-line-variant" stack>
           <small style="font-size:40%"  class="text-caption text-capitalize">Chart</small>
          </q-btn>
</router-link>

<!-- center button -->
          <q-btn color="deep-purple-2"  size="23px" text-color="primary" round dense icon="mdi-plus" />
<!-- end of center  -->
<router-link to="wallet" >
          <q-btn size="20px" flat round dense icon="mdi-wallet" stack>
            <small style="font-size:40%" class="text-caption text-capitalize">wallet</small>
          </q-btn>
</router-link>

<router-link to="profile" class="text-white">
          <q-btn size="20px" flat round dense icon="mdi-account-outline" stack>
          <small style="font-size:40%" class="text-caption text-capitalize">Profile</small>
          </q-btn>
</router-link>

        </q-toolbar>
      </q-footer>
</template>
<script>
export default {
  data() {
    return {
    };
  },

  methods: {},
  created() {},
};
</script>

<style scoped>
.main-footer a{
  color:#fff;
}
.router-link-active, .router-link-exact-active{
  color:#F6B133 !important;
}
</style>
