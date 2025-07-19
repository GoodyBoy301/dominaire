<template>
  <section class="about-stats">
    <h2 class="about-stats-heading">
      We aim to create true expressions of brands that leave a lasting
      impression. We exist at the intersection of brand and technology using
      insight, strategy and creativity to drive innovation and brand
      transformation.
    </h2>
    <ul class="about-stats-list">
      <li>
        <h3>2024</h3>
        <h5>started</h5>
      </li>
      <li>
        <h4>100</h4>
        <p>clients</p>
      </li>
      <li>
        <h4>001</h4>
        <p>team members</p>
      </li>
      <li>
        <h4>london</h4>
        <p>country</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ScrollTrigger } from "gsap/src/all";
import gsap from "gsap/src/all";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  if (innerWidth >= 768) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about-stats",
          start: "100% 100%",
          end: `+=${innerWidth * 1.5}`,
          scrub: true,
          pin: true,
        },
      })
      .fromTo(
        ".about-stats-list li",
        {
          width: "136rem",
        },
        {
          width: "32rem",
          stagger: 0.45,
          ease: "none",
        }
      );
  } else {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about-stats",
          start: "100% 100%",
          end: `+=${innerWidth * 3}`,
          scrub: true,
          pin: true,
        },
      })
      .fromTo(
        ".about-stats-list li",
        {
          x: "0",
        },
        {
          x: "-95rem",
          ease: "none",
        }
      );
  }
});
</script>
