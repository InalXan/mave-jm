<script setup>
import FixedUtil from '@/utils/FixedUtil.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>
<template>
  <FixedUtil />
  <!-- Services Section Start -->
  <section class="lg:py-[120px] bg-[url('@/assets/images/intro/intro.jpg')] bg-center bg-cover bg-full py-28">
    <div class="container mx-auto px-4">
      <div class="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
        <h2 class="font-bold text-3xl sm:text-4xl md:text-[40px] text-gray-800 mb-4">
          Sunduğumuz Avantajlar
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          class="p-8 bg-second/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition-all"
        >
          <div
            class="w-16 h-16 flex items-center justify-center bg-primary text-second rounded-xl mb-6 text-2xl"
          >
          <box-icon name='timer' color="white"></box-icon>
          </div>
          <h4 class="font-semibold text-xl text-gray-800 mb-3">Zaman Tasarrufu</h4>
          <p class="text-gray-600">
            Alanında uzman vize ekibiyle hizmet sunan Mave-jm Vize, size birçok avantaj sağlıyor.
          </p>
        </div>

        <div
          class="p-8 bg-second/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition-all"
        >
          <div
            class="w-16 h-16 flex items-center justify-center bg-primary text-second rounded-xl mb-6 text-2xl"
          >
          <box-icon type='logo' name='internet-explorer' color="white"></box-icon>
          </div>
          <h4 class="font-semibold text-xl text-gray-800 mb-3">Online Danışmanlık</h4>
          <p class="text-gray-600">
            Avrupa da olan ofisi ile Türkiye de online hizmet vermektedir . Online hizmet ile süreçler kolaylıkla yönetilmektedi
          </p>
        </div>

        <div
          class="p-8 bg-second/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition-all"
        >
          <div
            class="w-16 h-16 flex items-center justify-center bg-primary text-second rounded-xl mb-6 text-2xl"
          >
          <box-icon name='fingerprint' color="white"></box-icon>
          </div>
          <h4 class="font-semibold text-xl text-gray-800 mb-3">Kişiye Özel Danışmanlık</h4>
          <p class="text-gray-600">
            Şirketimizde başvurusunu yaptığımız her ülke için ayrı bir vize uzmanı bulunmaktadır. Danışmanlık sürecinizi başlattıktan sonra ilgili vize uzmanımız atamanızı gerçekleştirdikten sonra, sizleri arayarak ön bilgilendirme yaparlar ve süreciniz başlamış olur.
          </p>
        </div>

        <div
          class="p-8 bg-second/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition-all"
        >
          <div
            class="w-16 h-16 flex items-center justify-center bg-primary text-second rounded-xl mb-6 text-2xl"
          >
          <box-icon type='solid' color="white" name='mobile'></box-icon>
          </div>
          <h4 class="font-semibold text-xl text-gray-800 mb-3">Gelişmiş Randevu Sistemi</h4>
          <p class="text-gray-600">
            Uzman ekibimizle 7/24 vize randevu sistemlerini aktif olarak takip ediyor, sizin için en uygun randevuyu bulmak adına sürekli çalışıyoruz. İstediğiniz randevuyu almanız için tüm süreçleri titizlikle yönetiyor ve size en iyi hizmeti sunuyoruz. Vize başvurularınızda zaman kaybetmeden, en hızlı şekilde ilerlemeniz için buradayız.
          </p>
        </div>

        <div
          class="p-8 bg-second/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition-all"
        >
          <div
            class="w-16 h-16 flex items-center justify-center bg-primary text-second rounded-xl mb-6 text-2xl"
          >
          <box-icon name='shape-circle' color="white"></box-icon>
          </div>
          <h4 class="font-semibold text-xl text-gray-800 mb-3">Alternatif Vize Çözümü</h4>
          <p class="text-gray-600">
            İsteklerinize ve mesleğinize en uygun vize türünü belirleyebiliyoruz.
          </p>
        </div>

        <div
          class="p-8 bg-second/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition-all"
        >
          <div
            class="w-16 h-16 flex items-center justify-center bg-primary text-second rounded-xl mb-6 text-2xl"
          >
          <box-icon name='universal-access' color="white"></box-icon>
          </div>
          <h4 class="font-semibold text-xl text-gray-800 mb-3">Dil Desteği</h4>
          <p class="text-gray-600">
            Tercümesi zorunlu belgeler için yeminli tercümanımız ek ücretle tercüme işlemlerinizi yapmaktadır.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- Services Section End -->

  <!-- footer  -->
  <FooterComponent />
</template>
