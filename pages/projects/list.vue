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

const mode = "list";
const tlx = ref(0);
const router = useRouter();

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const list = gsap
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
    .fromTo(
      ".projects-projects .shadow > div",
      {
        yPercent: 0,
      },
      { yPercent: 100, duration: 2.5 + 0.625, stagger: 2.5 + 0.625 },
      0
    )
    .fromTo(
      ".projects-projects li",
      {
        yPercent: 0,
      },
      { yPercent: -300, duration: 10 },
      0
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
        duration: 1.25,
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
        list.progress(tl.progress());
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
