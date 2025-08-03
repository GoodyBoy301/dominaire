<template>
  <section class="about" id="about" @mouseleave="onMouseUp">
    <figure class="about-media">
      <video
        playsinline
        alt=""
        poster="/images/hero-shadow.webp"
        ref="video"
        autoplay="true"
        :class="{ playing: isPlaying }"
        :muted="isMuted"
        @ended="isPlaying = false"
        @click="
          {
            if (!isPlaying) {
              isPlaying = true;
            } else {
              isPlaying = false;
              video.currentTime = 0;
              video.load();
            }
          }
        "
      >
        <source
          src="https://res.cloudinary.com/dllm7gfit/video/upload/v1750263487/Comp_5_lhaojm.mp4?t=6.01"
          type="video/mp4"
        />
      </video>
      <span :style="{ '--x': x + 'px', '--y': y + 'px' }">
        <i :class="{ inactive: !isPlaying }"></i>
        {{ isPlaying ? "Stop Reel" : "Play Reel" }}
      </span>
    </figure>
    <div class="about-us">
      <hr />
      <h2>who we are</h2>
      <p>
        Culture-driven, creative and competitive. Our digital agency creates
        impact for brands. In the disciplines Websites, social media, content
        marketing, campaigning and branding. Between timeless and zeitgeist.
        When we communicate: Effectively. Quick witted. Ambitious.
      </p>
      <NuxtLink>learn more about us</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

const isPlaying = ref(true);
const isMuted = ref(true);
const currentTime = ref(0);
const totalTime = ref(0);
const video = ref<HTMLVideoElement>(null!);
const isSeeking = ref(false);

watch(isPlaying, () => {
  if (isPlaying.value) {
    video.value.play();
    window.lenis.scrollTo("#about", {
      // offset: rem(-10),
      onComplete: () => {
        window.lenis.stop();
        gsap.to(".header, .header-menu", {
          top: "-12rem",
          ease: "power1.in",
          duration: 0.5,
        });
      },
    });
  } else {
    video.value.pause();
    window.lenis.start();
  }
});

const x = ref(0);
const y = ref(0);
function onMouseMove(e: MouseEvent) {
  x.value = e.clientX;
  y.value = e.clientY;
}

function onMouseUp() {
  isSeeking.value = false;
}

const updateTime = () => {
  currentTime.value = video.value.currentTime;
  totalTime.value = video.value.duration;
  requestAnimationFrame(updateTime);
};

onMounted(() => {
  requestAnimationFrame(updateTime);
  window.onmousemove = onMouseMove;
  window.onpointermove = onMouseMove;
  x.value = innerWidth / 2;
  y.value = innerHeight / 2;

  gsap.registerPlugin(ScrollTrigger, SplitText);

  new SplitText(".about-us p", {
    type: "words,chars",
    charsClass: "char",
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".about",
        scrub: true,
        start: "0% -25%",
        end: "0% -125%",
      },
    })
    .fromTo(".about-us hr", { scaleX: 0 }, { scaleX: 1, duration: 1 }, 0)
    .fromTo(
      ".about-us h2",
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0, duration: 0.5 },
      0
    )
    .fromTo(
      ".about-us .char",
      { color: "#fff4" },
      { color: "#F5F1EE", duration: 0.1, delay: 0.5, stagger: { amount: 1 } },
      0
    )
    .fromTo(".about-us a", { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1.5);
});
</script>
