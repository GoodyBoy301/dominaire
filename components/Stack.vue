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
      <li :style="{ backgroundColor: '#E6E6E6', '--color': '#000', '--theme': '#D13B00' }">
        <div>
          <h3>
            web design
            <i>UX Research</i>
            <i>UI Design</i>
          </h3>
          <p>We create modern and visually stunning websites that perfectly suit your needs.</p>
        </div>
      </li>
      <li :style="{ backgroundColor: '#000', '--color': '#F5F1EE', '--theme': '#7D53BE' }">
        <div>
          <h3>
            WEB DEVELOPMENT
            <i>Corporate site</i>
            <i>Blogs</i>
            <i>E-commerce</i>
          </h3>
          <p>We build websites tailored to your business, ensuring they are fast, secure, and easy to use.</p>
        </div>
      </li>
      <li :style="{ backgroundColor: '#E7204F', '--color': '#F5F1EE', '--theme': '#08627C' }">
        <div>
          <h3>
            Marketing
            <i>SEO</i>
            <i>SOCIAL MEDIA ADS</i>
          </h3>
          <p>We help your website rank higher in search engine results, improving visibility and driving more traffic.</p>
        </div>
      </li>
      <li :style="{ backgroundColor: '#E7FDE7', '--color': '#000000', '--theme': '#FCFF00' }">
        <div>
          <h3>
            branding
            <i>Logos</i>
            <i>illustrations</i>
          </h3>
          <p>We create a unique identity for your brand, helping to set you apart from the competition.</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap
    .timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: ".stack",
        scrub: true,
        start: "0% 5%",
        end: "0% -500%",
        pin: true,
      },
    })
    .fromTo(".stack-heading", { yPercent: 0 }, { yPercent: 0, duration: 0.125 })
    .fromTo(".stack-stack li:nth-of-type(1)", { yPercent: 0 }, { yPercent: -95, duration: 0.5 }, 0.125)
    .fromTo(".stack-stack li:nth-of-type(2)", { yPercent: 0 }, { yPercent: -95 * 2, duration: 1 }, 0.125)
    .fromTo(".stack-stack li:nth-of-type(3)", { yPercent: 0 }, { yPercent: -95 * 3, duration: 1.5 }, 0.125)
    .fromTo(".stack-stack li:nth-of-type(4)", { yPercent: 0 }, { yPercent: -95 * 4, duration: 2 }, 0.125)
})
</script>
