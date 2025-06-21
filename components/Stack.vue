<template>
  <section class="stack">
    <h2 class="stack-heading">
      <div>
        <span>
          what we do best
          <i>services</i>
        </span>
        <span>
          what we do best
          <i>services</i>
        </span>
        <span>
          what we do best
          <i>services</i>
        </span>
      </div>
      <div>
        <span>
          what we do best
          <i>services</i>
        </span>
        <span>
          what we do best
          <i>services</i>
        </span>
        <span>
          what we do best
          <i>services</i>
        </span>
      </div>
    </h2>
    <ul class="stack-stack">
      <li
        :style="{
          backgroundColor: '#E6E6E6',
          '--color': '#000',
          '--theme': '#D13B00',
        }"
      >
        <div>
          <h3>
            web design
            <i>UX Research</i>
            <i>UI Design</i>
          </h3>
          <p>
            We create modern and visually stunning websites that perfectly suit
            your needs.
          </p>
        </div>
      </li>
      <li
        :style="{
          backgroundColor: '#000',
          '--color': '#F5F1EE',
          '--theme': '#7D53BE',
        }"
      >
        <div>
          <h3 data-desktop>
            WEB DEVELOPMENT
            <i>Corporate site</i>
            <i>Blogs</i>
            <i>E-commerce</i>
          </h3>
          <h3 data-mobile>
            WEB DEV.
            <i>Corporate site</i>
            <i>Blogs</i>
            <i>E-commerce</i>
          </h3>
          <p>
            We build websites tailored to your business, ensuring they are fast,
            secure, and easy to use.
          </p>
        </div>
      </li>
      <li
        :style="{
          backgroundColor: '#E7204F',
          '--color': '#F5F1EE',
          '--theme': '#08627C',
        }"
      >
        <div>
          <h3>
            Marketing
            <i>SEO</i>
            <i>SOCIAL MEDIA ADS</i>
          </h3>
          <p>
            We help your website rank higher in search engine results, improving
            visibility and driving more traffic.
          </p>
        </div>
      </li>
      <li
        :style="{
          backgroundColor: '#E7FDE7',
          '--color': '#000000',
          '--theme': '#FCFF00',
        }"
      >
        <div>
          <h3>
            branding
            <i>Logos</i>
            <i>illustrations</i>
          </h3>
          <p>
            We create a unique identity for your brand, helping to set you apart
            from the competition.
          </p>
        </div>
      </li>
    </ul>
  </section>
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
        trigger: ".stack",
        scrub: true,
        start: "0% 0%",
        end: "0% -500%",
        pin: true,
      },
    })
    .fromTo(".stack-heading", { yPercent: 0 }, { yPercent: 0, duration: 0.125 })
    .fromTo(
      ".stack-stack li:nth-of-type(1)",
      { yPercent: 0 },
      { yPercent: -90, duration: 0.5 },
      0.125
    )
    .fromTo(
      ".stack-stack li:nth-of-type(2)",
      { yPercent: 0 },
      { yPercent: -90 * 2, duration: 1 },
      0.125
    )
    .fromTo(
      ".stack-stack li:nth-of-type(3)",
      { yPercent: 0 },
      { yPercent: -90 * 3, duration: 1.5 },
      0.125
    )
    .fromTo(
      ".stack-stack li:nth-of-type(4)",
      { yPercent: 0 },
      { yPercent: -90 * 4, duration: 2 },
      0.125
    )
    .fromTo(
      ".stack-stack li:nth-of-type(1) p",
      { yPercent: 100 * 1, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.5 },
      0.125
    )
    .fromTo(
      ".stack-stack li:nth-of-type(1) h3",
      { yPercent: 50 * 1 },
      { yPercent: 0, duration: 0.5 },
      0.125
    )
    .fromTo(
      ".stack-stack li:nth-of-type(2) p",
      { yPercent: 100 * 2, opacity: 0 },
      { yPercent: 0 * 2, opacity: 1, duration: 1 },
      0.125
    )
    .fromTo(
      ".stack-stack li:nth-of-type(2) h3",
      { yPercent: 50 * 2, opacity: 0 },
      { yPercent: 0 * 2, duration: 1, opacity: 1 },
      0.125
    )
    .fromTo(
      ".stack-stack li:nth-of-type(3) p",
      { yPercent: 100 * 3, opacity: 0 },
      { yPercent: 0 * 3, opacity: 1, duration: 1.5 },
      0.125
    )
    .fromTo(
      ".stack-stack li:nth-of-type(3) h3",
      { yPercent: 50 * 3, opacity: 0 },
      { yPercent: 0 * 3, duration: 1.5, opacity: 1 },
      0.125
    )
    .fromTo(
      ".stack-stack li:nth-of-type(4) p",
      { yPercent: 100 * 4, opacity: 0 },
      { yPercent: 0 * 4, opacity: 1, duration: 2 },
      0.125
    )
    .fromTo(
      ".stack-stack li:nth-of-type(4) h3",
      { yPercent: 50 * 4, opacity: 0 },
      { yPercent: 0 * 4, duration: 2, opacity: 1 },
      0.125
    )
    .to(".stack-stack li:nth-of-type(4)", { x: 0, duration: 0.1 });
});
</script>
