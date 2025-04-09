<script setup>
import IntroUtil from '@/utils/IntroUtil.vue'
import FixedUtil from '@/utils/FixedUtil.vue'
// import SponsorUtil from '@/utils/SponsorUtil.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import FlagsUtil from '@/utils/FlagsUtil.vue'
import VisasUtil from '@/utils/VisasUtil.vue'
import VisitMiddleware from '@/middleware/VisitMiddleware.vue'
import { ref } from 'vue'
const cardItems = ref([
  {
    icon: 'globe',
    img: new URL('@/assets/images/contents/home/tourist-visa.jpg', import.meta.url).href,
    title: 'Turist Vize Danışmanlığı',
    desc: 'Turist Vize başvuru sürecinizi kolaylaştırarak, seyahat planlarınızı mümkün kılmak için profesyonel rehberlik sunuyoruz.',
  },
  {
    icon: 'compass',
    img: new URL('@/assets/images/contents/home/tourist-visa2.jpg', import.meta.url).href,
    title: 'Çalışma Vizesi Danışmanlığı',
    desc: 'Yurtdışında kariyer fırsatlarını keşfetmeniz için uzmanlıkla hazırlanmış danışmanlık hizmeti sunuyoruz.',
  },
  {
    icon: 'ticket',
    img: new URL('@/assets/images/contents/home/tourist-visa3.jpg', import.meta.url).href,
    title: 'Yurtdışı Eğitim Danışmanlığı ',
    desc: 'Uluslararası eğitim fırsatlarını araştırmanıza ve en uygun olanı bulmanıza yardımcı olmak için danışmanlık sağlıyoruz.',
  },
])
</script>
<template>
  <!-- General Components start -->
  <FixedUtil />
  <!-- intro start  -->
  <IntroUtil />
  <FlagsUtil />
  <!-- services start  -->
  <div class="w-full flex justify-center items-center flex-col">
    <!-- header  -->
    <div class="w-full text-3xl">
      <h1 class="m-4">
        Keşfetmeniz için tüm seyahat ihtiyaçlarınızı <br />
        <span class="font-bold">tek bir çatı altında karşılayan Mave Vize !</span>
      </h1>
    </div>
    <!-- cards  -->
    <div class="w-full flex justify-around items-center gap-3 flex-wrap md:flex-nowrap">
      <!-- card start  -->
      <div
        class="w-82 h-108 rounded-4xl shadow-xl border border-primary/80 m-2"
        v-for="cardItem in cardItems"
        :key="cardItem"
      >
        <div class="w-full flex justify-center items-center">
          <img :src="cardItem.img" class="rounded-4xl p-2" alt="" />
        </div>
        <div class="w-full flex justify-end items-center">
          <RouterLink
            to="/order-visa"
            class="p-2 m-1 w-12 h-12 text-second rounded-full bg-primary flex justify-center items-center absolute hover:-rotate-25 hover:bg-primary/50 hover:text-primary transition-all"
          >
          <box-icon name='right-arrow-alt' color="white"></box-icon>
          </RouterLink>
        </div>
        <div class="w-full p-2 m-2 text-left">
          <h1 class="text-2xl font-bold m-1">{{ cardItem.title }}</h1>
          <p class="m-1">
            {{ cardItem.desc }}
          </p>
        </div>
      </div>
      <!-- card end  -->
    </div>
  </div>
  <!-- services end  -->
  <VisitMiddleware />
  <!-- sponsor start -->
  <!-- <SponsorUtil /> -->

  <!-- about start  -->
  <div class="w-full flex py-16 justify-center md:flex-row flex-col">
    <!-- left side  -->
    <div class="w-full md:w-1/2 flex items-center justify-center flex-row">
      <div class="w-full h-full flex flex-col">
        <div
          class="relative w-full h-92 rounded-xl bg-[url('@/assets/images/contents/home_about.jpg')] bg-center bg-cover shadow-md"
        >
          <div class="absolute m-2 border border-dashed border-primary w-full h-92"></div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center text-second">
        <div
          class="w-52 h-112 mx-5 rounded-xl bg-[url('@/assets/images/contents/home_about_2.jpg')] bg-center bg-cover"
        ></div>
      </div>
    </div>
    <!-- right side  -->
    <div class="md:w-1/2 w-full flex items-center">
      <div class="mx-5">
        <h1 class=" text-primary font-bold fles justify-center items-center">
          <box-icon type='solid' name='map-pin' color="brown"></box-icon> NEDEN BİZİ SEÇMELİSİNİZ?
        </h1>
        <h1 class="text-primary text-2xl font-bold">
          <span class="text-[#222]">Yüksek başarılarımızla</span> <br />
          daima yanınızdayız
        </h1>
        <p class="leading-8 my-5">
          Sizi zorlu başvuru yollarından, uzunca beklemelerden uzaklaştırıp hayallerinizi gerçekleştirmenizi sağlıyoruz.
        </p>
      </div>
    </div>
  </div>
  <!-- about end  -->
  <VisasUtil />

  <!-- footer  -->
  <FooterComponent />
</template>
