<script setup>
import IntroUtil from '@/utils/IntroUtil.vue'
import FixedUtil from '@/utils/FixedUtil.vue'
import SponsorUtil from '@/utils/SponsorUtil.vue'
import { ref } from 'vue'
const cardItems = ref([
  {
    icon: 'globe',
    title: 'Food and Wine Tours',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quasi provident ratione officiis quisquam voluptas itaque nobis architecto.',
  },
  {
    icon: 'compass',
    title: 'Travel Opportunities',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quasi provident ratione officiis quisquam voluptas itaque nobis architecto.',
  },
  {
    icon: 'ticket',
    title: 'Food and Wine Tours',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quasi provident ratione officiis quisquam voluptas itaque nobis architecto.',
  },
])
</script>
<template>
  <!-- General Components start -->
  <FixedUtil />
  <!-- intro start  -->
  <IntroUtil />
  <!-- services start  -->
  <div class="w-full flex justify-center items-center">
    <div class="flex flex-wrap md:flex-nowrap justify-center gap-5 my-10 w-full">
      <!-- Card Start -->
      <div
        v-for="cardItem in cardItems"
        :key="cardItem.id"
        class="w-full md:w-1/2 lg:w-1/3 min-h-48 p-5 rounded-3xl shadow-sm bg-white"
      >
        <div class="flex flex-col p-5">
          <div
            class="w-12 h-12 my-2 flex justify-center items-center text-2xl p-2 rounded-full bg-primary text-second"
          >
            <ion-icon :name="cardItem.icon"></ion-icon>
          </div>
          <div>
            <h1 class="text-primary text-2xl my-2">{{ cardItem.title }}</h1>
            <p class="text-sm my-2 text-thirty/50">
              {{ cardItem.desc }}
            </p>
          </div>
        </div>
      </div>
      <!-- Card End -->
    </div>
  </div>
  <!-- services end  -->
  <!-- about start  -->
  <div class="w-full flex justify-center md:flex-row flex-col">
    <!-- left side  -->
    <div class="w-full md:w-1/2 flex items-center justify-center flex-row">
      <div class="w-full h-full flex flex-col">
        <div
          class="relative w-full h-92 rounded-xl bg-[url('@/assets/images/contents/home_about.jpg')] bg-center bg-cover shadow-md"
        >
          <div class="absolute m-2 border border-dashed border-primary w-full h-92"></div>
        </div>
        <div
          class="h-48 rounded-full bg-second bg-center bg-cover bg-[url('@/assets/images/logo/logo.png')]"
        ></div>
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
            to="/"
            class="flex justify-center items-center p-4 rounded-full my-5 mx-5 border border-primary"
            >Read More <ion-icon name="arrow-forward-sharp"></ion-icon
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

  <!-- sponsor start -->
  <SponsorUtil />
</template>
