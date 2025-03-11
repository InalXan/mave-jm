<script setup>
import FixedUtil from '@/utils/FixedUtil.vue';
</script>
<template>
  <FixedUtil/>
  <div class="py-28 bg-second">
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12">
          <img src="@/assets/images/about/truck-visa.jpg" alt="image" loading="lazy" width="" height="">
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Tır şoförü vizesi</h2>
          <p class="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
          <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
          <ul class="list-disc mt-6 text-gray-600">
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam sunt provident eum dolorem eos obcaecati nulla harum impedit laudantium facere, asperiores iure voluptate voluptatem cupiditate dolorum perferendis molestiae optio neque!</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci fugit, a quod asperiores nobis aliquam, maxime ea voluptas ducimus maiores tempora voluptatem rerum repellendus doloribus saepe quos molestias voluptatum delectus!</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia aliquam nulla numquam sit corporis beatae doloribus quod tenetur quas cum iusto porro, aspernatur quaerat obcaecati nihil saepe tempore, officia earum.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus incidunt dicta ex assumenda voluptates nisi dignissimos velit dolorem ducimus commodi, esse recusandae eligendi libero repellendus aliquid rerum saepe ipsam nemo.</li>
          </ul>
          <div class="w-full flex justify-end items-center mt-6">

          <RouterLink class="flex justify-center items-center text-right p-2 bg-second border-2 border-primary text-primary hover:bg-primary hover:text-second transition-all" to="/order-visa">Hemen basvur <ion-icon name="arrow-forward-circle" class="text-2xl"></ion-icon></RouterLink>
          </div>
        </div>
      </div>
  </div>
</div>
</template>
