<template>
  <header class="header" :class="{ active: isMenuOpen }">
    <NuxtLink href="/" class="header-logo"> Dominaire Agency </NuxtLink>
    <button
      class="header-hamburger"
      :class="{ active: isMenuOpen }"
      @click="isMenuOpen = !isMenuOpen"
    >
      {{ !isMenuOpen ? "MENU" : "CLOSE" }}
      <SvgoX data-mobile />
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
        <span> About Us </span>
      </NuxtLink>
      <NuxtLink href="/projects">
        <aside />
        <span> Projects </span>
      </NuxtLink>
      <NuxtLink href="/contact" data-mobile>
        <aside />
        <span> Contact Us </span>
      </NuxtLink>
      <div class="header-menu-contact" data-desktop>
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
        width: innerWidth < 768 ? "100vw" : "32.8rem",
        right: innerWidth < 768 ? "0rem" : "3.8rem",
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
        duration: 0.5,
        ease: "power1.out",
        stagger: 0.1,
      },
      0
    )
    .fromTo(
      ".header-hamburger",
      {
        background: "#F5F1EE00",
        color: "#F5F1EE",
        fontSize: "1.8rem",
        fontWeight: 800,
        borderColor: "#0000",
      },
      {
        background: "#F5F1EE",
        fontSize: "2.4rem",
        fontWeight: 400,
        borderColor: "#000",
        color: "#000000",
        duration: 0.5,
      },
      0
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
