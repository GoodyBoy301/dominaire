<template>
  <section class="about-clients">
    <div class="about-clients-heading">
      <h2>our Clients/projects</h2>
    </div>
    <ul class="about-clients-list">
      <div>
        <li>
          <figure>
            <img src="/images/works-001.webp" alt="" />
            <div></div>
          </figure>
          <h4>Pulse poetry</h4>
          <p>clients</p>
        </li>
        <li>
          <figure>
            <img src="/images/works-002.webp" alt="" />
            <div></div>
          </figure>
          <p>clients</p>
          <h4>Kilimanjaro</h4>
        </li>
        <li>
          <figure>
            <img src="/images/works-003.webp" alt="" />
            <div></div>
          </figure>
          <h4>Covapay</h4>
          <p>clients</p>
        </li>
        <li>
          <figure>
            <img src="/images/works-004.webp" alt="" />
            <div></div>
          </figure>
          <p>clients</p>
          <h4>Yesibid</h4>
        </li>
      </div>
      <div>
        <li>
          <figure>
            <img src="/images/works-001.webp" alt="" />
            <div></div>
          </figure>
          <h4>Pulse poetry</h4>
          <p>clients</p>
        </li>
        <li>
          <figure>
            <img src="/images/works-002.webp" alt="" />
            <div></div>
          </figure>
          <p>clients</p>
          <h4>Kilimanjaro</h4>
        </li>
        <li>
          <figure>
            <img src="/images/works-003.webp" alt="" />
            <div></div>
          </figure>
          <h4>Covapay</h4>
          <p>clients</p>
        </li>
        <li>
          <figure>
            <img src="/images/works-004.webp" alt="" />
            <div></div>
          </figure>
          <p>clients</p>
          <h4>Yesibid</h4>
        </li>
      </div>
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
        trigger: ".about-clients",
        start: "0% 100%",
        end: `100% 100%`,
        scrub: true,
      },
    })
    .to(".about-clients-list", {
      scale: 1,
      ease: "power4.in",
    });
  gsap.fromTo(
    ".about-clients-list div",
    {
      xPercent: 0,
    },
    {
      xPercent: -100,
      ease: "none",
      duration: 5,
      repeat: -1,
    }
  );
});
</script>
