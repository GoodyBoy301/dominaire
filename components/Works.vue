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
        @mouseenter="(e) => onMouseEnter(e, 0)"
        @mouseleave="(e) => onMouseLeave(e, 0)"
        :style="{
          backgroundColor: '#E6E6E6',
          '--color': '#000000',
          '--bg': '#76EB5F',
        }"
      >
        <div>
          <figure>
            <img src="/images/works-001.webp" alt="" />
            <div></div>
          </figure>
          <h4>Pulse poetry</h4>
          <h5>Pulse poetry</h5>
          <p>
            Pulse Poetry is your sanctuary for all things poetic, where every
            word finds a place and every voice is celebrated.
          </p>
          <i> website design </i>
          <h6>2024</h6>
          <NuxtLink href="/" target="_blank">
            <span> view project</span>
            <SvgoArrowDownRight />
          </NuxtLink>
        </div>
      </li>
      <li
        @mouseenter="(e) => onMouseEnter(e, 1)"
        @mouseleave="(e) => onMouseLeave(e, 1)"
        :style="{
          backgroundColor: '#000',
          '--color': '#FFFFFF',
          '--bg': '#D13B00',
        }"
      >
        <div>
          <figure>
            <img src="/images/works-002.webp" alt="" />
            <div></div>
          </figure>
          <h4>Kilmanjaro aroma</h4>
          <h5>Kilmanjaro aroma</h5>
          <p>
            Grown in the heart of Tanzania, our premium coffee beans deliver a
            bold, luxurious taste that awakens your senses and connects you to
            the land where coffee thrives.
          </p>
          <i> website design </i>
          <h6>2025</h6>
          <NuxtLink href="/" target="_blank">
            <span> view project</span>
            <SvgoArrowDownRight />
          </NuxtLink>
        </div>
      </li>
      <li
        @mouseenter="(e) => onMouseEnter(e, 2)"
        @mouseleave="(e) => onMouseLeave(e, 2)"
        :style="{
          backgroundColor: '#E7204F',
          '--color': '#FFFFFF',
          '--bg': '#D13B00',
        }"
      >
        <div>
          <figure>
            <img src="/images/works-003.webp" alt="" />
            <div></div>
          </figure>
          <h4>Covapay</h4>
          <h5>Covapay</h5>
          <p>
            The goal of Covapay is to bridge the gap between traditional payment
            methods and modern digital solutions, making it easier for small
            businesses to adapt to changing consumer preferences and
            technological advancements.
          </p>
          <i> website design </i>
          <h6>2023</h6>
          <NuxtLink href="/" target="_blank">
            <span> view project</span>
            <SvgoArrowDownRight />
          </NuxtLink>
        </div>
      </li>
      <li
        @mouseenter="(e) => onMouseEnter(e, 3)"
        @mouseleave="(e) => onMouseLeave(e, 3)"
        :style="{
          backgroundColor: '#E7FDE7',
          '--color': '#000000',
          '--bg': '#E6E6E6',
        }"
      >
        <div>
          <figure>
            <img src="/images/works-004.webp" alt="" />
            <div></div>
          </figure>
          <h4>Yesibid</h4>
          <h5>Yesibid</h5>
          <p>
            YesIBid is a next-generation vehicle auction platform designed for
            transparency, speed, and intelligent bidding starting in Africa,
          </p>
          <i> webapp </i>
          <i> branding </i>
          <h6>2025</h6>
          <NuxtLink href="/" target="_blank">
            <span> view project</span>
            <SvgoArrowDownRight />
          </NuxtLink>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/src/all";

const tls: gsap.core.Timeline[] = [];

function onMouseEnter(e: MouseEvent, i: number) {
  if (innerWidth < 768) return;
  tls[i]?.play();
}

function onMouseLeave(e: MouseEvent, i: number) {
  if (innerWidth < 768) return;
  tls[i]?.reverse();
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  new SplitText(".works-works h4,.works-works h5", {
    type: "lines,chars",
    autoSplit: true,
    charsClass: "char",
    linesClass: "line",
  });

  new SplitText(".works-works p", {
    type: "lines",
    autoSplit: true,
    linesClass: "line",
  });

  const projects = document.querySelectorAll(".works-works li");
  projects.forEach((project) => {
    tls.push(
      gsap
        .timeline({ paused: true })
        .set(project.querySelector("h4"), { opacity: 1 }, 0)
        .to(
          project.querySelectorAll("h4 .char"),
          {
            yPercent: -100,
            stagger: 0.01,
          },
          0
        )
        .set(project.querySelector("p"), { opacity: 1 }, 0)
        .to(
          project.querySelectorAll("p .line"),
          {
            clipPath: "inset(0% 0% 0% 0%)",
            yPercent: -100,
            stagger: 0.01,
          },
          0
        )
        .to(
          project.querySelectorAll("h5 .char"),
          {
            yPercent: 100,
          },
          0
        )
        .to(
          project.querySelector("h5"),
          { opacity: 0, filter: "blur(2rem)" },
          0
        )
    );
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
