<template>
  <footer class="footer">
    <h2 class="footer-heading">
      <div>
        <span>
          Ready to elevate your business?
          <i>Contact us</i>
          <NuxtLink href="/" target="_blank">
            hello@dominaireagency.com
          </NuxtLink>
        </span>
        <span>
          Ready to elevate your business?
          <i>Contact us</i>
          <NuxtLink href="/" target="_blank">
            hello@dominaireagency.com
          </NuxtLink>
        </span>
        <span>
          Ready to elevate your business?
          <i>Contact us</i>
          <NuxtLink href="/" target="_blank">
            hello@dominaireagency.com
          </NuxtLink>
        </span>
      </div>
      <div>
        <span>
          Ready to elevate your business?
          <i>Contact us</i>
          <NuxtLink href="/" target="_blank">
            hello@dominaireagency.com
          </NuxtLink>
        </span>
        <span>
          Ready to elevate your business?
          <i>Contact us</i>
          <NuxtLink href="/" target="_blank">
            hello@dominaireagency.com
          </NuxtLink>
        </span>
        <span>
          Ready to elevate your business?
          <i>Contact us</i>
          <NuxtLink href="/" target="_blank">
            hello@dominaireagency.com
          </NuxtLink>
        </span>
      </div>
    </h2>
    <ul class="footer-footer">
      <div class="footer-footer-links">
        <p><NuxtLink href="/" target="_blank">x(twitter)</NuxtLink></p>
        <p><NuxtLink href="/" target="_blank">dribbble</NuxtLink></p>
        <p><NuxtLink href="/" target="_blank">awwwards</NuxtLink></p>
        <p><NuxtLink href="/" target="_blank">linkedin</NuxtLink></p>
        <p><NuxtLink href="/" target="_blank">instagram</NuxtLink></p>
      </div>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: ".footer",
        scrub: true,
        start: "0% 0%",
        end: "50% 0%",
        pin: true,
        markers: true,
      },
    })
    .fromTo(
      ".footer-footer",
      { xPercent: -100 },
      { xPercent: 0, duration: 0.125, delay: 0.2 }
    );
});
</script>
