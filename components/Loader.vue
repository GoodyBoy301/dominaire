<template>
  <section class="loader">
    <div class="loader-bg"></div>
    <div class="loader-bg-two"></div>
    <h1 class="hero-heading" v-if="route.name === 'index'">
      <span data-red> <i>Innovative</i> <i> Brands,</i></span>
      <span data-white> <i>Limitless </i> <i>Creativity</i></span>
    </h1>
    <!-- <div class="projects-hero-header" v-if="route.name === 'projects'">
      <h1>projects</h1>
      <p>
        Featured projects that have been meticulously crafted with passion to
        drive results and impact
      </p>
    </div> -->
    <div class="loader-frames-wrapper">
      <div class="loader-frames">
        <figure class="loader-frame">
          <img src="/images/loader-001.webp" alt="" />
        </figure>
        <figure class="loader-frame">
          <img src="/images/loader-002.webp" alt="" />
        </figure>
        <figure class="loader-frame">
          <img src="/images/loader-001.webp" alt="" />
        </figure>
        <figure class="loader-frame">
          <img src="/images/loader-002.webp" alt="" />
        </figure>
        <figure class="loader-mainframe">
          <img src="/images/hero-shadow.webp" alt="" />
        </figure>
      </div>
    </div>
    <div class="loader-count">{{ Math.round((counter / length) * 100) }}%</div>
  </section>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { srcs } from "~/store/images";
const counter = ref(0);
const length = ref(1);
const route = useRoute();

const props = defineProps<{ onLoaded: () => void }>();

onMounted(() => {
  const tl = gsap
    .timeline({ paused: true, defaults: { ease: "none" } })
    .fromTo(".loader-bg", { yPercent: 0 }, { yPercent: 100, duration: 0.6 }, 0)
    .fromTo(".loader-frames", { y: "40rem" }, { y: "-48.5rem", duration: 1 }, 0)
    .fromTo(
      ".loader-frames img",
      { objectPosition: "50% 100%" },
      { objectPosition: "50% 0%", duration: 0.45, stagger: 0.15 },
      0
    )
    .fromTo(".loader-bg-two", { scaleY: 0 }, { scaleY: 1, duration: 0.4 }, 0.6)
    .fromTo(
      ".loader-count",
      { yPercent: 0 },
      { yPercent: 100, duration: 0.4 },
      0.6
    )
    .fromTo(
      ".loader-mainframe img",
      { scale: 1.2 },
      { scale: 1, duration: 0.4 },
      0.6
    );
  const images = srcs.map((src) => {
    const img = new Image();
    img.src = src;
    return img;
  });
  length.value = images.length;
  images.forEach((img, i) => {
    gsap.delayedCall(0.05 * i, () => {
      img.loading = "eager";
      if (img.clientHeight) {
        gsap.delayedCall(0.05 * Math.random() * i, () => {
          counter.value = counter.value + 1;
        });
        return;
      }
      const image = new Image();
      image.src = img.src;
      image.onload = () => {
        counter.value = counter.value + 1;
      };
    });
  });
  watch(counter, async () => {
    gsap.to(tl, { progress: counter.value / length.value });
    if (counter.value === images.length) {
      await gsap
        .timeline({ delay: 0.5 })
        .set(".loader .hero-heading ", { opacity: 1 })
        .set(".header-menu", { autoAlpha: 0 })
        .set(".loader", { clipPath: "inset(10rem 0% 0% 0%)" })
        .fromTo(
          ".header",
          { top: "-10rem" },
          { top: "0rem", duration: 1, ease: "power2.out" },
          0.5
        )
        .fromTo(
          ".loader .hero-heading i",
          { yPercent: 100 },
          {
            yPercent: 0,
            duration: 0.2,
            stagger: 0.1,
            ease: "power2.inOut",
          },
          0
        )
        .fromTo(
          ".loader-mainframe img",
          { scale: 1, opacity: 1, filter: "blur(0px)" },
          {
            scale: 0.7,
            // opacity: 0,
            filter: "blur(2)",
            duration: 1.4,
            ease: "power2.inOut",
          },
          0
        )
        .fromTo(
          ".loader-frames-wrapper",
          { y: "-50%", scale: 1, yPercent: 0 },
          {
            scale: innerWidth < 768 ? 2.5 : 5.5,
            y: "50%",
            yPercent: 275,
            duration: 1.2,
            ease: "power2.inOut",
          },
          0
        )
        .set(".header-menu", { autoAlpha: 1 })
        .set(".loader", { autoAlpha: 0 })
        .call(() => {
          document.querySelector(".app")!.classList.remove("preloading");
          props.onLoaded();
          window.lenis.scrollTo(0, { immediate: true });
        });
      return;
    }
  });
});
</script>
