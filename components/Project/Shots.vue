<template>
  <section class="project-shots">
    <div>
      <h3>The idea behind the concept</h3>
      <h4>
        To illustrate Montréal's artistic richness, the depth and inclusiveness
        of the topics covered by the 8 finalists as well as the colourful,
        festive and surprising of their proposals.
      </h4>
    </div>
    <ul>
      <li>
        <img src="/images/project-004.webp" alt="" />
      </li>
      <li>
        <img src="/images/project-005.webp" alt="" />
      </li>
      <li>
        <img src="/images/project-004.webp" alt="" />
      </li>
      <li>
        <img src="/images/project-005.webp" alt="" />
      </li>
      <li>
        <img src="/images/project-004.webp" alt="" />
      </li>
      <li>
        <img src="/images/project-005.webp" alt="" />
      </li>
      <li>
        <img src="/images/project-004.webp" alt="" />
      </li>
      <li>
        <img src="/images/project-005.webp" alt="" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap/src/all";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  new SplitText(".project-shots h3, .project-shots h4", {
    type: "lines,words",
    autoSplit: true,
    charsClass: "char",
    wordsClass: "word",
    onSplit: () =>
      ScrollTrigger.create({
        trigger: ".project-shots",
        start: "0% 100%",
        end: "35% 100%",
        scrub: true,
        animation: gsap.timeline().fromTo(
          ".project-shots h4 .word, .project-shots h3 .word",
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            stagger: { amount: 2 },
            ease: "none",
          }
        ),
      }),
  });

  const firstElBounds = document
    .querySelector(".project-shots li:first-of-type")
    ?.getBoundingClientRect();
  const lastElBounds = document
    .querySelector(".project-shots li:last-of-type")
    ?.getBoundingClientRect();

  ScrollTrigger.create({
    trigger: ".project-shots",
    start: "100% 100%",
    end: "200% 100%",
    pin: true,
    scrub: true,
    animation: gsap.timeline().to(".project-shots li", {
      x:
        ((lastElBounds?.x || 1) -
          innerWidth +
          (lastElBounds?.width || 0) +
          (firstElBounds?.x || 0)) *
        -1,
      ease: "none",
    }),
  });
});
</script>
