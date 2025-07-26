<template>
  <header class="header" :class="{ active: isMenuOpen }">
    <NuxtLink href="/" class="header-logo"> Dominaire Agency </NuxtLink>
    <button class="header-hamburger" @click="isMenuOpen = !isMenuOpen">
      <span data-menu>
        <i>M</i>
        <i>E</i>
        <i>N</i>
        <i>U</i>
      </span>
      <span data-close>
        <i>C</i>
        <i>L</i>
        <i>O</i>
        <i>S</i>
        <i>E</i>
      </span>
    </button>
    <div class="header-menu">
      <NuxtLink href="/">
        <span> Home </span>
      </NuxtLink>
      <NuxtLink href="/services">
        <aside />
        <span> Services </span>
      </NuxtLink>
      <NuxtLink href="/about">
        <span> Studio </span>
      </NuxtLink>
      <NuxtLink href="/projects">
        <aside />
        <span> Projects </span>
      </NuxtLink>
      <div class="header-menu-contact">
        <div>
          <a href="" class="social">x(twitter)</a>
          <a href="" class="social">dribbble</a>
          <a href="" class="social">awwwards</a>
          <a href="" class="social">linkedin</a>
          <a href="" class="social">instagram</a>
          <NuxtLink href="/contact" class="link">Reach out to us</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);
import gsap from "gsap";

const router = useRouter();

onMounted(() => {
  const tl = gsap
    .timeline({ paused: true, defaults: { ease: "power1.inOut" } })
    .to(
      ".header-hamburger",
      {
        backgroundColor: "#F5F1EE",
        width: "32.8rem",
        right: "3.8rem",
        duration: 0.3,
      },
      0.1
    )
    .fromTo(
      ".header-menu",
      {
        autoAlpha: 1,
        xPercent: 100,
        background: "#F5F1EE",
        ease: "power1.out",
      },
      {
        autoAlpha: 1,
        xPercent: 0,
        background: "#F5F1EE",
        duration: 0.5,
        ease: "power1.out",
      },
      0
    )
    .fromTo(
      ".header-menu > a span",
      {
        autoAlpha: 1,
        yPercent: 100,
        ease: "power1.out",
      },
      {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.2,
        ease: "power1.out",
        stagger: 0.025,
      },
      0
    )
    .fromTo(
      ".header-hamburger",
      { background: "#F5F1EE00" },
      { background: "#F5F1EE", duration: 0.2, stagger: { amount: 0.07 } },
      0
    )
    .fromTo(
      ".header-hamburger [data-menu] i",
      { rotateX: "0deg" },
      { rotateX: "90deg", duration: 0.2, stagger: { amount: 0.07 } },
      0
    )
    .fromTo(
      ".header-hamburger [data-menu]",
      { scale: 1, opacity: 1 },
      { scale: 0.7, opacity: 0, duration: 0.2 },
      0
    )
    .fromTo(
      ".header-hamburger [data-close] i",
      { rotateX: "-90deg", y: 0 },
      {
        rotateX: "0deg",
        y: "-4.2rem",
        duration: 0.2,
        stagger: { amount: 0.1 },
      },
      0.1
    )
    .fromTo(
      ".header-hamburger [data-close]",
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 2, duration: 0.2 },
      0.1
    );

  tl.pause(0);

  watch(isMenuOpen, () => {
    if (isMenuOpen.value) {
      tl.play();
    } else {
      tl.reverse();
    }
  });

  watch(router.currentRoute, () => {
    isMenuOpen.value = false;
  });
});
</script>
