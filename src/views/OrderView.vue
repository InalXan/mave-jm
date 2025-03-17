<template>
  <FixedUtil />
  <section class="bg-[url('@/assets/images/order/bg.jpg')] bg-center bg-cover text-primary py-36 relative">
    <div class="container mx-auto rounded-3xl bg-second/70 backdrop-blur-md px-6 max-w-6xl flex flex-wrap justify-between">
      <!-- Left Section -->
      <div class="w-full lg:w-1/2 p-8 text-center lg:text-left">
        <div class="w-full flex justify-center items-center">
          <img src="@/assets/images/about/about.png" class="rounded-3xl my-5" alt="" />
        </div>
        <h4 class="text-lg font-semibold tracking-wide uppercase">
          Formu doldurarak hayallerinize bir adim daha
        </h4>
        <h2 class="text-4xl font-bold mt-2">yaklasin</h2>
        <div class="w-24 h-1 bg-primary my-6"></div>
        <div class="mt-6 bg-primary p-6 rounded-lg shadow-lg text-second">
          <h3 class="text-xl font-semibold">İletişim Bilgileri</h3>
          <ul class="mt-4 space-y-2">
            <li class="flex items-center gap-2">
              <span class="font-bold"><ion-icon name="call"></ion-icon> Telefon Numarası:</span>
              <a href="tel:324212312334" class="text-second hover:underline">+234234324234</a>
            </li>
            <li class="flex items-center gap-2">
              <span class="font-bold"><ion-icon name="mail"></ion-icon> Email:</span>
              <a href="mailto:info@mave-jm.com" class="text-second hover:underline"
                >info@mave-jm.com</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Form Section -->
      <div class="w-full lg:w-1/2 p-10 text-gray-900">
        <form @submit.prevent="submitForm" class="space-y-6">
          <!-- İsim ve Soyisim -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold">İsim</label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Jane"
                class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-semibold">Soyisim</label>
              <input
                v-model="form.surname"
                type="text"
                placeholder="Doe"
                class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60"
                required
              />
            </div>
          </div>

          <!-- Yaş -->
          <div>
            <label class="block text-sm font-semibold">Yaşınız</label>
            <input
              v-model="form.age"
              type="number"
              placeholder="35"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60"
              required
            />
          </div>

          <!-- Ülke -->
          <div>
            <label class="block text-sm font-semibold">Gitmek istediğiniz ülke</label>
            <input
              v-model="form.country"
              type="text"
              placeholder="Germany"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60"
              required
            />
          </div>

          <!-- Vize Türü -->
          <div>
            <label class="block text-sm font-semibold">Vize Türü</label>
            <select
              v-model="form.work"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60"
              required
            >
              <option value="İş">İş</option>
              <option value="Gezi">Gezi</option>
              <option value="Turistik">Turistik</option>
              <option value="Schengen">Schengen</option>
              <option value="Aile birleşimi">Aile birleşimi</option>
              <option value="Tır şoförü vizesi">Tır şoförü vizesi</option>
            </select>
          </div>

          <!-- Daha önce vize alındı mı? -->
          <div>
            <label class="block text-sm font-semibold">Daha önce vize alındı mı?</label>
            <select
              v-model="form.disableVisaData"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60"
              required
            >
              <option value="Evet">Evet</option>
              <option value="Hayır">Hayır</option>
            </select>
          </div>

          <!-- Daha önce vize reddi alındı mı? -->
          <div>
            <label class="block text-sm font-semibold">Daha önce vize reddi alındı mı?</label>
            <select
              v-model="form.disableVisaData"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60"
              required
            >
              <option value="Evet">Evet</option>
              <option value="Hayır">Hayır</option>
            </select>
          </div>

          <!-- E-posta -->
          <div>
            <label class="block text-sm font-semibold">E-posta</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="john@gmail.com"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <!-- Telefon -->
          <div>
            <label class="block text-sm font-semibold">Telefon</label>
            <input
              v-model="form.phone"
              type="tel"
              placeholder="0 (548) ** **"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <!-- Medeni Durum ve Meslek -->
          <div class="grid grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold">Medeni Durum</label>
              <select
                v-model="form.married"
                class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60"
                required
              >
                <option value="Evli">Evli</option>
                <option value="Bekar">Bekar</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-semibold">Meslek Bilginiz</label>
              <select
                v-model="form.job"
                class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60"
                required
              >
                <option value="Çalışan">Çalışan</option>
                <option value="İşveren">İşveren</option>
                <option value="Emekli">Emekli</option>
                <option value="Memur">Memur</option>
                <option value="Çalışmayan">Çalışmayan</option>
              </select>
            </div>
          </div>

          <!-- Çalışma Süresi -->
          <div>
            <label class="block text-sm font-semibold">Aynı iş yerinde kaç yıldır çalışıyorsunuz?</label>
            <select
              v-model="form.careertime"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60"
              required
            >
              <option value="1 yıldan az">1 yıldan az</option>
              <option value="1 yıldan fazla">1 yıldan fazla</option>
              <option value="3 yıldan fazla">3 yıldan fazla</option>
              <option value="5 yıldan fazla">5 yıldan fazla</option>
            </select>
          </div>

          <!-- Maaş Bankaya Yatıyor mu? -->
          <div>
            <label class="block text-sm font-semibold">Maaşınız banka hesabınıza yatıyor mu?</label>
            <select
              v-model="form.profit"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60"
              required
            >
              <option value="Evet">Evet</option>
              <option value="Hayır">Hayır</option>
            </select>
          </div>

          <!-- Seyahat Sebebi -->
          <div>
            <label class="block text-sm font-semibold">Seyahat Sebebiniz</label>
            <textarea
              v-model="form.adventure"
              rows="4"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60"
              required
            ></textarea>
          </div>

          <!-- Gönder Butonu -->
          <button
            type="submit"
            class="w-full bg-primary cursor-pointer text-second py-3 rounded-lg font-bold hover:bg-primary/80 transition"
          >
            Gönder
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <FooterComponent />
</template>

<style scoped>
input,
select,
option,
textarea {
  border: 2px solid #a86332;
}
</style>

<script setup>
import { ref } from "vue";
import { useOrder } from "@/api/useOrder"; // API fonksiyonlarını içe aktar
import FixedUtil from "@/utils/FixedUtil.vue";
import FooterComponent from "@/components/FooterComponent.vue";
const { createOrder } = useOrder(); // createOrder fonksiyonunu al

// Form verilerini tutacak reactive nesne
const form = ref({
  name: "",
  surname: "",
  age: "",
  country: "",
  work: "",
  disableVisaData: "",
  email: "",
  phone: "",
  married: "",
  job: "",
  careertime: "",
  profit: "",
  adventure: "",
});

// Form gönderildiğinde çalışacak fonksiyon
const submitForm = async () => {
  try {
    const response = await createOrder(form.value); // API'ye sipariş gönder
    console.log("Sipariş oluşturuldu:", response);
    alert("Sipariş başarıyla gönderildi!");
    form.value = {}; // Formu temizle
  } catch (error) {
    console.error("Sipariş gönderilirken hata oluştu:", error);
    alert("Sipariş gönderilemedi. Lütfen tekrar deneyin.");
  }
};
</script>
