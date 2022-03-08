<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="q-pt-sm">
      <q-toolbar>
        <div class="text-center">
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png" /> </q-avatar
          ><br />
          <small>Kuloski</small>
        </div>
        <q-space />
        <q-chip>
          <q-input
            rounded
            v-model="search"
            borderless
            class="q-w-25"
            style="max-width: 130px"
            placeholder="Search Address"
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-chip>
      </q-toolbar>
      <div class="flex flex-wrap justify-center text-center items-center">
        <q-img width="40px" src="~assets/pilogo.png" />
        <div class="text-secondary text-bold q-ma-sm text-left">
          <span class="text-h6">
            <span v-if="toggleAmount">305.9038311</span>
            <span v-else-if="!toggleAmount">xxxxxxxxxxx</span>
            <span class="text-white">
              <q-icon
                v-if="!toggleAmount"
                @click="toggleAmountMtd"
                name="mdi-eye-off"
                style="margin: 0px 0px 0px 6px"
              />
              <q-icon
                v-else-if="toggleAmount"
                @click="toggleAmountMtd"
                name="mdi-eye"
                style="margin: 0px 0px 0px 6px"
              />
            </span> </span
          ><br />
          <span class="text-grey-4" v-if="toggleAmount">$30590.38311</span>
          <span class="text-grey-4" v-else-if="!toggleAmount">xxxxxxxxxxx</span>
        </div>
      </div>
      <div class="flex justify-around">
        <q-btn
          icon="mdi-arrow-bottom-left"
          style="width: 35%"
          class="q-px-lg q-my-sm text-capitalize"
          outline
          color="green"
          ><span class="text-white">Receive</span></q-btn
        >

        <q-btn
          icon="mdi-arrow-top-right"
          style="width: 35%"
          class="q-px-lg q-my-sm text-capitalize"
          outline
          color="red"
          ><span class="text-white">send</span></q-btn
        >
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-pull-to-refresh @refresh="refresh">
        <router-view v-slot="{ Component }">
          <transition
            enter-active-class="animated slideIn"
            leave-active-class="animated fadeOut"
            appear
            :duration="300"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </q-pull-to-refresh>
    </q-page-container>

    <main-footer />
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },
  data() {
    return {
      toggleAmount: false,
    };
  },
  methods: {
    toggleAmountMtd() {
      this.toggleAmount = !this.toggleAmount;
    },
  },
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
       refresh (done) {
        setTimeout(() => {
          done()
        }, 1000)
      }
    };
  },
});
</script>

