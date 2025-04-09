<script setup>
import FixedUtil from '@/utils/FixedUtil.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <FixedUtil />
  
  <!-- Hero Section -->
  <div class="bg-gradient-to-r from-primary to-primary-dark py-16 my-16 text-white">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Vize Rehberiniz</h1>
      <p class="text-xl max-w-3xl mx-auto mb-8">Profesyonel vize danışmanlığı ile yurtdışı hayallerinizi gerçeğe dönüştürüyoruz</p>
      <RouterLink 
        to="/order-visa" 
        class="bg-second text-primary font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 inline-block"
      >
        Hemen Başvur
      </RouterLink>
    </div>
  </div>

  <!-- Main Content -->
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nasıl Vize Alırım?</h2>
      <div class="w-24 h-1 bg-primary mx-auto mb-8"></div>
      <p class="text-gray-600 text-lg">Vize süreçlerinizde size rehberlik edecek tüm bilgiler burada</p>
    </div>

    <!-- Vize Bilgileri Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <!-- Kart 1 -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        <div class="p-8">
          <div class="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-4">Vize nedir?</h3>
          <p class="text-gray-600 mb-6">
            Bir ülkeye girmek veya o ülkeden çıkmak için yetkili makamlardan alınması gereken izindir. Bu izin belgesi gidilecek ülkenin konsolosluğundan veya ülkeye giriş kapısından alınır.
          </p>
        </div>
      </div>

      <!-- Kart 2 -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        <div class="p-8">
          <div class="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-4">Vize Nasıl Alınır?</h3>
          <p class="text-gray-600 mb-6">
            Vize almak için öncelikle doğru bir dosya hazırlamalısınız. Hangi vize türüne başvuru yapacağınızı belirlemeli, gerekli belgeleri toplamalı ve başvurunuzu mektuplarla desteklemelisiniz.
          </p>
          <RouterLink to="/order-visa" class="text-primary font-semibold hover:underline flex items-center">
            Hemen Başvur
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </RouterLink>
        </div>
      </div>

      <!-- Kart 3 -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        <div class="p-8">
          <div class="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-4">Yurtdışı Çalışma Vizesi</h3>
          <p class="text-gray-600 mb-6">
            Yurt dışı çalışma, kariyer ve dil eğitimine katkı sağlayan müthiş bir fırsattır. Farklı kültürden insan tanımak, ileri seviye dil konuşabilmek kariyer açısından oldukça cazip bir tercihtir.
          </p>
          <RouterLink to="/order-visa" class="text-primary font-semibold hover:underline flex items-center">
            Hemen Başvur
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </RouterLink>
        </div>
      </div>

      <!-- Kart 4 -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        <div class="p-8">
          <div class="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-4">Seyahat Vizesi</h3>
          <p class="text-gray-600 mb-6">
            Turist vizesi ister tatil amaçlı, ister araştırma veya geçici olarak alınan vizedir. Başvurular ülkeye göre değişkenlik gösterir. Her ülke için talep ve evraklar farklıdır.
          </p>
          <RouterLink to="/order-visa" class="text-primary font-semibold hover:underline flex items-center">
            Hemen Başvur
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </RouterLink>
        </div>
      </div>

      <!-- Kart 5 -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        <div class="p-8">
          <div class="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-4">Doğru Vize Başvurusunun Önemi</h3>
          <p class="text-gray-600 mb-6">
            Vize başvurusunda amacınıza göre uygun vize talebi gerekmektedir. Yanlış vize türü başvurusu sınır dışı edilmenize sebep olabilir. Bu nedenle işin ehli aracı kurumlarla çalışmak çok önemlidir.
          </p>
        </div>
      </div>

      <!-- Kart 6 -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        <div class="p-8">
          <div class="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-4">Yurt Dışında İş Olanakları</h3>
          <p class="text-gray-600 mb-6">
            Yurt dışında birçok iş olanağı bulunmaktadır. Kendi mesleğinizi yapmak isterseniz sizi işe alacak firmaya neden sizi almaları gerektiğini açıklamanız gerekmektedir.
          </p>
        </div>
      </div>

      <!-- Kart 7 -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        <div class="p-8">
          <div class="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-4">Yurt Dışında Yaşam</h3>
          <p class="text-gray-600 mb-6">
            Yurt dışına yerleşmek birçok konuda ufkunuzu açabilecek bir hamledir. Kültürel olarak yükselmenizde ve kişisel gelişiminizde yurt dışında yaşamanın büyük getirileri vardır.
          </p>
        </div>
      </div>

      <!-- Kart 8 -->
      <div class="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        <div class="p-8">
          <div class="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-4">Yurt Dışına Nasıl Çıkarım?</h3>
          <p class="text-gray-600 mb-4">
            Yurt dışına çıkmak kompleks bir süreç değildir. Önemli olan istenilen her durumu titizlik ile hazırlamaktır.
          </p>
          <ul class="text-gray-600 list-disc pl-5 space-y-2">
            <li><strong>Bordo Pasaport:</strong> Seyahat ya da eğitim amaçlı yurt dışına gidecek kişilerin pasaportu</li>
            <li><strong>Yeşil Pasaport:</strong> Kamu personeli, doktor ve öğretmenlere verilen pasaport</li>
            <li><strong>Gri Pasaport:</strong> Resmî görevlilere verilen pasaport</li>
            <li><strong>Siyah Pasaport:</strong> Diplomat ve üst düzey devlet görevlilerine verilen pasaport</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-primary-light rounded-xl p-8 md:p-12 mt-16 text-center">
      <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Vize başvurunuzu şimdi yapın!</h3>
      <p class="text-gray-700 max-w-2xl mx-auto mb-8">Profesyonel ekibimiz vize sürecinizde size rehberlik edecek ve başvurunuzu en doğru şekilde tamamlamanıza yardımcı olacaktır.</p>
      <RouterLink 
        to="/order-visa" 
        class="bg-primary text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-primary-dark transition duration-300 inline-block"
      >
        Hemen Başvur
      </RouterLink>
    </div>
  </div>

  <!-- Footer -->
  <FooterComponent />
</template>

<style>
.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.bg-primary-light {
  background-color: rgba(79, 70, 229, 0.1);
}
</style>