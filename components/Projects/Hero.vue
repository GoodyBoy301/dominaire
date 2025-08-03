<template>
  <section class="projects-hero">
    <div class="projects-hero-header">
      <h1>projects</h1>
      <figure data-desktop>
        <video
          playsinline
          alt=""
          poster="/images/hero-shadow.webp"
          ref="video"
          autoplay="true"
          loop
          :class="{ playing: true }"
          :muted="true"
        >
          <source
            src="https://res.cloudinary.com/dllm7gfit/video/upload/v1750263487/Comp_5_lhaojm.mp4?t=6.01"
            type="video/mp4"
          />
        </video>
      </figure>
      <p>
        Featured projects that have been meticulously crafted with passion to
        drive results and impact
      </p>
      <div>
        <span>
          <i>01Websites</i>
          <i>02Brand</i>
          <i>04Product</i>
          <i>01Websites</i>
          <i>02Brand</i>
          <i>04Product</i>
        </span>
        <span>
          <i>01Websites</i>
          <i>02Brand</i>
          <i>04Product</i>
          <i>01Websites</i>
          <i>02Brand</i>
          <i>04Product</i>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const isHovering = ref(false);
</script>
