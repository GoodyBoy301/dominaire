<template>
  <footer class="footer">
    <h2 class="footer-heading">
      <div>
        <span>
          Ready to elevate your business?
          <i>Contact us</i>
          <NuxtLink href="/" target="_blank">
            hello@dominaireagency.com
          </NuxtLink>
        </span>
        <span data-desktop>
          Ready to elevate your business?
          <i>Contact us</i>
          <NuxtLink href="/" target="_blank">
            hello@dominaireagency.com
          </NuxtLink>
        </span>
        <span data-desktop>
          Ready to elevate your business?
          <i>Contact us</i>
          <NuxtLink href="/" target="_blank">
            hello@dominaireagency.com
          </NuxtLink>
        </span>
      </div>
      <div data-desktop>
        <span>
          Ready to elevate your business?
          <i>Contact us</i>
          <NuxtLink href="/" target="_blank">
            hello@dominaireagency.com
          </NuxtLink>
        </span>
        <span>
          Ready to elevate your business?
          <i>Contact us</i>
          <NuxtLink href="/" target="_blank">
            hello@dominaireagency.com
          </NuxtLink>
        </span>
        <span>
          Ready to elevate your business?
          <i>Contact us</i>
          <NuxtLink href="/" target="_blank">
            hello@dominaireagency.com
          </NuxtLink>
        </span>
      </div>
    </h2>
    <ul class="footer-footer">
      <div class="footer-footer-links">
        <NuxtLink
          href="/"
          @mousemove="(e:MouseEvent) => MouseMove(e, 11)"
          @mouseleave="(e:MouseEvent) => MouseLeave(11)"
          :style="{
            '--x': x11,
            '--y': y11,
          }"
        >
          <p>Home</p>
        </NuxtLink>
        <NuxtLink
          href="/"
          target="_blank"
          @mousemove="(e:MouseEvent) => MouseMove(e, 1)"
          @mouseleave="(e:MouseEvent) => MouseLeave(1)"
          :style="{
            '--x': x1,
            '--y': y1,
          }"
        >
          <p>x(twitter)</p>
        </NuxtLink>
        <NuxtLink
          href="/projects"
          @mousemove="(e:MouseEvent) => MouseMove(e, 22)"
          @mouseleave="(e:MouseEvent) => MouseLeave(22)"
          :style="{
            '--x': x22,
            '--y': y22,
          }"
        >
          <p href="/" target="_blank">Projects</p>
        </NuxtLink>
        <NuxtLink
          href="/"
          target="_blank"
          @mousemove="(e:MouseEvent) => MouseMove(e, 2)"
          @mouseleave="(e:MouseEvent) => MouseLeave(2)"
          :style="{
            '--x': x2,
            '--y': y2,
          }"
        >
          <p href="/" target="_blank">dribbble</p>
        </NuxtLink>
        <NuxtLink
          href="/about"
          @mousemove="(e:MouseEvent) => MouseMove(e, 33)"
          @mouseleave="(e:MouseEvent) => MouseLeave(33)"
          :style="{
            '--x': x33,
            '--y': y33,
          }"
        >
          <p href="/" target="_blank">about us</p>
        </NuxtLink>
        <NuxtLink
          href="/"
          target="_blank"
          @mousemove="(e:MouseEvent) => MouseMove(e, 3)"
          @mouseleave="(e:MouseEvent) => MouseLeave(3)"
          :style="{
            '--x': x3,
            '--y': y3,
          }"
        >
          <p href="/" target="_blank">awwwards</p>
        </NuxtLink>
        <NuxtLink
          href="/services"
          @mousemove="(e:MouseEvent) => MouseMove(e, 44)"
          @mouseleave="(e:MouseEvent) => MouseLeave(44)"
          :style="{
            '--x': x44,
            '--y': y44,
          }"
        >
          <p href="/" target="_blank">Services</p>
        </NuxtLink>
        <NuxtLink
          href="/"
          target="_blank"
          @mousemove="(e:MouseEvent) => MouseMove(e, 4)"
          @mouseleave="(e:MouseEvent) => MouseLeave(4)"
          :style="{
            '--x': x4,
            '--y': y4,
          }"
        >
          <p href="/" target="_blank">linkedin</p>
        </NuxtLink>
        <NuxtLink
          href="/contact"
          @mousemove="(e:MouseEvent) => MouseMove(e, 55)"
          @mouseleave="(e:MouseEvent) => MouseLeave(55)"
          :style="{
            '--x': x55,
            '--y': y55,
          }"
        >
          <p href="/" target="_blank">Contact</p>
        </NuxtLink>
        <NuxtLink
          href="/"
          target="_blank"
          @mousemove="(e:MouseEvent) => MouseMove(e, 5)"
          @mouseleave="(e:MouseEvent) => MouseLeave(5)"
          :style="{
            '--x': x5,
            '--y': y5,
          }"
        >
          <p href="/" target="_blank">instagram</p>
        </NuxtLink>
      </div>
      <form action="" class="footer-footer-form">
        <input type="text" placeholder="Enter name" />
        <input type="text" placeholder="Project name" />
        <input type="text" placeholder="Type of project" />
        <input type="text" placeholder="Budget" />
        <button>Schedule a call</button>
      </form>
      <div class="footer-footer-end">
        <h6>All rights reserved</h6>
        <NuxtLink href="/">credits</NuxtLink>
      </div>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const x1 = ref(0);
const x2 = ref(0);
const x3 = ref(0);
const x4 = ref(0);
const x5 = ref(0);
const x11 = ref(0);
const x22 = ref(0);
const x33 = ref(0);
const x44 = ref(0);
const x55 = ref(0);
const y1 = ref(0);
const y2 = ref(0);
const y3 = ref(0);
const y4 = ref(0);
const y5 = ref(0);
const y11 = ref(0);
const y22 = ref(0);
const y33 = ref(0);
const y44 = ref(0);
const y55 = ref(0);
const w1 = ref(1);
const w2 = ref(1);
const w3 = ref(1);
const w4 = ref(1);
const w5 = ref(1);
const w11 = ref(1);
const w22 = ref(1);
const w33 = ref(1);
const w44 = ref(1);
const w55 = ref(1);
const h1 = ref(1);
const h2 = ref(1);
const h3 = ref(1);
const h4 = ref(1);
const h5 = ref(1);
const h11 = ref(1);
const h22 = ref(1);
const h33 = ref(1);
const h44 = ref(1);
const h55 = ref(1);

const router = useRouter();

function MouseMove(e: MouseEvent, index: number) {
  if (index === 1) {
    x1.value = e.offsetX / w1.value - 0.5;
    y1.value = e.offsetY / h1.value - 0.5;
  }
  if (index === 11) {
    x11.value = e.offsetX / w11.value - 0.5;
    y11.value = e.offsetY / h11.value - 0.5;
  }
  if (index === 2) {
    x2.value = e.offsetX / w2.value - 0.5;
    y2.value = e.offsetY / h2.value - 0.5;
  }
  if (index === 22) {
    x22.value = e.offsetX / w22.value - 0.5;
    y22.value = e.offsetY / h22.value - 0.5;
  }
  if (index === 3) {
    x3.value = e.offsetX / w3.value - 0.5;
    y3.value = e.offsetY / h3.value - 0.5;
  }
  if (index === 33) {
    x33.value = e.offsetX / w33.value - 0.5;
    y33.value = e.offsetY / h33.value - 0.5;
  }
  if (index === 4) {
    x4.value = e.offsetX / w4.value - 0.5;
    y4.value = e.offsetY / h4.value - 0.5;
  }
  if (index === 44) {
    x44.value = e.offsetX / w44.value - 0.5;
    y44.value = e.offsetY / h44.value - 0.5;
  }
  if (index === 5) {
    x5.value = e.offsetX / w5.value - 0.5;
    y5.value = e.offsetY / h5.value - 0.5;
  }
  if (index === 55) {
    x55.value = e.offsetX / w55.value - 0.5;
    y55.value = e.offsetY / h55.value - 0.5;
  }
}

function MouseLeave(index: number) {
  if (index === 1) {
    x1.value = 0;
    y1.value = 0;
  }
  if (index === 11) {
    x11.value = 0;
    y11.value = 0;
  }
  if (index === 2) {
    x2.value = 0;
    y2.value = 0;
  }
  if (index === 22) {
    x22.value = 0;
    y22.value = 0;
  }
  if (index === 3) {
    x3.value = 0;
    y3.value = 0;
  }
  if (index === 33) {
    x33.value = 0;
    y33.value = 0;
  }
  if (index === 4) {
    x4.value = 0;
    y4.value = 0;
  }
  if (index === 44) {
    x44.value = 0;
    y44.value = 0;
  }
  if (index === 5) {
    x5.value = 0;
    y5.value = 0;
  }
  if (index === 55) {
    x55.value = 0;
    y55.value = 0;
  }
}

onMounted(() => {
  document.querySelectorAll(".footer-footer-links p").forEach((el, i) => {
    if (i === 0) {
      w11.value = el.getBoundingClientRect().width;
      h11.value = el.getBoundingClientRect().height;
    }
    if (i === 1) {
      w1.value = el.getBoundingClientRect().width;
      h1.value = el.getBoundingClientRect().height;
    }
    if (i === 2) {
      w22.value = el.getBoundingClientRect().width;
      h22.value = el.getBoundingClientRect().height;
    }
    if (i === 3) {
      w2.value = el.getBoundingClientRect().width;
      h2.value = el.getBoundingClientRect().height;
    }
    if (i === 4) {
      w33.value = el.getBoundingClientRect().width;
      h33.value = el.getBoundingClientRect().height;
    }
    if (i === 5) {
      w3.value = el.getBoundingClientRect().width;
      h3.value = el.getBoundingClientRect().height;
    }
    if (i === 6) {
      w44.value = el.getBoundingClientRect().width;
      h44.value = el.getBoundingClientRect().height;
    }
    if (i === 7) {
      w4.value = el.getBoundingClientRect().width;
      h4.value = el.getBoundingClientRect().height;
    }
    if (i === 8) {
      w55.value = el.getBoundingClientRect().width;
      h55.value = el.getBoundingClientRect().height;
    }
    if (i === 9) {
      w5.value = el.getBoundingClientRect().width;
      h5.value = el.getBoundingClientRect().height;
    }
  });
  gsap.registerPlugin(ScrollTrigger);

  if (innerWidth < 768) return;

  const tl = gsap
    .timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        invalidateOnRefresh: true,
        trigger: ".footer",
        scrub: true,
        start: "0% 0%",
        end: "50% 0%",
        pin: true,
      },
    })
    .fromTo(
      ".footer-footer",
      { xPercent: -100 },
      { xPercent: 0, duration: 0.125, delay: 0.2 }
    );
  watch(router.currentRoute, () => {
    tl.scrollTrigger?.refresh();
  });
});
</script>
