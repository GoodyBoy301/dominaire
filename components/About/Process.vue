<template>
  <section class="about-process">
    <div class="about-process-heading">
      <h2>Process</h2>
      <p>
        The objective here is to improve your image, position your brand,
        convert prospects, increase your visibility and optimize your
        communication.
      </p>
    </div>
    <ul class="about-process-list">
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
        trigger: ".about-process",
        start: "100% 100%",
        end: `+=${innerWidth * 1.25}`,
        scrub: true,
        pin: true,
      },
    })
    .fromTo(
      ".about-process-list li",
      {
        x: "0",
      },
      {
        x: innerWidth < 768 ? "-139rem" : "-176rem",
        ease: "none",
      }
    );
});
</script>
