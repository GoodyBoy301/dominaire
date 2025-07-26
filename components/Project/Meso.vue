<template>
  <section class="project-meso">
    <figure class="project-meso-bg">
      <img src="/images/project-003.webp" alt="" data-desktop />
      <img src="/images/project-003-mobile.webp" alt="" mobile />
    </figure>
    <h3>
      A metaphorical universe inspired by the beauty of nature and everything
      that makes it up. A tribute to the creativity of artists.
    </h3>
    <div>
      <p>
        The typography is inspired by the Art Nouveau style and releases organic
        and asymmetrical shapes found in nature. The finesse and refinement of
        this period brings a breath, a lightness to today's structured graphic
        world. Finally, the luminescent colour palette on a black background
        evokes a theatrical effect, just like the annual Grand Prix Gala.
      </p>
      <p>
        Like nature, the artistic world and the very essence of the creative
        process represent the living, the infinite, the perpetual movement.
        Creativity has no limits. It originates here, now, and at every moment.
        It amazes, arouses curiosity and brings us together.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap/src/all";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  new SplitText(".project-meso h3, .project-meso p", {
    type: "lines,words",
    autoSplit: true,
    charsClass: "char",
    wordsClass: "word",
    onSplit: () =>
      ScrollTrigger.create({
        trigger: ".project-meso",
        start: "25% 100%",
        end: "100% 100%",
        scrub: true,
        animation: gsap.timeline().fromTo(
          ".project-meso h3 .word, .project-meso p .word",
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
});
</script>
