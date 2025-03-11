<script setup>
import FixedUtil from '@/utils/FixedUtil.vue'
</script>

<template>
  <FixedUtil />
  <section class="bg-second text-primary py-36 relative">
    <div class="container mx-auto px-6 max-w-6xl flex flex-wrap justify-between">
      <!-- Left Section -->
      <div class="w-full lg:w-1/2 p-8 text-center lg:text-left">
        <div class="w-full flex justify-center items-center">
          <img src="@/assets/images/about/about.png" alt="" />
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
      <div class="w-full lg:w-1/2 bg-second p-10 rounded-2xl shadow-2xl text-gray-900">
        <form class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold">İsim</label>
              <input
                type="text"
                placeholder="Jane"
                class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60"
              />
            </div>
            <div>
              <label class="block text-sm font-semibold">Soyisim</label>
              <input
                type="text"
                placeholder="Doe"
                class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold">Yaşınız</label>
            <input
              type="number"
              placeholder="35"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold">Gitmek istediğiniz ülke</label>
            <input
              type="text"
              placeholder="Germany"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold">Vize Türü</label>
            <select class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60">
              <option>İş</option>
              <option>Gezi</option>
              <option>Turistik</option>
              <option>Schengen</option>
              <option>Aile birleşimi</option>
              <option>Tır şoförü vizesi</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold">Daha once vize aldinizmi?</label>
            <select class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60">
              <option>Evet</option>
              <option>Hayir</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-semibold">Daha once vize reddi aldinizmi?</label>
            <select class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60">
              <option>Evet</option>
              <option>Hayir</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-semibold">E-mail</label>
            <input
              type="email"
              placeholder="john@gmail.com"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold">Telefon</label>
            <input
              type="number"
              placeholder="0 (548) ** **"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div class="grid grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold">Medeni Durum</label>
              <select class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60">
                <option>Evli</option>
                <option>Bekar</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-semibold">Meslek Bilginiz</label>
              <select class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60">
                <option>Çalışan</option>
                <option>İşveren</option>
                <option>Emekli</option>
                <option>Memur</option>
                <option>Çalışmayan</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-semibold"
              >Ayni is yerinde kac yildir calisiyorsunuz?</label
            >
            <select class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60">
              <option>1 yildan az</option>
              <option>1 yildan fazla</option>
              <option>3 yildan fazla</option>
              <option>5 yildan fazla</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold">Maasiniz banka hesabiniza yatiyormu?</label>
            <select class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60">
              <option>Evet</option>
              <option>Hayir</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold">Seyahat Sebebiniz</label>
            <textarea
              rows="4"
              class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary/60"
            ></textarea>
          </div>

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
</template>

<style scoped>
input,
select,
option,
textarea {
  border: 2px solid #a86332;
}
</style>
