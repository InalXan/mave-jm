<script setup>
import FixedUtil from '@/utils/FixedUtil.vue';
</script>
<template>
<FixedUtil/>
<section class="bg-gray-800 text-second py-36 text-center">
  <div class="container mx-auto px-6 md:px-12 lg:px-16">
    <h2 class="text-4xl font-extrabold tracking-wide">The History Of Our Hotel</h2>
    <p class="mt-4 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
      Experience the rich legacy of our hotel, where luxury meets history in a timeless blend of comfort and elegance.
    </p>
    <a href="#" class="mt-6 inline-block px-8 py-3 bg-yellow-500 text-gray-900 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-yellow-600">
      Read More
    </a>
  </div>
</section>

<section class="py-16 bg-gray-50">
  <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center px-6 md:px-12 lg:px-16">
    <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <i class="fas fa-hotel text-4xl text-yellow-500"></i>
      <h3 class="text-2xl font-semibold mt-4">Great Location</h3>
      <p class="text-gray-600 mt-2">Situated in the heart of the city with breathtaking views.</p>
    </div>
    <div class="bg-yellow-500 p-8 rounded-xl shadow-lg text-gray-900 hover:shadow-2xl transition-shadow duration-300">
      <i class="fas fa-utensils text-4xl"></i>
      <h3 class="text-2xl font-semibold mt-4">Free Meals</h3>
      <p class="mt-2">Enjoy gourmet meals prepared by world-class chefs.</p>
    </div>
    <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <i class="fas fa-dumbbell text-4xl text-yellow-500"></i>
      <h3 class="text-2xl font-semibold mt-4">Fitness Room</h3>
      <p class="text-gray-600 mt-2">Stay fit with our state-of-the-art gym facilities.</p>
    </div>
  </div>
</section>

<section class="py-16 bg-gray-800 text-white">
  <div class="container mx-auto px-6 md:px-12 lg:px-16">
    <h2 class="text-4xl font-extrabold text-center">Our Exclusive Amenities</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
      <div class="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all">
        <i class="fas fa-spa text-4xl text-yellow-500"></i>
        <h3 class="text-xl font-bold mt-4">Luxury Spa</h3>
        <p class="mt-2 text-gray-300">Relax and rejuvenate with our premium spa services.</p>
      </div>
      <div class="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all">
        <i class="fas fa-swimmer text-4xl text-yellow-500"></i>
        <h3 class="text-xl font-bold mt-4">Infinity Pool</h3>
        <p class="mt-2 text-gray-300">Swim with stunning panoramic views.</p>
      </div>
      <div class="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all">
        <i class="fas fa-concierge-bell text-4xl text-yellow-500"></i>
        <h3 class="text-xl font-bold mt-4">24/7 Concierge</h3>
        <p class="mt-2 text-gray-300">Enjoy personalized service anytime, anywhere.</p>
      </div>
      <div class="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all">
        <i class="fas fa-wifi text-4xl text-yellow-500"></i>
        <h3 class="text-xl font-bold mt-4">Free Wi-Fi</h3>
        <p class="mt-2 text-gray-300">Stay connected with high-speed internet.</p>
      </div>
    </div>
  </div>
</section>

</template>