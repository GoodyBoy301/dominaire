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
        <p>Location</p>
        <p>London</p>
      </li>
      <li>
        <p>Started</p>
        <p>2025</p>
      </li>
      <li>
        <p>team members</p>
        <p>005</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ScrollTrigger } from "gsap/src/all";
import gsap from "gsap/src/all";
import SplitText from "gsap/src/SplitText";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
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
          width: "43.3rem",
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

  new SplitText(".about-stats-heading", {
    type: "words,chars",
    charsClass: "char",
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".about-stats",
        scrub: true,
        start: "0% 100%",
        end: "0% 40%",
      },
    })
    .fromTo(
      ".about-stats-heading .char",
      { color: "#fff4" },
      { color: "#F5F1EE", duration: 0.1, delay: 0.5, stagger: { amount: 1 } },
      0
    );
});
</script>
