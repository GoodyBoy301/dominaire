<template>
  <div class="app preloading">
    <Header></Header>
    <Loader v-if="isLoading" :onLoaded="onLoaded" />
    <NuxtPage v-else></NuxtPage>
    <!-- <Footer v-if="!isLoading && route.name === 'index'"></Footer> -->
    <Footer v-if="!isLoading"></Footer>
  </div>
</template>

<script lang="ts" setup>
import gsap from "gsap";
import { LenisScroll } from "./interactions/base/scroll";
import "./styles/index.scss";
const route = useRoute();

const projName = ref("New website");
const projDesc = ref("Bootstrapped with the Nuxt3 GoodyPlate");

const isLoading = ref(true);
function onLoaded() {
  isLoading.value = false;
}

const computedPageMeta = computed(() => {
  return {
    title: projName.value,
    meta: [
      { hid: "description", property: "description", content: projDesc.value },
      { hid: "og-type", property: "og:type", content: "website" },
      { hid: "og-title", property: "og:title", content: projName.value },
      {
        hid: "og-description",
        property: "og:description",
        content: projDesc.value,
      },
      { hid: "og-image", property: "og:image", content: "src" },
      {
        hid: "twitter-card",
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter-title",
        property: "twitter:title",
        content: projName.value,
      },
      {
        hid: "twitter-description",
        property: "twitter:description",
        content: projDesc.value,
      },
      { hid: "twitter-image", property: "twitter:image", content: "src" },
    ],
  };
});

useHead(computedPageMeta);

let scrolling = false;
const Scroll = async (e: { direction: number }) => {
  if (scrolling) return;
  if (!document.querySelector(".header")) return;
  if (e.direction == 1) {
    scrolling = true;
    await gsap.to(".header, .header-menu", {
      top: "-12rem",
      ease: "power1.in",
      duration: 0.5,
    });
    scrolling = false;
  } else {
    scrolling = true;
    await gsap.to(".header, .header-menu", {
      top: "0rem",
      ease: "power1.out",
      duration: 0.5,
    });
    scrolling = false;
  }
};

onBeforeMount(() => {
  const scroll = new LenisScroll();
  scroll.lenis.on("scroll", Scroll);
});
</script>
