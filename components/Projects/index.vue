<template>
  <section class="projects-projects">
    <ul
      :class="{
        grid: mode === 'grid',
        list: mode === 'list',
        space: mode === 'space',
      }"
    >
      <li>
        <figure>
          <img src="/images/works-001-cover.webp" alt="" />
        </figure>
      </li>
      <li>
        <figure>
          <img src="/images/works-002-cover.webp" alt="" />
        </figure>
      </li>
      <li>
        <figure>
          <img src="/images/works-003-cover.webp" alt="" />
        </figure>
      </li>
      <li>
        <figure>
          <img src="/images/works-004-cover.webp" alt="" />
        </figure>
      </li>
      <div
        class="tracker"
        :class="{
          grid: mode === 'grid',
          list: mode === 'list',
          space: mode === 'space',
        }"
      >
        <div class="line"></div>
      </div>
      <div
        class="shadow"
        :class="{
          grid: mode === 'grid',
          list: mode === 'list',
          space: mode === 'space',
        }"
      >
        <div>
          <img src="/images/works-001.webp" alt="" />
          <h2 class="title">Pulse Poetry</h2>
          <p class="description">
            Digital advertising agency focused on mobile app user acquisition.
          </p>
          <p class="year">2025</p>
          <div class="tags">
            <span>Website design</span>
            <hr />
            <span>Marketiing</span>
          </div>
          <NuxtLink href=""> ////visit website//// </NuxtLink>
        </div>
        <div>
          <img src="/images/works-002.webp" alt="" />
          <h2 class="title">KILMANJAROO aROMA</h2>
          <p class="description">
            Digital advertising agency focused on mobile app user acquisition.
          </p>
          <p class="year">2025</p>
          <div class="tags">
            <span>Website design</span>
            <hr />
            <span>Marketiing</span>
          </div>
          <NuxtLink href=""> ////visit website//// </NuxtLink>
        </div>
        <div>
          <img src="/images/works-003.webp" alt="" />
          <h2 class="title">COVAPAY</h2>
          <p class="description">
            The goal of Covapay is to bridge the gap between traditional payment
            methods and modern digital solutions, making it easier for small
            businesses to adapt to changing consumer preferences and
            technological advancements.
          </p>
          <p class="year">2025</p>
          <div class="tags">
            <span>Website design</span>
            <hr />
            <span>Product Design</span>
          </div>
          <NuxtLink href=""> ////visit website//// </NuxtLink>
        </div>
        <div>
          <img src="/images/works-004.webp" alt="" />
          <h2 class="title">TARA</h2>
          <p class="description">
            The goal of Covapay is to bridge the gap between traditional payment
            methods and modern digital solutions, making it easier for small
            businesses to adapt to changing consumer preferences and
            technological advancements.
          </p>
          <p class="year">2025</p>
          <div class="tags">
            <span>Website design</span>
            <hr />
            <span>Product Design</span>
          </div>
          <NuxtLink href=""> ////visit website//// </NuxtLink>
        </div>
      </div>
    </ul>
    <aside>
      <NuxtLink href="/projects/grid">
        <div :class="{ active: props.mode === 'grid' }">
          <SvgoGrid filled />
          Grid
        </div>
      </NuxtLink>
      <NuxtLink href="/projects/list">
        <div :class="{ active: props.mode === 'list' }">
          <SvgoList filled />
          List
        </div>
      </NuxtLink>
      <NuxtLink href="/projects/space">
        <div :class="{ active: props.mode === 'space' }">
          <SvgoSpace filled />
          In space
        </div>
      </NuxtLink>
    </aside>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ mode: string }>();
</script>
