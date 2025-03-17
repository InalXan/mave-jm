<script setup>
import { ref, computed, onMounted } from "vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
import { useOrder } from "@/api/useOrder";

const { getOrders, deleteOrder: deleteOrderApi } = useOrder();
const orders = ref([]);
const loading = ref(true);
const searchQuery = ref("");
const expandedOrderId = ref(null);

const fetchOrders = async () => {
  try {
    orders.value = await getOrders();
  } catch (error) {
    console.error("Siparişleri yüklerken hata:", error);
  } finally {
    loading.value = false;
  }
};

const deleteOrder = async (id) => {
  if (confirm("Bu siparişi silmek istediğinize emin misiniz?")) {
    try {
      await deleteOrderApi(id);
      orders.value = orders.value.filter((order) => order._id !== id);
      if (expandedOrderId.value === id) expandedOrderId.value = null;
    } catch (error) {
      console.error("Sipariş silme hatası:", error);
    }
  }
};

const toggleOrderDetails = (id) => {
  expandedOrderId.value = expandedOrderId.value === id ? null : id;
};

const filteredOrders = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return orders.value.filter(({ name, surname, email, country }) =>
    [name, surname, email, country].some((field) => field.toLowerCase().includes(query))
  );
});

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

onMounted(fetchOrders);
</script>

<template>
  <div class="flex bg-gray-100 min-h-screen">
    <SidebarComponent />
    <div class="sm:w-[95%] w-[85%] float-end min-h-screen p-6">
      <div class="sm:w-[95%] w-[85%] bg-white rounded-lg shadow-md float-end p-6">
        <div class="flex justify-between items-center border-b pb-4 mb-4">
          <h1 class="text-xl font-semibold text-gray-700">📦 Siparişler</h1>
          <input v-model="searchQuery" type="text" placeholder="Sipariş ara..." class="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
        </div>

        <div v-if="loading" class="text-center py-6">⏳ Yükleniyor...</div>
        <div v-else-if="filteredOrders.length === 0" class="text-center py-6">📭 Henüz sipariş yok.</div>
        <div v-else class="space-y-4">
          <div v-for="order in filteredOrders" :key="order._id" class="p-4 bg-white shadow-md rounded-lg hover:bg-gray-50 transition cursor-pointer" @click="toggleOrderDetails(order._id)">
            <div class="flex justify-between items-center">
              <h2 class="text-lg font-semibold text-gray-800">{{ order.name }} {{ order.surname }}</h2>
              <div class="flex items-center space-x-3">
                <span class="px-3 py-1 text-sm font-medium rounded-full" :class="order.status === 'new' ? 'bg-green-300 text-green-800' : 'bg-gray-200 text-gray-600'">
                  {{ order.status === "new" ? "Yeni" : "Tamamlandı" }}
                </span>
                <button @click.stop="deleteOrder(order._id)" class="text-red-500 hover:text-red-700 transition">🗑️ Sil</button>
              </div>
            </div>
            <p class="text-gray-600 text-sm mt-2">{{ order.email }} • 📞 {{ order.phone }}</p>
            <p class="text-gray-700 mt-2 line-clamp-2">Ülke: {{ order.country }} • Vize Türü: {{ order.work }}</p>
            <div v-if="expandedOrderId === order._id" class="mt-4">
              <p v-for="(value, key) in { Yaş: order.age, 'Medeni Durum': order.married, Meslek: order.job, 'Çalışma Süresi': order.careertime, 'Maaş Durumu': order.profit, 'Seyahat Sebebi': order.adventure }" :key="key" class="text-gray-700">
                <strong>{{ key }}:</strong> {{ value }}
              </p>
              <p class="text-gray-600 text-sm mt-2">📅 {{ formatDate(order.createdAt) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

input[type="text"] {
  border: 1px solid #d1d5db;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus {
  border-color: #3b82f6;
  outline: none;
}
</style>
