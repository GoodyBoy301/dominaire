<template>
  <section class="about">
    <figure class="about-media">
      <img src="/images/hero-shadow.webp" alt="" />
    </figure>
    <div class="about-us">
      <hr />
      <h2>who we are</h2>
      <p>
        Culture-driven, creative and competitive. Our digital agency creates impact for brands. In the disciplines Websites,
        social media, content marketing, campaigning and branding. Between timeless and zeitgeist. When we communicate:
        Effectively. Quick witted. Ambitious.
      </p>
      <NuxtLink>learn more about us</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText)

  new SplitText(".about-us p", { type: "words,chars", autoSplit: true, charsClass: "char" })

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".about",
        scrub: true,
        start: "0% 100%",
        end: "0% 0%",
      },
    })
    .fromTo(".about-media", { scale: 0 }, { scale: 1 })

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".about",
        scrub: true,
        start: "0% 0%",
        end: "0% -100%",
      },
    })
    .fromTo(".about-us hr", { scaleX: 0 }, { scaleX: 1, duration: 1 }, 0)
    .fromTo(".about-us h2", { opacity: 0, yPercent: 100 }, { opacity: 1, yPercent: 0, duration: 0.5 }, 0)
    .fromTo(".about-us .char", { color: "#fff4" }, { color: "#F5F1EE", duration: 0.1, delay: 0.5, stagger: { amount: 1 } }, 0)
    .fromTo(".about-us a", { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.5)
})
</script>
