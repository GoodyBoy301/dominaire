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

const mode = "grid";
const tlx = ref(0);
const router = useRouter();
</script>
