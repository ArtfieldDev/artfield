<template>
  <div class="body bg-primary q-px-lg">
    <div class="justify-center">
      <div class="text-center">
        <img class="vertical-middle appLogo" src="~assets/artfield_logo.png" />
        <p class="brand-name text-secondary">ArtField</p>

        <p class="text-white">
          Connect with your <span class="text-secondary">Pi Wallet</span>
          <br />to begin your NFT expereince
        </p>
        <div>
          <q-checkbox
            style="zoom: 0.7"
            class="text-white"
            keep-color
            v-model="termsAndCondition"
            label="Sign terms and conditions"
            color="secondary"
          />
        </div>
        <button class="q-my-lg connectBTN">
          <div class="flex items-center q-ma-3">
            <img class="q-ma-xs" src="~assets/pilogo.png" />
            <span> Connect to Pi </span>
          </div>
        </button>
        <p>
          <span class="text-secondary">Already connected?</span>
          <span class="text-white"
            >Login to begin your NFT <br />expereince or Register to setup your
            account</span
          >
        </p>
        <div class="flex justify-around q-mb-xl">
        <router-link to="/login">
          <q-btn color="secondary" text-color="primary" label="Login" />
          </router-link>
          <q-btn outline class="text-secondary" label="Create" />
        </div>

        <div class="q-my-lg">
          <p>
            <span class="text-white">Don't have a wallet?</span
            ><span class="text-secondary"> Create Pi Wallet</span>
          </p>
        </div>

               <terms-footer textColor="text-white"/>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      termsAndCondition: false,
    };
  },
  methods: {},
  created() {},
};
</script>
<style scoped>
.body {
  min-height: 100vh;
  padding-top: 20%;
  font-size: 100%;
}

.connectBTN {
  border: 1px solid #f6b133;
  color: #412968;
  font-weight: bold;
  border-radius: 8px;
}
.connectBTN img {
  width: 20%;
}

.q-field__native{
  color:#ffff !important;
}
.bottom-rmk{
  font-size: 95%;

}

</style>
