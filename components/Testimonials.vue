<template>
  <section class="testimonials">
    <h2 class="testimonials-heading">
      <div>
        <span>
          Testimonials
          <i>word of mouth</i>
        </span>
        <span>
          Testimonials
          <i>word of mouth</i>
        </span>
        <span>
          Testimonials
          <i>word of mouth</i>
        </span>
      </div>
      <div>
        <span>
          Testimonials
          <i>word of mouth</i>
        </span>
        <span>
          Testimonials
          <i>word of mouth</i>
        </span>
        <span>
          Testimonials
          <i>word of mouth</i>
        </span>
      </div>
    </h2>
    <ul class="testimonials-testimonials">
      <h3>words from our clients</h3>
      <li>
        <div>
          <h4>Pulse Poetry</h4>
          <p>
            Our mission is to empower the brands we believe in with tailor-made
            approaches that ignite creativity and growth without limits.
          </p>
          <h5>olanrewaju KB</h5>
          <h6>Marketing and comms</h6>
        </div>
      </li>
      <li>
        <div>
          <h4>Pulse Poetry</h4>
          <p>
            Our mission is to empower the brands we believe in with tailor-made
            approaches that ignite creativity and growth without limits.
          </p>
          <h5>olanrewaju KB</h5>
          <h6>Marketing and comms</h6>
        </div>
      </li>
      <li>
        <div>
          <h4>Pulse Poetry</h4>
          <p>
            Our mission is to empower the brands we believe in with tailor-made
            approaches that ignite creativity and growth without limits.
          </p>
          <h5>olanrewaju KB</h5>
          <h6>Marketing and comms</h6>
        </div>
      </li>
      <li>
        <div>
          <h4>Pulse Poetry</h4>
          <p>
            Our mission is to empower the brands we believe in with tailor-made
            approaches that ignite creativity and growth without limits.
          </p>
          <h5>olanrewaju KB</h5>
          <h6>Marketing and comms</h6>
        </div>
      </li>
      <li>
        <div>
          <h4>Pulse Poetry</h4>
          <p>
            Our mission is to empower the brands we believe in with tailor-made
            approaches that ignite creativity and growth without limits.
          </p>
          <h5>olanrewaju KB</h5>
          <h6>Marketing and comms</h6>
        </div>
      </li>
      <li>
        <div>
          <h4>Pulse Poetry</h4>
          <p>
            Our mission is to empower the brands we believe in with tailor-made
            approaches that ignite creativity and growth without limits.
          </p>
          <h5>olanrewaju KB</h5>
          <h6>Marketing and comms</h6>
        </div>
      </li>
      <li>
        <div>
          <h4>Pulse Poetry</h4>
          <p>
            Our mission is to empower the brands we believe in with tailor-made
            approaches that ignite creativity and growth without limits.
          </p>
          <h5>olanrewaju KB</h5>
          <h6>Marketing and comms</h6>
        </div>
      </li>
      <li>
        <div>
          <h4>Pulse Poetry</h4>
          <p>
            Our mission is to empower the brands we believe in with tailor-made
            approaches that ignite creativity and growth without limits.
          </p>
          <h5>olanrewaju KB</h5>
          <h6>Marketing and comms</h6>
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
        trigger: ".testimonials",
        scrub: true,
        start: "0% 0%",
        end: "0% -500%",
        pin: true,
      },
    })
    .fromTo(
      ".testimonials-heading",
      { yPercent: 0 },
      { yPercent: 0, duration: 0.125 }
    )
    .fromTo(
      ".testimonials-testimonials",
      { y: 0 },
      { y: "-46.68rem", duration: 0.5 }
    )
    .fromTo(
      ".testimonials-testimonials li",
      { x: 0 },
      { x: innerWidth < 768 ? "-300vw" : "-260vw", duration: 2 }
    )
    .to(".testimonials-testimonials", { x: 0, duration: 0.1 });
});
</script>
