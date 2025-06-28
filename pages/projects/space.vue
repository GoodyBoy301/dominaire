<template>
  <main class="page preloading" id="home">
    <ProjectsHero />
    <Projects :mode="mode" />
    <MiniFooter />
    <!-- <Hero />
    <About />
    <Stack />
    <Works />
    <Testimonials /> -->
  </main>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/src/all";

const mode = "space";
const tlx = ref(0);
const router = useRouter();

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  // const grid = gsap
  //   .timeline({ defaults: { ease: "none" }, paused: true })
  //   .fromTo(
  //     ".projects-projects li",
  //     {
  //       y: 0,
  //     },
  //     {
  //       y: "-58.7rem",
  //       duration: 10,
  //     },
  //     0
  //   );

  const space = gsap
    .timeline({ defaults: { ease: "none" }, paused: true })
    .fromTo(
      ".projects-projects ul",
      {
        "--angle": `-10deg`,
      },
      {
        "--angle": `-280deg`,
        duration: 10,
      },
      0
    )
    .set(
      ".projects-projects li:nth-of-type(1)",
      {
        zIndex: 1,
      },
      0
    )
    .set(
      ".projects-projects li:nth-of-type(2)",
      {
        zIndex: 0,
      },
      0
    )
    .set(
      ".projects-projects li:nth-of-type(3)",
      {
        zIndex: 0,
      },
      0
    )
    .set(
      ".projects-projects li:nth-of-type(4)",
      {
        zIndex: 1,
      },
      0
    )
    .set(
      ".projects-projects .shadow>div:nth-of-type(1)",
      {
        autoAlpha: 0,
      },
      2.9
    )
    .set(
      ".projects-projects .shadow>div:nth-of-type(2)",
      {
        autoAlpha: 1,
      },
      2.9
    )
    .set(
      ".projects-projects li:nth-of-type(1)",
      {
        zIndex: 1,
      },
      2.9
    )
    .set(
      ".projects-projects li:nth-of-type(2)",
      {
        zIndex: 1,
      },
      2.9
    )
    .set(
      ".projects-projects li:nth-of-type(3)",
      {
        zIndex: 0,
      },
      2.9
    )
    .set(
      ".projects-projects li:nth-of-type(4)",
      {
        zIndex: 0,
      },
      2.9
    )
    .set(
      ".projects-projects .shadow>div:nth-of-type(2)",
      {
        autoAlpha: 0,
      },
      6.3
    )
    .set(
      ".projects-projects .shadow>div:nth-of-type(3)",
      {
        autoAlpha: 1,
      },
      6.3
    )
    .set(
      ".projects-projects li:nth-of-type(1)",
      {
        zIndex: 0,
      },
      6.3
    )
    .set(
      ".projects-projects li:nth-of-type(2)",
      {
        zIndex: 1,
      },
      6.3
    )
    .set(
      ".projects-projects li:nth-of-type(3)",
      {
        zIndex: 1,
      },
      6.3
    )
    .set(
      ".projects-projects li:nth-of-type(4)",
      {
        zIndex: 0,
      },
      6.3
    )
    .set(
      ".projects-projects .shadow>div:nth-of-type(3)",
      {
        autoAlpha: 0,
      },
      9.7
    )
    .set(
      ".projects-projects .shadow>div:nth-of-type(4)",
      {
        autoAlpha: 1,
      },
      9.7
    )
    .to(
      ".projects-projects .line",
      {
        scaleY: 1,
        duration: 12.5,
      },
      0
    )
    .to(
      ".projects-projects",
      {
        autoAlpha: 1,
        duration: 2.5,
      },
      10
    );

  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".projects-projects ul",
        pin: true,
        scrub: true,
        start: "0% 0%",
        end: "500% 0%",
      },
      onUpdate: () => {
        tlx.value = tl.progress();
        space.progress(tl.progress());
      },
    })
    .fromTo(
      ".projects-projects",
      { opacity: 0.9 },
      { opacity: 1, ease: "none" },
      0
    );
});
</script>
