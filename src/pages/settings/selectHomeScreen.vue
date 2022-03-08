<template>
  <div class="flex " style="height: 100vh">
    <div class="q-mx-md q-my-lg flex">
      <!-- top -->
      <div
        class="text-h6 text-center text-primary self-start"
        style="width: 35%; margin: 0 auto"
      >
        Selecct Your Home Screen View
      </div>

      <!-- middle -->
      <div class="flex justify-around">
        <!-- First screen -->

        <div class="col flex">
          <div
            class="q-pa-sm full-width"
            @click="selectTab"
            :class="{ selectedTheme: screenType.tabSlider }"
          >
            <q-skeleton height="2vh" square />
            <q-skeleton class="bg-grey-2" height="5vh" square />
            <div class="flex justify-around q-pa-sm bg-grey-4">
              <q-skeleton class="bg-grey-1" width="20px" height="20px" square />
              <q-skeleton class="bg-grey-1" width="20px" height="20px" square />
              <q-skeleton class="bg-grey-1" width="20px" height="20px" square />
              <q-skeleton class="bg-grey-1" width="20px" height="20px" square />
            </div>
            <q-skeleton height=".8vh" class="bg-grey-2" square />
            <div class="flex justify-end items-center q-py-xs bg-grey-4">
              <div class="bg-grey q-pa-xs round">
                <q-skeleton
                  class="bg-grey-1 q-mx-xs"
                  width="2rem"
                  height="5px"
                  square
                />
              </div>
              <q-skeleton
                class="bg-grey-1 q-mx-xs"
                width="2rem"
                height="5px"
                square
              />
              <q-skeleton
                class="bg-grey-1 q-mx-xs"
                width="2rem"
                height="5px"
                square
              />
              <q-skeleton
                class="bg-grey-1 q-ml-xs"
                width="10px"
                height="5px"
                square
              />
            </div>
            <q-skeleton height=".8vh" class="bg-grey-2" square />
            <div
              class="flex justify-between items-end q-px-sm q-pt-sm bg-grey-4"
            >
              <q-skeleton
                class="bg-grey-1 q-ma-xs q-mb-sm"
                width="43%"
                height="60px"
                square
              />
              <q-skeleton
                class="bg-grey-1 q-ma-xs q-mb-sm"
                width="43%"
                height="60px"
                square
              />
              <q-skeleton
                class="bg-grey-1 q-mx-xs"
                width="43%"
                height="40px"
                square
              />
              <q-skeleton
                class="bg-grey-1 q-mx-xs"
                width="43%"
                height="40px"
                square
              />
            </div>
            <div v-if="screenType.tabSlider" class="text-grey-7 text-center flex justify-center items-center q-pt-sm">
            <div> Recomemded <q-icon name="mdi-check-circle-outline" color="green" />
              </div>
            </div>
          </div>
          <div class="q-mt-md text-grey-6 text-left self-end">
            Tab slider home display enhances the number of scrolls actions by
            unlimited catalog of items
          </div>
        </div>

        <!-- Second screen -->
        <div class="col flex">
          <div
            :class="{ selectedTheme: screenType.listHome }"
            class="q-pa-sm full-width"
            @click="selectList"
          >
            <q-skeleton height="2vh" square />
            <q-skeleton class="bg-grey-2" height="5vh" square />
            <div class="flex justify-around q-pa-sm bg-grey-4">
              <q-skeleton class="bg-grey-1" width="20px" height="20px" square />
              <q-skeleton class="bg-grey-1" width="20px" height="20px" square />
              <q-skeleton class="bg-grey-1" width="20px" height="20px" square />
              <q-skeleton class="bg-grey-1" width="20px" height="20px" square />
            </div>
            <q-skeleton height=".8vh" class="bg-grey-2" square />
            <div class="flex justify-start items-center q-py-sm bg-grey-4">
              <q-skeleton
                class="bg-grey-1 q-mx-md"
                width="55px"
                height="5px"
                square
              />
            </div>
            <q-skeleton height=".8vh" class="bg-grey-2" square />
            <div
              class="flex justify-between items-end q-px-sm q-pt-sm bg-grey-4"
            >
              <q-skeleton
                class="bg-grey-1 q-ma-xs q-mb-sm"
                width="43%"
                height="60px"
                square
              />
              <q-skeleton
                class="bg-grey-1 q-ma-xs q-mb-sm"
                width="43%"
                height="60px"
                square
              />
            </div>
            <q-skeleton height=".5vh" class="bg-grey-2" square />
            <div class="flex justify-start items-center q-py-xs bg-grey-4">
              <q-skeleton
                class="bg-grey-1 q-mx-md"
                width="55px"
                height="5px"
                square
              />
            </div>
            <q-skeleton height=".5vh" class="bg-grey-2" square />
            <div
              class="flex justify-between items-end q-px-sm q-pt-xs bg-grey-4"
            >
              <q-skeleton
                class="bg-grey-1 q-mt-xs"
                width="45%"
                height="10px"
                square
              />
              <q-skeleton
                class="bg-grey-1 q-mt-xs"
                width="45%"
                height="10px"
                square
              />
            </div>
             <div v-if="screenType.listHome" class="text-grey-7 text-center flex justify-center items-center q-pt-sm">
            <div> Selected <q-icon name="mdi-check-circle-outline" color="green" />
              </div>
            </div>
          </div>
          <div class="q-mt-md text-grey-6 text-left self-end">
            <div>
              List home display stack all menu avalible under each menu which
              holds limited items
            </div>
          </div>
        </div>
      </div>

      <!-- bottom -->
      <div class="flex justify-center items-center full-width self-end">
        <q-btn class="bg-primary text-white q-px-xl">Continue</q-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      screenType: {
        tabSlider: true,
        listHome: false,
      },
    };
  },
  methods: {
    selectTab() {
      this.screenType.tabSlider = true;
      this.screenType.listHome = false;
    },
    selectList() {
      this.screenType.tabSlider = false;
      this.screenType.listHome = true;
    },
  },
  setup() {},
};
</script>

<style scoped>
.selectedTheme {
  background: #dfc7ff;
  border-radius: 5px;
  margin: -3%;
  border: 3px dotted darkgray;
  transition: all 1s;
}
.container {
}
</style>
