<template>
  <div class="swiper-container">
    <!-- header  -->
    <div class="w-full text-3xl">
      <h1 class="m-4">
       Memnun Olan Müşterilerimize<br />
        <span class="font-bold">almış olduğumuz vizeler</span>
      </h1>
    </div>
    <swiper
      :spaceBetween="30"
      :centeredSlides="false"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :slidesPerView="4"
      :slidesPerGroup="4"
      :breakpoints="{
        320: {
          slidesPerView: 1.2, // Mobilde daha büyük görünmesi için 1.2 yapıldı
          slidesPerGroup: 1,
          spaceBetween: 20, // Mobilde slaytlar arası boşluğu azalt
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      }"
      :modules="modules"
      class="h-104"
    >
      <swiper-slide v-for="(visaItem, index) in visaItems" :key="index">
        <img :src="visaItem.image" alt="Visa Image" />
        <img src="@/assets/images/logo/logo.png" class="absolute z-10" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const visaItems = ref([
      { image: new URL('@/assets/images/visa/1.png', import.meta.url).href },
      { image: new URL('@/assets/images/visa/2.png', import.meta.url).href },
      { image: new URL('@/assets/images/visa/3.png', import.meta.url).href },
      { image: new URL('@/assets/images/visa/4.png', import.meta.url).href },
      { image: new URL('@/assets/images/visa/5.png', import.meta.url).href },
      { image: new URL('@/assets/images/visa/6.png', import.meta.url).href },
      { image: new URL('@/assets/images/visa/7.png', import.meta.url).href },
      { image: new URL('@/assets/images/visa/8.png', import.meta.url).href },
    ])

    const modules = [Autoplay, Pagination, Navigation]

    return {
      visaItems,
      modules,
    }
  },
}
</script>

<style scoped></style>
