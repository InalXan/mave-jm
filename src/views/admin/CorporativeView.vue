<template>
  <div class="flex bg-gray-100 min-h-screen">
    <!-- Sidebar -->
    <SidebarComponent />

    <!-- Ana İçerik -->
    <div class="sm:w-[95%] w-[85%] min-h-screen p-6">
      <div class="sm:w-[95%] w-[85%] float-end bg-white rounded-lg shadow-md p-6">
        <!-- Sayfa Başlığı -->
        <div class="flex justify-between items-center border-b pb-4 mb-4">
          <h1 class="text-xl font-semibold text-gray-700">📥 Gelen Mesajlar</h1>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Ara..."
            class="px-3 py-2 border rounded-md text-sm w-64"
          />
        </div>

        <!-- Mesaj Listesi -->
        <div v-if="loading" class="text-center py-6">⏳ Yükleniyor...</div>
        <div v-else-if="messages.length === 0" class="text-center py-6">📭 Henüz mesaj yok.</div>
        <div v-else class="space-y-4">
          <div
            v-for="message in filteredMessages"
            :key="message._id"
            class="p-4 bg-white shadow-md rounded-lg hover:bg-gray-50 transition cursor-pointer"
          >
            <div class="flex justify-between items-center">
              <h2 class="text-lg font-semibold text-gray-800">{{ message.name }}</h2>
              <div class="flex items-center space-x-3">
                <span
                  class="px-3 py-1 text-sm font-medium rounded-full"
                  :class="message.status === 'new' ? 'bg-green-300 text-green-800' : 'bg-gray-200 text-gray-600'"
                >
                  {{ message.status === "new" ? "Yeni" : "Okundu" }}
                </span>
                <button
                  @click="deleteMessage(message._id)"
                  class="text-red-500 hover:text-red-700 transition"
                >
                  🗑️ Sil
                </button>
              </div>
            </div>
            <p class="text-gray-600 text-sm mt-2">{{ message.email }} • 📞 {{ message.number }}</p>
            <p class="text-gray-700 mt-2 line-clamp-2">{{ message.message }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
import { getMessages, deleteMessage as deleteMsgApi } from "@/api/useMessage";

// 📌 API’den mesajları çek
const messages = ref([]);
const loading = ref(true);
const searchQuery = ref("");

// 📌 API’den tüm mesajları çek
const fetchMessages = async () => {
  try {
    messages.value = await getMessages();
  } catch (error) {
    console.error("Mesajları yüklerken hata:", error);
  } finally {
    loading.value = false;
  }
};

// 📌 Mesaj Silme İşlemi
const deleteMessage = async (id) => {
  if (!confirm("Bu mesajı silmek istediğinize emin misiniz?")) return;
  try {
    await deleteMsgApi(id);
    messages.value = messages.value.filter((msg) => msg._id !== id);
  } catch (error) {
    console.error("Mesaj silme hatası:", error);
  }
};

// 📌 Arama Filtreleme
const filteredMessages = computed(() => {
  return messages.value.filter((msg) =>
    msg.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    msg.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    msg.message.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// 📌 Sayfa Yüklendiğinde API Çağrısı
onMounted(fetchMessages);
</script>

<style>
/* Uzun mesajları kısaltma */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
