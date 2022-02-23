<template>
    <div :class="textColor" class="bottom-rmk flex justify-between items-center">
          <div class="flex justify-between">
            <div class="q-mr-sm">Terms & conditons</div>
            <div> FAQ & Help</div>
          </div>
          <q-select
            id="language-dropdown"
            class="text-white bottom-rmk"
            borderless
            v-model="language"
            :options="options"
          />

        </div>
</template>
<script>
export default {
  data() {
    return {
  language: "English",
      options: ["English", "French", "Chinese"],
    };
  },
  props:['textColor'],

  methods: {},
  created() {},
};
</script>
<style scoped>
.bottom-rmk{
  font-size: 95%;

}

</style>
