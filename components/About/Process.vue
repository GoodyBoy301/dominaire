<template>
  <section class="about-process">
    <div class="about-process-heading">
      <h2>our creative process</h2>
      <p>
        The objective here is to improve your image, position your brand,
        convert prospects, increase your visibility and optimize your
        communication.
      </p>
    </div>
    <ul class="about-process-list">
      <li>
        <img src="/images/process-001.svg" alt="" />
        <hr />
        <h3>DISCOVER YOUR ESSENCE</h3>
        <p>
          We begin by uncovering the soul of your brand, starting with who you
          are, what you stand for, and what sets you apart. This phase involves
          research, workshops, and insight-driven exploration to define a clear
          creative direction.
        </p>
      </li>
      <li>
        <img src="/images/process-002.svg" alt="" />
        <hr />
        <h3>STRATEGIZE & CONCEPTUALIZE</h3>
        <p>
          We translate your essence into strategic concepts. Through moodboards,
          style guides, and creative frameworks, we lay the foundation for
          design decisions that are rooted in clarity and purpose.
        </p>
      </li>
      <li>
        <img src="/images/process-003.svg" alt="" />
        <hr />
        <h3>DESIGN WITH PURPOSE</h3>
        <p>
          We craft bold, thoughtful designs that reflect your identity and
          resonate with your audience. Every color, shape, and type choice is
          intentional — built to elevate your message and spark connection.
        </p>
      </li>
      <li>
        <img src="/images/process-004.svg" alt="" />
        <hr />
        <h3>REFINE & DELIVER</h3>
        <p>
          With your feedback, we fine-tune the work into final, polished assets.
          From brand guidelines to digital rollouts, we ensure everything is
          cohesive, scalable, and ready to make an impact in the real world.
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
        xPercent: (i) => 240 + 80 * i,
      },
      {
        xPercent: 0,
        // stagger: (i) => 0.1 * i,
        duration: (i) => 0.35 + 0.1166666667 * i,
        ease: "none",
      }
    );
});
</script>
