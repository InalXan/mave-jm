<script setup>
import FixedUtil from '@/utils/FixedUtil.vue';
</script>
<template>
    <FixedUtil/>
    <div class="min-h-screen py-8 flex flex-col items-center justify-center bg-gradient-to-br from-secondary via-primary/70 to-primary p-5">
      <div class="w-full max-w-2xl bg-second/80 backdrop-blur-md rounded-lg shadow-xl p-6">
        <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Sıkça Sorulan Sorular</h1>
        
        <div class="space-y-4">
          <details class="group bg-second border border-primary rounded-lg overflow-hidden">
            <summary class="flex justify-between items-center px-4 py-3 cursor-pointer text-lg font-medium text-gray-800 group-open:bg-blue-500 group-open:text-white transition-all">
              Morbi at sagittis velit
              <span class="text-xl">+</span>
            </summary>
            <p class="px-4 py-3 text-gray-700">Nunc posuere dapibus urna quis cursus. Mauris malesuada tincidunt diam vel placerat.</p>
          </details>
  
          <details class="group bg-second border border-primary rounded-lg overflow-hidden">
            <summary class="flex justify-between items-center px-4 py-3 cursor-pointer text-lg font-medium text-gray-800 group-open:bg-blue-500 group-open:text-white transition-all">
              Etiam ut lacus in enim sagittis posuere at a elit
              <span class="text-xl">+</span>
            </summary>
            <p class="px-4 py-3 text-gray-700">Fusce sed laoreet ex. Aenean justo nisl, eleifend eget eleifend sit amet, imperdiet id libero.</p>
          </details>
  
          <details class="group bg-second border border-primary rounded-lg overflow-hidden">
            <summary class="flex justify-between items-center px-4 py-3 cursor-pointer text-lg font-medium text-gray-800 group-open:bg-blue-500 group-open:text-white transition-all">
              Nam auctor fringilla magna id porta
              <span class="text-xl">+</span>
            </summary>
            <p class="px-4 py-3 text-gray-700">Etiam maximus vitae eros eu vestibulum. Donec posuere, magna non tincidunt dignissim.</p>
          </details>
        </div>
      </div>
  
      <div class="w-full max-w-2xl bg-second/80 backdrop-blur-md rounded-lg shadow-xl p-6 mt-6 flex flex-col items-center text-center">
        <img src="@/assets/images/logo/logo.png" class="w-16 mb-4" alt="Logo">
        <h2 class="text-xl font-semibold text-gray-800">Bize Sormak İstediğiniz Bir Sorunuz Var mı?</h2>
        <p class="text-gray-600 mt-2">Vize uzmanlarımıza sorun.</p>
        <RouterLink to="/contact" class="mt-4 px-6 py-2 bg-primary text-second font-medium rounded-lg shadow-md hover:bg-blue-600 transition-all">
          Vize Uzmanına Sorun
        </RouterLink>
      </div>
    </div>
  </template>