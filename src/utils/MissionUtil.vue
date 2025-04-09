<template>
  <section
    class="py-16 bg-[url('@/assets/images/about/about-2.jpg')] bg-center bg-cover text-second"
  >
    <div class="container mx-auto px-6 md:px-12 lg:px-16">
      <div class="mt-8 lg:-mx-6 lg:flex bg-second/80 p-6 backdrop-blur-md lg:items-center">
        <img
          class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
          src="@/assets/images/about/about-3.jpg"
          alt="Hakkımızda"
        />

        <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
          <p class="text-sm uppercase text-primary/80">Bizim</p>
          <h1 class="block text-2xl font-semibold text-primary hover:underline md:text-3xl">
            Misyonumuz
          </h1>
          <ul class="list-disc leading-6 mt-4 text-gray-800">
            <li v-for="mission in missions" :key="mission._id">
              {{ mission.mission }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAllMission } from '@/api/useMission'

const missions = ref([]) // Boş bir dizi olarak başlatıldı

const fetchMissions = async () => {
  try {
    const response = await getAllMission()
    missions.value = response // API'den gelen tüm misyonları listeye atıyoruz
  } catch (error) {
    console.error('İçerik yüklenirken hata oluştu:', error)
  }
}

onMounted(fetchMissions)
</script>
