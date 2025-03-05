<template>
  <div class="relative font-inter antialiased">
    <main class="relative flex flex-col justify-center overflow-hidden">
      <div class="w-full max-w-5xl mx-auto py-6 md:px-6">
        <div class="text-center">
          <div
            class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul
              class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              <li v-for="(logo, index) in repeatedLogos" :key="index">
                <img :src="logo.src" :alt="logo.alt" class="h-12 select-none" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const logos = [
  { src: new URL('@/assets/images/sponsors/1.png', import.meta.url).href, alt: 'atletaz' },
  { src: new URL('@/assets/images/sponsors/2.png', import.meta.url).href, alt: 'pashaholding' },
  { src: new URL('@/assets/images/sponsors/3.png', import.meta.url).href, alt: 'xalqbank' },
  { src: new URL('@/assets/images/sponsors/4.png', import.meta.url).href, alt: 'icarisigorta' },
  { src: new URL('@/assets/images/sponsors/5.png', import.meta.url).href, alt: 'qalasigorta' },
  { src: new URL('@/assets/images/sponsors/6.png', import.meta.url).href, alt: 'muganbank' },
  {
    src: new URL('@/assets/images/sponsors/7.png', import.meta.url).href,
    alt: 'merkezinefcilerxestexanasi',
  },
  { src: new URL('@/assets/images/sponsors/8.png', import.meta.url).href, alt: 'emgroupinsaat' },
]

const repeatedLogos = computed(() => [...logos, ...logos])
</script>

<style scoped>
@keyframes infinite-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-infinite-scroll {
  display: flex;
  animation: infinite-scroll 25s linear infinite;
}
</style>
