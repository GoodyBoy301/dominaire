<template>
  <section class="services-approach">
    <h2 class="services-approach-heading">
      Our approach is grounded in co-creation, guided by principles
    </h2>
    <div class="services-approach-track">
      <div class="services-approach-tracker"></div>
    </div>
    <ul class="services-approach-list">
      <li>
        <h4>01</h4>
        <h3>Do great work</h3>
        <p>
          We create a unique identity for your brand, helping to set you apart
          from the competition.
        </p>
      </li>
      <li>
        <h4>02</h4>
        <h3>Chase knowledge</h3>
        <p>
          We are curious about the world around us and are committed students of
          our clients’ endeavors.
        </p>
      </li>
      <li>
        <h4>03</h4>
        <h3>Exceed expectations</h3>
        <p>
          We strive to become masters of our craft and exceed our clients’
          expectations through a dedication to innovation and execution.
        </p>
      </li>
      <li>
        <h4>04</h4>
        <h3>Embrace change</h3>
        <p>
          We cherish every opportunity to learn, adapt, and improve individually
          and as a team.
        </p>
      </li>
      <li>
        <h4>05</h4>
        <h3>Excel together</h3>
        <p>
          Our ability to collaborate and trust one another drives our success.
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ScrollTrigger } from "gsap/src/all";
import gsap from "gsap/src/all";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".services-approach",
        start: "100% 100%",
        end: `+=${innerWidth * 1.25}`,
        scrub: true,
        pin: true,
      },
    })
    .fromTo(
      ".services-approach-list li",
      {
        x: "0",
      },
      {
        x: innerWidth < 768 ? "-139rem" : "-215rem",
        ease: "none",
      },
      0
    )
    .fromTo(
      ".services-approach-tracker",
      {
        x: "0",
      },
      {
        x: innerWidth < 768 ? "24rem" : "83.7rem",
        ease: "none",
      },
      0
    );
});
</script>
