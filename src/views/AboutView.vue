<script setup>
import FixedUtil from '@/utils/FixedUtil.vue'
import MissionUtil from '@/utils/MissionUtil.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { ref, onMounted } from 'vue'
import { getAllContent } from '@/api/useAbout'

const content = ref({ title: '', description: '' })

const fetchContents = async () => {
  try {
    const response = await getAllContent()
    if (response.length > 0) {
      content.value = response[0]
    }
  } catch (error) {
    console.error('İçerik yüklenirken hata oluştu:', error)
  }
}

onMounted(fetchContents)
</script>

<template>
  <FixedUtil />
  <section
    class="bg-[url('@/assets/images/about/about-1.jpg')] bg-center bg-cover text-second py-36 text-center"
  >
    <div class="container bg-[rgb(0,0,0,0.6)] mx-auto px-6 md:px-12 lg:px-16 py-6">
      <h2 class="text-4xl text-primary font-extrabold tracking-wide">MAVE - JM</h2>
    </div>
  </section>

  <section class="bg-second dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <div class="flex items-center justify-center md:flex-row flex-col xL:-mx-4">
        <div class="xl:w-1/2 xl:mx-4">
          <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            {{ content.title }}
          </h1>

          <p class="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
            {{ content.description }}
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 h-auto md:grid-cols-1">
          <div>
            <img
              class="object-cover rounded-xl w-96"
              src="@/assets/images/about/about.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- missions  -->
  <MissionUtil />
  <!-- footer  -->
  <FooterComponent />
</template>
