<template>
  <section class="hero">
    <h1
      class="hero-heading"
      :class="{ active: isHovering }"
      @mouseenter="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <span data-red>
        <i data-delay="1">Innovative</i> <i data-delay="2"> Brands,</i></span
      >
      <span data-white>
        <i data-delay="3">Limitless </i> <i data-delay="4">Creativity</i></span
      >
    </h1>
    <div class="hero-shadow" :class="{ active: isHovering }">
      <div>
        <span data-one>
          <aside />
          <i> we are dominaire agency </i>
          <i> we are dominaire agency </i>
        </span>
        <span data-one>
          <aside />
          <i> we are dominaire agency </i>
          <i> we are dominaire agency </i>
        </span>
      </div>
      <div>
        <span data-two>
          <i> we are builders </i>
          <SvgoStar />
          <i> THIS IS WHO WE ARE </i>
          <SvgoStar />
        </span>
        <span data-two>
          <i> we are builders </i>
          <SvgoStar />
          <i> THIS IS WHO WE ARE </i>
          <SvgoStar />
        </span>
      </div>
      <div>
        <span data-three>
          <i> THIS IS What WE do </i>
          <img src="/images/hero-001.webp" alt="" />
          <i> THIS IS What WE do </i>
          <img src="/images/hero-002.webp" alt="" />
          <i> THIS IS What WE do </i>
          <img src="/images/hero-003.webp" alt="" />
          <i> THIS IS What WE do </i>
          <img src="/images/hero-004.webp" alt="" />
        </span>
        <span data-three>
          <i> THIS IS What WE do </i>
          <img src="/images/hero-001.webp" alt="" />
          <i> THIS IS What WE do </i>
          <img src="/images/hero-002.webp" alt="" />
          <i> THIS IS What WE do </i>
          <img src="/images/hero-003.webp" alt="" />
          <i> THIS IS What WE do </i>
          <img src="/images/hero-004.webp" alt="" />
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const isHovering = ref(false);
</script>
