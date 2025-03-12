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
            class="p-2 m-1 w-12 h-12 text-second rounded-full bg-primary flex justify-center items-center absolute hover:-rotate-25 hover:bg-second hover:text-primary transition-all"
          >
            <ion-icon name="arrow-forward-outline"></ion-icon>
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
   <VisitMiddleware/>
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
        <div class="h-16 w-52 rounded-2xl py-4 flex items-center justify-center bg-primary">
          <h1 class="text-4xl font-bold mx-1">35</h1>
          <h2 class="mx-1">
            Years Of <br />
            experiences
          </h2>
        </div>
        <div
          class="w-52 h-112 m-5 p-4 rounded-xl bg-[url('@/assets/images/contents/home_about_2.jpg')] bg-center bg-cover"
        ></div>
      </div>
    </div>
    <!-- right side  -->
    <div class="md:w-1/2 w-full">
      <div class="mx-5">
        <h1 class="uppercase text-primary font-bold fles justify-center items-center">
          <ion-icon name="map-sharp" class="-my-1"></ion-icon> why choose us?
        </h1>
        <h1 class="text-primary text-2xl font-bold">
          <span class="text-[#222]">Where Wanderlust Meets</span> <br />
          Dream Destinations
        </h1>
        <p class="leading-8 my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas omnis quae, deleniti dolores
          consectetur repellat tenetur velit doloremque, voluptas nulla obcaecati quibusdam numquam
          quidem accusamus, maiores ipsum hic itaque fuga.
        </p>
      </div>
      <!-- cards  -->
      <div flex justify-center>
        <div class="mx-5 flex justify-center gap-2 items-center flex-col lg:flex-row">
          <!-- card start  -->
          <div
            class="w-full lg:w-76 p-4 rounded-2xl flex flex-col items-between shadow-sm border border-[rgb(0,0,0,0.2)]"
          >
            <div class="w-full my-4 flex justify-center font-bold text-primary text-2xl">
              <ion-icon
                name="card-sharp"
                class="p-2 text-second bg-primary rounded-full mx-2"
              ></ion-icon>
              <h1>Passport Plus</h1>
            </div>
            <div>
              <ul class="flex flex-col items-start justify-center">
                <li class="flex justify-center items-center mx-4">
                  <ion-icon name="checkmark-sharp" class="text-primary text-xl"></ion-icon> Beyond
                  Border Immigration
                </li>

                <li class="flex justify-center items-center mx-4">
                  <ion-icon name="checkmark-sharp" class="text-primary text-xl"></ion-icon>
                  Worldwide Visa Assistance
                </li>
              </ul>
            </div>
          </div>
          <!-- card end  -->
          <!-- card start  -->
          <div
            class="w-full lg:w-76 p-4 rounded-2xl flex flex-col items-between shadow-sm border border-[rgb(0,0,0,0.2)]"
          >
            <div class="w-full my-4 flex justify-center font-bold text-primary text-2xl">
              <ion-icon
                name="business-sharp"
                class="p-2 text-second bg-primary rounded-full mx-2"
              ></ion-icon>
              <h1>Passport Plus</h1>
            </div>
            <div>
              <ul class="flex flex-col items-start justify-center">
                <li class="flex justify-center items-center mx-4">
                  <ion-icon name="checkmark-sharp" class="text-primary text-xl"></ion-icon> Beyond
                  Border Immigration
                </li>

                <li class="flex justify-center items-center mx-4">
                  <ion-icon name="checkmark-sharp" class="text-primary text-xl"></ion-icon>
                  Worldwide Visa Assistance
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- card end  -->
        <!-- contact btns  -->
        <div class="w-full flex justify-start items-center">
          <RouterLink
            to="avantajlar"
            class="flex justify-center items-center p-4 rounded-full my-5 mx-5 border border-primary text-primary hover:bg-primary hover:text-second transition-all"
            >Avantajlarimiz <ion-icon name="arrow-forward-sharp"></ion-icon
          ></RouterLink>
          <a href="" class="flex justify-center items-center"
            ><div>
              <ion-icon
                name="call-sharp"
                class="p-2 text-second bg-primary rounded-full mx-2"
              ></ion-icon>
            </div>
            <div class="flex flex-col">
              <h1 class="text-primary">Need help?</h1>
              <br />
              <span>0 (551) 25 25</span>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- about end  -->
  <VisasUtil />

  <!-- footer  -->
  <FooterComponent/>
</template>
