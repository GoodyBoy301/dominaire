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
        <figure :class="layout">
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
          <img src="/images/works-001.webp" alt="" :class="layout" />
          <h2 class="title">Pulse Poetry</h2>
          <p class="description">
            Digital advertising agency focused on mobile app user acquisition.
          </p>
          <p class="year">2025</p>
          <div class="tags" :class="layout">
            <span>Website design</span>
            <hr />
            <span>Marketiing</span>
          </div>
          <NuxtLink href="" :class="layout"> ////visit website//// </NuxtLink>
        </div>
        <div>
          <img src="/images/works-002.webp" alt="" :class="layout" />
          <h2 class="title">KILMANJAROO aROMA</h2>
          <p class="description">
            Digital advertising agency focused on mobile app user acquisition.
          </p>
          <p class="year">2025</p>
          <div class="tags" :class="layout">
            <span>Website design</span>
            <hr />
            <span>Marketiing</span>
          </div>
          <NuxtLink href="" :class="layout"> ////visit website//// </NuxtLink>
        </div>
        <div>
          <img src="/images/works-003.webp" alt="" :class="layout" />
          <h2 class="title">COVAPAY</h2>
          <p class="description">
            The goal of Covapay is to bridge the gap between traditional payment
            methods and modern digital solutions, making it easier for small
            businesses to adapt to changing consumer preferences and
            technological advancements.
          </p>
          <p class="year">2025</p>
          <div class="tags" :class="layout">
            <span>Website design</span>
            <hr />
            <span>Product Design</span>
          </div>
          <NuxtLink href="" :class="layout"> ////visit website//// </NuxtLink>
        </div>
        <div>
          <img src="/images/works-004.webp" alt="" :class="layout" />
          <h2 class="title">TARA</h2>
          <p class="description">
            The goal of Covapay is to bridge the gap between traditional payment
            methods and modern digital solutions, making it easier for small
            businesses to adapt to changing consumer preferences and
            technological advancements.
          </p>
          <p class="year">2025</p>
          <div class="tags" :class="layout">
            <span>Website design</span>
            <hr />
            <span>Product Design</span>
          </div>
          <NuxtLink href="" :class="layout"> ////visit website//// </NuxtLink>
        </div>
      </div>
    </ul>
    <aside>
      <div :class="{ active: layout === 'grid' }" @click="openGrid">
        <SvgoGrid filled />
        Grid
      </div>
      <div :class="{ active: layout === 'list' }" @click="openList">
        <SvgoList filled />
        List
      </div>
      <div :class="{ active: layout === 'space' }" @click="openSpace">
        <SvgoSpace filled />
        In space
      </div>
    </aside>
    <div class="projects-projects-cover" data-lenis-prevent></div>
    <div class="projects-projects-bg" data-lenis-prevent></div>
    <div class="projects-projects-fg" data-lenis-prevent>
      <div class="bgs">
        <div :class="layout">
          <figure data-animate>
            <img src="/images/works-004.webp" alt="" :class="layout" />
          </figure>
          <div :class="layout">
            <div class="foot" :class="layout">
              <h2 class="title">TARA</h2>
              <p class="description">
                The goal of Covapay is to bridge the gap between traditional
                payment methods and modern digital solutions, making it easier
                for small businesses to adapt to changing consumer preferences
                and technological advancements.
              </p>
              <NuxtLink href="" :class="layout">
                ////visit website////
              </NuxtLink>
            </div>
            <p class="year" :class="layout">2025</p>
            <div class="tags" :class="layout">
              <span>Website design</span>
              <hr />
              <span>Product Design</span>
            </div>
          </div>
        </div>
        <div :class="layout">
          <figure data-animate>
            <img src="/images/works-003.webp" alt="" :class="layout" />
          </figure>

          <div :class="layout">
            <div class="foot" :class="layout">
              <h2 class="title">KILMANJAROO aROMA</h2>
              <p class="description">
                Digital advertising agency focused on mobile app user
                acquisition.
              </p>
              <NuxtLink href="" :class="layout">
                ////visit website////
              </NuxtLink>
            </div>
            <p class="year" :class="layout">2025</p>
            <div class="tags" :class="layout">
              <span>Website design</span>
              <hr />
              <span>Marketiing</span>
            </div>
          </div>
        </div>
        <div :class="layout">
          <figure data-animate>
            <img src="/images/works-002.webp" alt="" :class="layout" />
          </figure>

          <div :class="layout">
            <div class="foot" :class="layout">
              <h2 class="title">Pulse Poetry</h2>
              <p class="description">
                Digital advertising agency focused on mobile app user
                acquisition.
              </p>
              <NuxtLink href="" :class="layout">
                ////visit website////
              </NuxtLink>
            </div>
            <p class="year" :class="layout">2025</p>
            <div class="tags" :class="layout">
              <span>Website design</span>
              <hr />
              <span>Marketiing</span>
            </div>
          </div>
        </div>
        <div :class="layout">
          <figure data-animate>
            <img src="/images/works-001.webp" alt="" :class="layout" />
          </figure>

          <div :class="layout">
            <div class="foot" :class="layout">
              <h2 class="title">COVAPAY</h2>
              <p class="description">
                The goal of Covapay is to bridge the gap between traditional
                payment methods and modern digital solutions, making it easier
                for small businesses to adapt to changing consumer preferences
                and technological advancements.
              </p>
              <NuxtLink href="" :class="layout">
                ////visit website////
              </NuxtLink>
            </div>
            <p class="year" :class="layout">2025</p>
            <div class="tags" :class="layout">
              <span>Website design</span>
              <hr />
              <span>Product Design</span>
            </div>
          </div>
        </div>

        <div :class="layout">
          <figure data-animate>
            <img src="/images/works-004.webp" alt="" :class="layout" />
          </figure>
          <div :class="layout">
            <div class="foot" :class="layout">
              <h2 class="title">TARA</h2>
              <p class="description">
                The goal of Covapay is to bridge the gap between traditional
                payment methods and modern digital solutions, making it easier
                for small businesses to adapt to changing consumer preferences
                and technological advancements.
              </p>
              <NuxtLink href="" :class="layout">
                ////visit website////
              </NuxtLink>
            </div>
            <p class="year" :class="layout">2025</p>
            <div class="tags" :class="layout">
              <span>Website design</span>
              <hr />
              <span>Product Design</span>
            </div>
          </div>
        </div>
        <div :class="layout">
          <figure data-animate>
            <img src="/images/works-003.webp" alt="" :class="layout" />
          </figure>

          <div :class="layout">
            <div class="foot" :class="layout">
              <h2 class="title">KILMANJAROO aROMA</h2>
              <p class="description">
                Digital advertising agency focused on mobile app user
                acquisition.
              </p>
              <NuxtLink href="" :class="layout">
                ////visit website////
              </NuxtLink>
            </div>
            <p class="year" :class="layout">2025</p>
            <div class="tags" :class="layout">
              <span>Website design</span>
              <hr />
              <span>Marketiing</span>
            </div>
          </div>
        </div>
        <div :class="layout">
          <figure data-animate>
            <img src="/images/works-002.webp" alt="" :class="layout" />
          </figure>

          <div :class="layout">
            <div class="foot" :class="layout">
              <h2 class="title">Pulse Poetry</h2>
              <p class="description">
                Digital advertising agency focused on mobile app user
                acquisition.
              </p>
              <NuxtLink href="" :class="layout">
                ////visit website////
              </NuxtLink>
            </div>
            <p class="year" :class="layout">2025</p>
            <div class="tags" :class="layout">
              <span>Website design</span>
              <hr />
              <span>Marketiing</span>
            </div>
          </div>
        </div>
        <div :class="layout">
          <figure data-animate>
            <img src="/images/works-001.webp" alt="" :class="layout" />
          </figure>

          <div :class="layout">
            <div class="foot" :class="layout">
              <h2 class="title">COVAPAY</h2>
              <p class="description">
                The goal of Covapay is to bridge the gap between traditional
                payment methods and modern digital solutions, making it easier
                for small businesses to adapt to changing consumer preferences
                and technological advancements.
              </p>
              <NuxtLink href="" :class="layout">
                ////visit website////
              </NuxtLink>
            </div>
            <p class="year" :class="layout">2025</p>
            <div class="tags" :class="layout">
              <span>Website design</span>
              <hr />
              <span>Product Design</span>
            </div>
          </div>
        </div>
      </div>
      <div class="fgs" :class="layout">
        <figure class="first notlast one" :class="layout" data-animate>
          <img src="/images/works-004-cover.webp" alt="" />
        </figure>
        <figure class="notfirst notlast one" :class="layout" data-animate>
          <img src="/images/works-003-cover.webp" alt="" />
        </figure>
        <figure class="notfirst notlast one" :class="layout" data-animate>
          <img src="/images/works-002-cover.webp" alt="" />
        </figure>
        <figure class="notfirst notlast one" :class="layout" data-animate>
          <img src="/images/works-001-cover.webp" alt="" />
        </figure>
        <figure class="notfirst notlast two" :class="layout">
          <img src="/images/works-004-cover.webp" alt="" />
        </figure>
        <figure class="notfirst notlast two" :class="layout">
          <img src="/images/works-003-cover.webp" alt="" />
        </figure>
        <figure class="notfirst notlast two" :class="layout">
          <img src="/images/works-002-cover.webp" alt="" />
        </figure>
        <figure class="notfirst last two" :class="layout">
          <img src="/images/works-001-cover.webp" alt="" />
        </figure>
      </div>
      <div class="shade" :class="layout"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Draggable } from "gsap/all";
import { Observer } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap/src/all";
const layout = ref<"grid" | "list" | "space">("grid");

let fullScreenAnimation = gsap.timeline({
  paused: true,
  defaults: { ease: "power1.inOut" },
});
const createFullScreenAnimation = () => {
  fullScreenAnimation
    .set(".projects-projects-cover", { autoAlpha: 1 })
    .fromTo(".projects-projects-cover", { yPercent: 100 }, { yPercent: 0 })
    .set(".projects-projects-bg", { autoAlpha: 1 })
    .set(".projects-projects-fg", { autoAlpha: 1 })
    .fromTo(".projects-projects-cover", { yPercent: 0 }, { yPercent: -100 });
};

let listAnimation = gsap.timeline({
  paused: true,
  duration: 4,
  repeat: -1,
  defaults: { ease: "power1.inOut" },
});
const createListAnimation = () => {
  listAnimation
    .fromTo(
      ".projects-projects-fg .bgs figure",
      { "--yPercent": 0 },
      { "--yPercent": -100, duration: 0.5, stagger: -0.5 },
      0
    )
    .fromTo(
      ".projects-projects-fg .bgs figure img",
      { filter: "blur(2.5rem)" },
      { filter: "blur(0rem)", duration: 0.5, stagger: -0.5 },
      0
    )
    .fromTo(
      ".projects-projects-fg .fgs figure",
      { "--yPercent": 0 },
      {
        "--yPercent": -100,
        duration: 0.5,
        stagger: -0.5,
      },
      0
    )
    .set(
      ".projects-projects-fg .fgs figure:nth-of-type(3),.projects-projects-fg .fgs figure:nth-of-type(7)",
      {
        "--index": 4,
      },
      0.875
    )
    .set(
      ".projects-projects-fg .fgs figure:nth-of-type(3),.projects-projects-fg .fgs figure:nth-of-type(7)",
      {
        "--index": 4,
      },
      2.875
    )
    .set(
      ".projects-projects-fg .fgs figure:nth-of-type(4),.projects-projects-fg .fgs figure:nth-of-type(8)",
      {
        "--index": 4,
      },
      0.875
    )
    // .set(
    //   ".projects-projects-fg .fgs figure:nth-of-type(4),.projects-projects-fg .fgs figure:nth-of-type(8)",
    //   {
    //     "--index": 4,
    //   },
    //   2.875
    // )
    .set(
      ".projects-projects-fg .fgs figure:nth-of-type(3),.projects-projects-fg .fgs figure:nth-of-type(7)",
      {
        "--index": 5,
      },
      1.375
    )
    .set(
      ".projects-projects-fg .fgs figure:nth-of-type(3),.projects-projects-fg .fgs figure:nth-of-type(7)",
      {
        "--index": 5,
      },
      3.375
    )
    .set(
      ".projects-projects-fg .fgs figure:nth-of-type(4),.projects-projects-fg .fgs figure:nth-of-type(8)",
      {
        "--index": 0,
      },
      1.375
    )
    .set(
      ".projects-projects-fg .fgs figure:nth-of-type(4),.projects-projects-fg .fgs figure:nth-of-type(8)",
      {
        "--index": 0,
      },
      3.375
    )
    .set(
      ".projects-projects-fg .fgs figure:nth-of-type(2),.projects-projects-fg .fgs figure:nth-of-type(6)",
      {
        "--index": 6,
      },
      1.375
    )
    .set(
      ".projects-projects-fg .fgs figure:nth-of-type(2),.projects-projects-fg .fgs figure:nth-of-type(6)",
      {
        "--index": 6,
      },
      3.375
    )
    .set(
      ".projects-projects-fg .fgs figure:nth-of-type(2),.projects-projects-fg .fgs figure:nth-of-type(6)",
      {
        "--index": 6,
      },
      1.872
    )
    .set(
      ".projects-projects-fg .fgs figure:nth-of-type(2),.projects-projects-fg .fgs figure:nth-of-type(6)",
      {
        "--index": 6,
      },
      3.872
    )
    .fromTo(
      ".projects-projects-fg",
      { "--rotateY": 0 },
      {
        "--rotateY": -360,
        ease: "none",
        duration: 4,
      },
      0
    )
    .fromTo(
      ".projects-projects-fg .bgs .year",
      { yPercent: 0, clipPath: "inset(0% 0% 0% 0%)" },
      {
        yPercent: -100,
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 0.5,
        // delay: 0.2,
        stagger: -0.5,
      },
      0
    )
    .fromTo(
      ".projects-projects-fg .bgs .tags",
      { yPercent: 0, clipPath: "inset(0% 0% 0% 0%)" },
      {
        yPercent: -100,
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 0.5,
        stagger: -0.5,
      },
      0
    )
    .fromTo(
      ".projects-projects-fg .bgs .foot",
      { autoAlpha: 1 },
      {
        autoAlpha: -10,
        duration: 0.5,
        stagger: -0.5,
      },
      0
    );
};

let scroll: number | null;

function openGrid() {
  gsap.to(listAnimation, {
    progress:
      listAnimation.progress() < 0.25
        ? 0
        : listAnimation.progress() < 0.75
        ? 0.5
        : 1,
    duration: 2,
  });
  if (scroll) window.lenis.scrollTo(scroll, { immediate: true });
  scroll = null;
  fullScreenAnimation.reverse();
  layout.value = "grid";
}
function openList() {
  gsap.set(listAnimation, {
    progress:
      listAnimation.progress() < 0.25
        ? 0
        : listAnimation.progress() < 0.75
        ? 0.5
        : 1,
  });
  // createListAnimation();
  if (!scroll) scroll = window.lenis.scroll;
  fullScreenAnimation.play();
  layout.value = "list";
}
function openSpace() {
  gsap.set(listAnimation, {
    progress:
      listAnimation.progress() < 0.25
        ? 0 + 0.10514999999776482
        : listAnimation.progress() < 0.75
        ? 0 + 0.10514999999776482
        : 0 + 0.10514999999776482,
  });
  // listAnimation.revert();
  // listAnimation.kill();
  if (!scroll) scroll = window.lenis.scroll;
  fullScreenAnimation.play();
  layout.value = "space";
}

async function Scroll(e: Observer) {
  const _progress = listAnimation.progress();
  const _offset = 0.00005 * e.deltaY;
  const progress =
    _progress > 0.5
      ? _progress - 0.5
      : _progress <= 0
      ? _progress + 0.5
      : _progress;
  console.log(progress + _offset);
  gsap.set(listAnimation, {
    progress: progress + _offset,
  });
}

function createInfiniteScroll() {
  Observer.create({
    target: ".projects-projects-fg",
    onWheel: async (e) => {
      e.event.preventDefault();
      await Scroll(e);
    },
  });
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, Observer);
  createFullScreenAnimation();
  createListAnimation();
  createInfiniteScroll();
});
</script>
