<script setup>
import FixedUtil from '@/utils/FixedUtil.vue'
</script>
<template>
  <FixedUtil />
  <section
    class="bg-[url('@/assets/images/about/about-1.jpg')] bg-center bg-cover text-second py-36 text-center"
  >
    <div class="container bg-[rgb(0,0,0,0.6)] mx-auto px-6 md:px-12 lg:px-16 py-6">
      <h2 class="text-4xl text-primary font-extrabold tracking-wide">Mave-jm</h2>
      <p class="mt-4 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatibus? Ipsum, nobis.
        Eveniet nam voluptatibus quo. Corrupti enim inventore, numquam praesentium error accusamus
        necessitatibus expedita fuga labore repellendus dignissimos quaerat!
      </p>
    </div>
  </section>

  <section class="bg-second dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <div class="xl:flex xl:items-center xL:-mx-4">
        <div class="xl:w-1/2 xl:mx-4">
          <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            About us
          </h1>

          <p class="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi
            magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, ipsum atque. Fugit
            vitae saepe blanditiis quos officia adipisci at ad quam sapiente deserunt consequuntur,
            veniam facere, temporibus maiores pariatur et! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Excepturi hic alias laboriosam voluptas veniam tempora sed labore
            cumque natus. Exercitationem corporis quasi placeat quaerat sunt. Reprehenderit ducimus
            aliquid omnis modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            nostrum molestias pariatur tempore exercitationem inventore minima, ullam magnam maiores
            dolorum. Officiis odit quidem accusantium nemo nostrum exercitationem officia veritatis.
            Quis!
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 h-auto md:grid-cols-1">
          <div>
            <img
              class="object-cover rounded-xl w-full"
              src="@/assets/images/about/about.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="py-16 bg-[url('@/assets/images/about/about-2.jpg')] bg-center bg-cover text-second"
  >
    <div class="container mx-auto px-6 md:px-12 lg:px-16">
      <div class="mt-8 lg:-mx-6 lg:flex bg-second/80 p-6 backdrop-blur-md lg:items-center">
        <img
          class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
          src="@/assets/images/about/about-3.jpg"
          alt=""
        />

        <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
          <p class="text-sm uppercase text-primary/80">Bizim</p>
          <h1
            class="block text-2xl font-semibold text-primary hover:underline dark:text-white md:text-3xl"
          >
            Misyonumuz
          </h1>
          <ul class="list-disc leading-6 mt-4 text-gray-800">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas qui a tenetur.
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas qui a tenetur.
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas qui a tenetur.
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas qui a tenetur.
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas qui a tenetur.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
