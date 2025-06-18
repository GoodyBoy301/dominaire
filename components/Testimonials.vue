<template>
  <section class="testimonials">
    <h2 class="testimonials-heading">
      <div>
        <span>
          Testimonials
          <i>stellar testimonials</i>
        </span>
        <span>
          Testimonials
          <i>stellar testimonials</i>
        </span>
        <span>
          Testimonials
          <i>stellar testimonials</i>
        </span>
      </div>
      <div>
        <span>
          Testimonials
          <i>stellar testimonials</i>
        </span>
        <span>
          Testimonials
          <i>stellar testimonials</i>
        </span>
        <span>
          Testimonials
          <i>stellar testimonials</i>
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
import { rem } from "~/utils/dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/src/all";
// import SvgoArrowRightDown from "~/assets/icons/a"

const tls: gsap.core.Timeline[] = [];

function onMouseEnter(e: MouseEvent, i: number) {
  tls[i]?.play();
}

function onMouseLeave(e: MouseEvent, i: number) {
  tls[i]?.reverse();
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  new SplitText(".testimonials-testimonials h4,.testimonials-testimonials h5", {
    type: "lines,chars",
    autoSplit: true,
    charsClass: "char",
    linesClass: "line",
  });

  new SplitText(".testimonials-testimonials p", {
    type: "lines",
    autoSplit: true,
    linesClass: "line",
  });

  const projects = document.querySelectorAll(".testimonials-testimonials li");
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
      { x: "-260vw", duration: 2 }
    )
    .to(".testimonials-testimonials", { x: 0, duration: 0.1 });
});
</script>
