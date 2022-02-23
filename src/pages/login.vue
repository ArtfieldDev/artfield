<template>
  <div class="body bg-primary q-px-lg">
    <div class="text-center">
      <img class="vertical-middle appLogo q-mt-lg" src="~assets/artfield_logo.png" />
      <p class="brand-name text-secondary">ArtField</p>
    </div>

    <q-dialog
      v-model="dialog"
      :position="position"
      persistent
      class="login-panel"
    >
      <q-card
      class="login-card"
      >
      <hr class="topLine">
        <div class="q-pa-md">
          <div class="text-h6 text-center text-primary">LOGIN</div>
        </div>
        <div class="q-px-md q-pb-md q-mx-xl">
          <q-form @submit="onSubmit">
            <q-input
              class="q-my-md"
              standout="bg-primary text-white"
              v-model="loginDetails.u_telephone"
              label="Phone Number"
              type="tel"
              :rules="[ val => val && val.length > 0 || 'Inpute your active phone number']"
            />

            <q-input
              v-model="password"
              standout="bg-primary text-white"
              :type="isPwd ? 'password' : 'text'"
                :rules="[ val => val && val.length > 0 || 'Enter your registerd password']"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <q-checkbox
              style="zoom: 0.9"
              class="text-primary q-my-sm"
              keep-color
              v-model="termsAndCondition"
              label="Sign terms and conditions"
              color="primary"
            />
            <br />
            <div>
              <q-btn
                class="full-width"
                label="Login "
                type="submit"
                color="primary"
              />
            </div>
          </q-form>
          <div class="q-py-xs text-right text-primary">
            <small>Forget Password</small>
          </div>
          <div class="text-center q-mt-lg">
            <p><small>or login with</small></p>
            <div class="flex justify-around">
              <q-btn size="lg" padding="none" outline  color="primary" icon="mdi-facebook" />
              <q-btn size="lg" padding="none" outline  color="primary" icon="mdi-google" />
              <q-btn size="lg" padding="none" outline  color="primary" icon="mdi-twitter" />
            </div>
            <div class="q-my-lg">
          <p class="q-mt-lg">
            <span class="text-primary">Don't have a wallet?</span
            ><span class="text-secondary"> Create Pi Wallet</span>
          </p>
        </div>
          </div>
        </div>
        <terms-footer class="q-mx-lg" textColor="text-primary" />
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  data() {
    return {
      dialog: true,
      position: "bottom",
      termsAndCondition: false,
      loginDetails:{
        u_telephone:null,
        u_password:null
      }
    };
  },
  setup() {
    return {
      password: ref(""),
      isPwd: ref(true),
      tel: ref(""),
    };
  },
  methods: {
      onSubmit () {

      },
  },
  created() {},
};
</script>
<style scoped>
.body {
  min-height: 100vh;
  padding-top: 5%;
  font-size: 100%;
}
.login-panel .q-dialog__inner {
  border: 100px solid green !important;
}
.login-card{
  height:73vh;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
}
.topLine{
  width:16vw;
  height: 3px;
  border: none;
  background-color: black;
}
</style>
