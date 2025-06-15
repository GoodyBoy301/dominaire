<template>
  <section class="works">
    <h2 class="works-heading">
      <div>
        <span>
          Latest Projects
          <i>stellar works</i>
        </span>
        <span>
          Latest Projects
          <i>stellar works</i>
        </span>
        <span>
          Latest Projects
          <i>stellar works</i>
        </span>
      </div>
      <div>
        <span>
          Latest Projects
          <i>stellar works</i>
        </span>
        <span>
          Latest Projects
          <i>stellar works</i>
        </span>
        <span>
          Latest Projects
          <i>stellar works</i>
        </span>
      </div>
    </h2>
    <ul class="works-works">
      <li
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        :style="{
          backgroundColor: '#E6E6E6',
          '--color': '#000',
          '--theme': '#D13B00',
        }"
      >
        <div>
          <figure>
            <img src="/images/works-001.webp" alt="" />
            <div></div>
          </figure>
          <!-- <h3>
            web design
            <i>UX Research</i>
            <i>UI Design</i>
          </h3> -->
          <h4>Pulse poetry</h4>
          <p>
            We create modern and visually stunning websites that perfectly suit
            your needs.
          </p>
        </div>
      </li>
      <li
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        :style="{
          backgroundColor: '#000',
          '--color': '#F5F1EE',
          '--theme': '#7D53BE',
        }"
      >
        <div>
          <figure>
            <img src="/images/works-002.webp" alt="" />
            <div></div>
          </figure>
          <!-- <h3>
            WEB DEVELOPMENT
            <i>Corporate site</i>
            <i>Blogs</i>
            <i>E-commerce</i>
          </h3> -->
          <h4>Kilmanjaro aroma</h4>
          <p>
            We build websites tailored to your business, ensuring they are fast,
            secure, and easy to use.
          </p>
        </div>
      </li>
      <li
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        :style="{
          backgroundColor: '#E7204F',
          '--color': '#F5F1EE',
          '--theme': '#08627C',
        }"
      >
        <div>
          <figure>
            <img src="/images/works-003.webp" alt="" />
            <div></div>
          </figure>
          <!-- <h3>
            Marketing
            <i>SEO</i>
            <i>SOCIAL MEDIA ADS</i>
          </h3> -->
          <h4>Covapay</h4>
          <p>
            We help your website rank higher in search engine results, improving
            visibility and driving more traffic.
          </p>
        </div>
      </li>
      <li
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
        :style="{
          backgroundColor: '#E7FDE7',
          '--color': '#000000',
          '--theme': '#FCFF00',
        }"
      >
        <div>
          <figure>
            <img src="/images/works-004.webp" alt="" />
            <div></div>
          </figure>
          <!-- <h3>
            branding
            <i>Logos</i>
            <i>illustrations</i>
          </h3> -->
          <h4>Yesibid</h4>
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
import { rem } from "~/utils/dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/src/all";

function onMouseEnter(e: MouseEvent) {
  const target = e.target as HTMLElement;

  gsap
    .timeline()
    .set(target.querySelector("h4"), { opacity: 1 })
    .to(target.querySelectorAll("h4 .char"), {
      yPercent: -100,
      stagger: 0.01,
    });
}

function onMouseLeave(e: MouseEvent) {
  const target = e.target as HTMLElement;

  gsap
    .timeline()
    .to(target.querySelectorAll("h4 .char"), {
      yPercent: 0,
      stagger: -0.01,
    })
    .set(target.querySelector("h4"), { opacity: 1 });
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  new SplitText(".works-works h4", {
    type: "lines,chars",
    autoSplit: true,
    charsClass: "char",
    linesClass: "line",
  });

  gsap
    .timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: ".works",
        scrub: true,
        start: "0% 0%",
        end: "0% -500%",
        pin: true,
      },
    })
    .fromTo(".works-heading", { yPercent: 0 }, { yPercent: 0, duration: 0.125 })
    .fromTo(".works-works", { y: 0 }, { y: "-49.68rem", duration: 0.5 })
    .fromTo(".works-works li", { x: 0 }, { x: "-300vw", duration: 2 })
    .to(".works-works", { x: 0, duration: 0.1 });
});
</script>
