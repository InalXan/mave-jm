<template>
  <div class="bg-gray-100">
    <!-- Breadcrumb -->
    <div class="header bg-second h-16 px-10 py-8 border-b-2 border-gray-200 flex items-center justify-between">
      <div class="flex items-center space-x-2 text-gray-400">
        <span class="text-primary tracking-wider font-thin text-md"><a href="#">Home</a></span>
        <span>/</span>
        <span class="tracking-wide text-md"><span class="text-base">About</span></span>
        <span>/</span>
      </div>
    </div>

    <!-- Başlık -->
    <div class="header my-3 h-12 px-10 flex items-center justify-between">
      <h1 class="font-medium text-2xl">About</h1>
      <h2>{{ selectedMission ? "İçeriği Güncelle" : "Yeni İçerik Ekle" }}</h2>
    </div>

    <!-- Form ve Liste -->
    <div class="flex flex-col mx-3 mt-6 lg:flex-row">
      <!-- Form Alanı -->
      <div class="w-full lg:w-1/3 m-1">
        <form @submit.prevent="handleSubmit" class="w-full bg-white shadow-md p-6">
          <div class="mb-6">
            <textarea
              v-model="mission"
              rows="4"
              class="block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
              required
            ></textarea>
          </div>
          <div class="mb-6">
            <button
              class="w-full bg-primary text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 hover:bg-primary/50 focus:outline-none"
            >
              {{ selectedMission ? "Güncelle" : "Ekle" }}
            </button>
            <button
              v-if="selectedMission"
              @click="resetForm"
              type="button"
              class="cancel mt-2 w-full bg-gray-300 py-2 rounded-lg"
            >
              İptal
            </button>
          </div>
        </form>
      </div>

      <!-- Liste Alanı -->
      <div class="w-full lg:w-2/3 m-1 bg-second shadow-lg text-lg rounded-sm border border-gray-200">
        <div class="overflow-x-auto rounded-lg p-3">
          <table class="table-auto w-full">
            <thead class="text-sm font-semibold uppercase text-gray-800 bg-gray-50">
              <tr>
                <th>#</th>
                <th>Görsel</th>
                <th>Misyon</th>
                <th class="text-center">İşlem</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(mission, index) in missions" :key="mission._id" class="border-b">
                <td>{{ index + 1 }}</td>
                <td>
                  <img src="@/assets/images/logo/logo.png" class="h-8 w-8 mx-auto" />
                </td>
                <td>{{ mission.mission }}</td>
                <td class="flex justify-center space-x-2">
                  <button
                    @click="handleEdit(mission)"
                    class="rounded-md hover:bg-primary/60 text-primary cursor-pointer p-2"
                  >
                    ✏️ Düzenle
                  </button>
                  <button
                    @click="handleDelete(mission._id)"
                    class="rounded-md hover:bg-red-600 text-red-600 cursor-pointer p-2"
                  >
                    🗑 Sil
                  </button>
                </td>
              </tr>
              <tr v-if="missions.length === 0">
                <td colspan="4" class="text-center py-4 text-gray-500">Henüz içerik eklenmedi.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAllMission, createMission, updateMission, deleteMission } from "@/api/useMission";

// State tanımlamaları
const missions = ref([]);
const selectedMission = ref(null);
const mission = ref("");

// İçerikleri API'den çekme
const fetchMissions = async () => {
  try {
    missions.value = await getAllMission();
  } catch (error) {
    console.error("İçerikler yüklenirken hata oluştu:", error);
  }
};

// Yeni içerik ekleme veya güncelleme
const handleSubmit = async () => {
  try {
    if (!mission.value.trim()) return alert("Misyon içeriği boş olamaz!");

    if (selectedMission.value) {
      await updateMission(selectedMission.value._id, { mission: mission.value });
    } else {
      await createMission({ mission: mission.value });
    }

    resetForm();
    fetchMissions();
  } catch (error) {
    console.error("İçerik kaydedilirken hata oluştu:", error);
  }
};

// İçeriği düzenleme
const handleEdit = (item) => {
  selectedMission.value = item;
  mission.value = item.mission;
};

// İçeriği silme
const handleDelete = async (id) => {
  if (confirm("Bu içeriği silmek istediğinize emin misiniz?")) {
    try {
      await deleteMission(id);
      fetchMissions();
    } catch (error) {
      console.error("Silme işlemi başarısız:", error);
    }
  }
};

// Form sıfırlama
const resetForm = () => {
  selectedMission.value = null;
  mission.value = "";
};

// Sayfa yüklendiğinde içerikleri çek
onMounted(fetchMissions);
</script>
