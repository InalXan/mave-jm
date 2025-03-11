<template>
<div>
	  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="w-64"
  >
    <swiper-slide class="w-64">
    	<img src="@/assets/images/visa/visa.jpg" class="w-64" alt="">
    </swiper-slide>

    <swiper-slide class="w-64">
    	<img src="@/assets/images/visa/visa.jpg" class="w-64" alt="">
    </swiper-slide>

    <swiper-slide class="w-64">
    	<img src="@/assets/images/visa/visa.jpg" class="w-64" alt="">
    </swiper-slide>

    <swiper-slide class="w-64">
    	<img src="@/assets/images/visa/visa.jpg" class="w-64" alt="">
    </swiper-slide>

    <swiper-slide class="w-64">
    	<img src="@/assets/images/visa/visa.jpg" class="w-64" alt="">
    </swiper-slide>

    <swiper-slide class="w-64">
    	<img src="@/assets/images/visa/visa.jpg" class="w-64" alt="">
    </swiper-slide>

    <swiper-slide class="w-64">
    	<img src="@/assets/images/visa/visa.jpg" class="w-64" alt="">
    </swiper-slide>

    <swiper-slide class="w-64">
    	<img src="@/assets/images/visa/visa.jpg" class="w-64" alt="">
    </swiper-slide>

    <swiper-slide class="w-64">
    	<img src="@/assets/images/visa/visa.jpg" class="w-64" alt="">
    </swiper-slide>

    <swiper-slide class="w-64">
    	<img src="@/assets/images/visa/visa.jpg" class="w-64" alt="">
    </swiper-slide>

  </swiper>
</div>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>
