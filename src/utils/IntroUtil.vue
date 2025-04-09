<template>
  <!-- Hero Section -->
  <section class="relative w-full overflow-hidden">
    <!-- Background Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 z-0"></div>
    
    <!-- Background Image -->
    <img 
      src="@/assets/images/intro/intro.jpg" 
      alt="Travel background"
      class="absolute inset-0 w-full h-full object-cover object-center z-0"
      loading="lazy"
    >

    <!-- Swiper Container -->
    <div class="container mx-auto my-12 px-4 py-12 md:py-20 relative z-10">
      <swiper
        :autoplay="{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }"
        :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
        :pagination="{ clickable: true, dynamicBullets: true, renderBullet: renderCustomBullet }"
        :loop="true"
        :effect="'creative'"
        :creative-effect="{
          prev: { shadow: false, translate: ['-20%', 0, -1] },
          next: { translate: ['100%', 0, 0] }
        }"
        :modules="modules"
        :breakpoints="swiperBreakpoints"
        class="w-full rounded-xl md:rounded-2xl shadow-2xl"
      >
        <!-- Slides -->
        <swiper-slide
          v-for="(slide, index) in slides"
          :key="index"
          class="relative overflow-hidden"
        >
          <div class="flex flex-col lg:flex-row items-center justify-between bg-white/90 backdrop-blur-sm p-6 md:p-10 lg:p-12 min-h-[400px] md:min-h-[500px]">
            <!-- Content -->
            <div class="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 md:space-y-6 lg:space-y-8 max-w-xl lg:max-w-2xl lg:pr-10">
              <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                {{ slide.title }}
              </h1>
              
              <p class="text-base md:text-lg lg:text-xl text-gray-700">
                {{ slide.description }}
              </p>
              
              <div class="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
                <RouterLink
                  to="/how-can-i-get-visa"
                  class="px-5 py-2.5 md:px-6 md:py-3 border-2 border-primary rounded-full text-primary font-medium transition-all hover:bg-primary hover:text-white active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Daha Fazla Bilgi →
                </RouterLink>
                
                <RouterLink
                  to="/order-visa"
                  class="px-5 py-2.5 md:px-6 md:py-3 bg-primary text-white rounded-full font-medium flex items-center justify-center transition-all hover:bg-primary-dark active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  {{ slide.buttonText }}
                </RouterLink>
              </div>
            </div>
            
            <!-- Image -->
            <div class="hidden lg:block flex-1 max-w-md xl:max-w-lg">
              <div class="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-[1.02]">
                <img 
                  :src="slide.image" 
                  :alt="slide.title"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                >
              </div>
            </div>
          </div>
        </swiper-slide>
        
        <!-- Navigation Buttons -->
        <div class="swiper-button-prev hidden md:flex"></div>
        <div class="swiper-button-next hidden md:flex"></div>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-creative'

const slides = [
  {
    title: 'Hayallerinizi Gerçeğe Dönüştürün',
    description: 'Seyahat etmek hiç bu kadar kolay olmamıştı. Yeni deneyimlere hazır olun!',
    buttonText: 'Hemen Katıl',
    image: new URL('@/assets/images/intro/intro_image2.png', import.meta.url).href,
  },
  {
    title: 'Vize İşlemleri Artık Çok Daha Kolay',
    description: 'Hızlı ve güvenilir vize çözümleriyle dünyayı keşfedin.',
    buttonText: 'Başvur',
    image: new URL('@/assets/images/intro/intro_image1.png', import.meta.url).href,
  },
  {
    title: 'Keşfet, Öğren, Büyü',
    description: 'Dünyanın dört bir yanına seyahat ederek en güzel yerlerde hayatını zenginleştir.',
    buttonText: 'Keşfet',
    image: new URL('@/assets/images/intro/intro_image.png', import.meta.url).href,
  },
]

const modules = [Navigation, Pagination, Autoplay, EffectCreative]

const swiperBreakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 30
  },
  1024: {
    slidesPerView: 1,
    spaceBetween: 40
  }
}

const renderCustomBullet = (index, className) => {
  return `<span class="${className} custom-bullet"></span>`
}
</script>

<style scoped>
/* Custom Swiper Navigation */
/*.swiper-button-next,
.swiper-button-prev {
  @apply w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-md text-primary hover:bg-white transition-colors duration-300;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  @apply text-xl font-bold;
}

.swiper-button-next {
  @apply right-4;
}

.swiper-button-prev {
  @apply left-4;
}*/

/* Custom Pagination Bullets */
/*:deep(.custom-bullet) {
  @apply w-3 h-3 bg-gray-300 opacity-100 transition-all duration-300;
}

:deep(.swiper-pagination-bullet-active) {
  @apply w-6 bg-primary rounded-full;
}*/

/* Mobile optimizations */
/*@media (max-width: 768px) {
  .swiper-button-next,
  .swiper-button-prev {
    @apply hidden;
  }
  
  :deep(.swiper-pagination) {
    @apply bottom-2;
  }
}*/
</style>