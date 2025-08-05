<template>
  <section class="services-stack">
    <ul class="services-stack-list">
      <li>
        <h3>branding</h3>
        <p>
          We create a unique identity for your brand, helping to set you apart
          from the competition.
        </p>
        <div class="tags">
          <i>illustrations</i>
          <i>brand guidelines</i>
          <i>art direction</i>
          <i>brand assets</i>
          <i>Logos</i>
          <i>illustrator</i>
          <i>after effects</i>
          <i>figma</i>
        </div>
        <div class="medias">
          <figure>
            <img src="/images/works-001.webp" alt="" />
          </figure>
          <figure>
            <img src="/images/works-001-cover.webp" alt="" />
          </figure>
        </div>
      </li>
      <li>
        <h3>Web Development</h3>
        <p>
          We create a unique identity for your brand, helping to set you apart
          from the competition.
        </p>
        <div class="tags">
          <i>Blogs</i>
          <i>E-commerce</i>
          <i>Corporate site</i>
        </div>
        <div class="medias">
          <figure>
            <img src="/images/works-002.webp" alt="" />
          </figure>
          <figure>
            <img src="/images/works-002-cover.webp" alt="" />
          </figure>
        </div>
      </li>
      <li>
        <h3>Web Design</h3>
        <p>
          We create a unique identity for your brand, helping to set you apart
          from the competition.
        </p>
        <div class="tags">
          <i>illustrations</i>
          <i>brand guidelines</i>
          <i>art direction</i>
          <i>brand assets</i>
          <i>Logos</i>
          <i>illustrator</i>
          <i>after effects</i>
          <i>figma</i>
        </div>
        <div class="medias">
          <figure>
            <img src="/images/works-003.webp" alt="" />
          </figure>
          <figure>
            <img src="/images/works-003-cover.webp" alt="" />
          </figure>
        </div>
      </li>
      <li>
        <h3>SEO</h3>
        <p>
          We create a unique identity for your brand, helping to set you apart
          from the competition.
        </p>
        <div class="tags">
          <i>Blogs</i>
          <i>E-commerce</i>
          <i>Corporate site</i>
        </div>
        <div class="medias">
          <figure>
            <img src="/images/works-004.webp" alt="" />
          </figure>
          <figure>
            <img src="/images/works-004-cover.webp" alt="" />
          </figure>
        </div>
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
        trigger: ".services-stack",
        start: "100% 100%",
        end: `+=${innerWidth * 4}`,
        scrub: true,
        pin: true,
      },
    })
    .fromTo(
      ".services-stack-list li",
      {
        xPercent: 0,
      },
      {
        xPercent: -300,
        ease: "none",
      }
    );
});
</script>
