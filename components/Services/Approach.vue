<template>
  <section class="services-approach">
    <div class="tags">
      <hr />
      <h4>Outcomes over outputs</h4>
      <p>
        Our work is guided by purpose, not deliverables. By focusing on what
        matters most, we ensure measurable progress and meaningful results.
      </p>
      <hr />
      <h4>Challenge assumptions</h4>
      <hr />
      <h5>fintech</h5>
      <hr />
      <h4>edtech</h4>
      <hr />
      <h5>real estate</h5>
      <hr />
    </div>
    <ul class="services-approach-list">
      <li>
        <h3>Our approach is grounded in co-creation, guided by principles</h3>
        <p>
          We create a unique identity for your brand, helping to set you apart
          from the competition.
        </p>
      </li>
      <li>
        <h3>Industries</h3>
        <p>
          We've worked with a wide array of industries and always eager to
          explore and innovate in new business domains.
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ScrollTrigger } from "gsap/src/all";
import gsap from "gsap/src/all";

onMounted(() => {
  // if (innerWidth >= 768) return;
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".services-approach",
        start: "100% 100%",
        end: `+=${innerWidth * 4}`,
        scrub: true,
        pin: true,
      },
    })
    .fromTo(
      ".services-approach-list li",
      {
        xPercent: 0,
      },
      {
        xPercent: -100,
        ease: "none",
      },
      0
    )
    .fromTo(
      ".services-approach .tags",
      {
        xPercent: 0,
      },
      {
        xPercent: -65,
        ease: "none",
      },
      0
    );
});
</script>
