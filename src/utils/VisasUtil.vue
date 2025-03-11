<template>
  <div class="swiper-container">
    <!-- header  -->
    <div class="w-full text-3xl">
      <h1 class="m-4">
        Memnun olan musterilerimize<br />
        <span class="font-bold">almis oldugumuz vizeler</span>
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
        }
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(visaItem, index) in visaItems" :key="index">
        <img :src="visaItem.image" class="swiper-image" alt="Visa Image" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const visaItems = ref([
      { image: new URL('@/assets/images/visa/visa.jpg', import.meta.url).href },
      { image: new URL('@/assets/images/visa/visa.jpg', import.meta.url).href },
      { image: new URL('@/assets/images/visa/visa.jpg', import.meta.url).href },
      { image: new URL('@/assets/images/visa/visa.jpg', import.meta.url).href },
      { image: new URL('@/assets/images/visa/visa.jpg', import.meta.url).href },
      { image: new URL('@/assets/images/visa/visa.jpg', import.meta.url).href },
      { image: new URL('@/assets/images/visa/visa.jpg', import.meta.url).href },
      { image: new URL('@/assets/images/visa/visa.jpg', import.meta.url).href },
    ]);

    const modules = [Autoplay, Pagination, Navigation];

    return {
      visaItems,
      modules,
    };
  },
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.mySwiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.swiper-slide:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.swiper-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.swiper-button-next,
.swiper-button-prev {
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background: rgba(0, 0, 0, 0.8);
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 20px;
}

.swiper-pagination-bullet {
  background: #ccc;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background: #007aff;
}

@media (max-width: 768px) {
  .swiper-slide {
    border-radius: 8px;
    width: 90%; /* Mobilde slayt genişliğini artır */
    margin: 0 auto; /* Slaytları ortala */
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 30px;
    height: 30px;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 16px;
  }
}
</style>
