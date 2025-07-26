<template>
  <section class="project-intro">
    <h3>
      To design a bold, creative and unifying visual identity for the 38th Grand
      Prix of the Conseil des arts de Montréal - a signature event that brings
      together the entire cultural and business community around the importance
      of local artistic vitality.
    </h3>
    <div>
      <p>
        The campaign includes the driving concept and visual signature of the
        event as well as all its advertising, digital and scenographic
        applications. A true tribute to local creators and organizations, this
        38th edition takes the form of an annual gala where they are rewarded,
        as well as a contest in which Montrealers are invited to vote for their
        favourite artistic proposal (Télé-Québec People's Choice Award).
      </p>
      <p>
        Highlighting the year's promising artistic projects in various
        disciplines (Indigenous arts, circus arts, digital arts, visual arts,
        dance, music, theatre and multidisciplinary sectors), the list of 8
        finalists paints an impressive portrait of the quality of the arts
        organizations that help define Montreal today.
      </p>
    </div>
    <ul>
      <li>
        <img src="/images/project-001.webp" alt="" />
      </li>
      <li>
        <img src="/images/project-002.webp" alt="" />
      </li>
      <li>
        <img src="/images/project-001.webp" alt="" />
      </li>
      <li>
        <img src="/images/project-002.webp" alt="" />
      </li>
      <li>
        <img src="/images/project-001.webp" alt="" />
      </li>
      <li>
        <img src="/images/project-002.webp" alt="" />
      </li>
      <li>
        <img src="/images/project-001.webp" alt="" />
      </li>
      <li>
        <img src="/images/project-002.webp" alt="" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap/src/all";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  new SplitText(".project-intro h3, .project-intro p", {
    type: "lines,words",
    autoSplit: true,
    charsClass: "char",
    wordsClass: "word",
    onSplit: () =>
      ScrollTrigger.create({
        trigger: ".project-intro",
        start: "0% 100%",
        end: "100% 100%",
        scrub: true,
        animation: gsap.timeline().fromTo(
          ".project-intro h3 .word, .project-intro p .word",
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            stagger: { amount: 2 },
            ease: "none",
          }
        ),
      }),
  });

  const firstElBounds = document
    .querySelector(".project-intro li:first-of-type")
    ?.getBoundingClientRect();
  const lastElBounds = document
    .querySelector(".project-intro li:last-of-type")
    ?.getBoundingClientRect();

  ScrollTrigger.create({
    trigger: ".project-intro",
    start: "100% 100%",
    end: "200% 100%",
    pin: true,
    scrub: true,
    animation: gsap.timeline().to(".project-intro li", {
      x:
        ((lastElBounds?.x || 1) -
          innerWidth +
          (lastElBounds?.width || 0) +
          (firstElBounds?.x || 0)) *
        -1,
      ease: "none",
    }),
  });
});
</script>
