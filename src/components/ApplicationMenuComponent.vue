<script setup>
import { ref } from 'vue'

const menuItems = ref([
  { icon: 'information-circle-sharp', link: '/' },
  { icon: 'bulb-sharp', link: '/' },
  { icon: 'home-sharp', link: '/' },
  { icon: 'globe-sharp', link: '/' },
  { icon: 'business-sharp', link: '/' },
])
</script>
<template>
  <div class="flex md:hidden flex-col z-50 justify-center items-center w-full fixed bottom-0">
    <div class="w-full flex justify-end">
      <a
        href="#"
        class="p-2 bg-primary flex items-center text-second m-2 shadow-xl hover:bg-second hover:text-primary transition-all font-bold rounded-full"
        >whatsapp <ion-icon name="arrow-forward-outline"></ion-icon
      ></a>
    </div>
    <div class="w-full flex justify-center items-center">
      <ul
        class="flex bg-second/50 backdrop-blur-md justify-around items-center p-3 h-16 border-2 border-primary shadow-lg text-primary text-2xl w-full max-w-96 rounded-full m-2"
      >
        <li v-for="menuItem in menuItems" :key="menuItem">
          <RouterLink :to="menuItem.link" class="p-2 m-2 flex items-center justify-center">
            <ion-icon :name="menuItem.icon"></ion-icon>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul li:nth-child(3) a {
  width: 80px;
  height: 80px;
  padding: 5;
  border-radius: 100%;
  background: #a86332;
  color: #fff;
}
</style>
