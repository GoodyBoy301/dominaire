<template>
  <section class="services-stack">
    <ul class="services-stack-list">
      <div class="notlast">
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
      </div>
      <div class="notlast">
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
      </div>
      <div class="notlast">
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
      </div>
      <div class="">
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
        trigger: ".services-stack",
        start: "-20% 100%",
        end: `100% 100%`,
        scrub: true,
      },
    })
    .to(
      ".services-stack-list > div",
      {
        yPercent: 0,
        stagger: 0.25,
        duration: 0.5,
        ease: "none",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      0
    )
    // .fromTo(
    //   ".services-stack-list > div li",
    //   {
    //     scale: 0.6,
    //     rotate: "5deg",
    //     xPercent: -7.5,
    //   },
    //   {
    //     stagger: 0.25,
    //     duration: 0.5,
    //     xPercent: 0,
    //     ease: "none",
    //     scale: 1,
    //     rotate: "0deg",
    //   },
    //   "<"
    // )
    .to(
      ".services-stack-list .notlast",
      {
        yPercent: -20,
        stagger: 0.25,
        duration: 0.25,
        ease: "none",
        clipPath: "polygon(0% 0%, 100% 0%, 88.5% 86%, 6% 85.5%)",
        immediateRender: false,
      },
      0.5
    );
});
</script>
