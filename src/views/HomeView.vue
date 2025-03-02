<script setup>
import IntroUtil from '@/utils/IntroUtil.vue'
import FixedUtil from '@/utils/FixedUtil.vue'
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
</template>
