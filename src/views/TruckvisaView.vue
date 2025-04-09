<script setup>
import FixedUtil from '@/utils/FixedUtil.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>
<template>
  <FixedUtil />
  <div class="py-28 bg-second">
    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12">
          <img
            src="@/assets/images/about/truck-visa.jpg"
            alt="image"
            loading="lazy"
            width=""
            height=""
          />
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Tır şoförü vizesi</h2>
          <p class="mt-6 text-gray-600">
            TIR şoförleri, uluslararası taşımacılık yaparken bazı ülkelerde vize almak zorundadırlar. TIR şoförü vizesi, taşımacılık işini yurt dışına taşıyan profesyonel şoförlerin yasal olarak çalışabilmeleri için gerekli olan bir izin türüdür. Bu vize, şoförün taşıma yapacağı ülkelere girebilmesi ve işini icra edebilmesi için gereklidir.
          </p>
          <p class="mt-4 text-gray-600">
            Vize Türü ve Başvuru Koşulları:
          </p>
          <ul class="list-disc mt-6 text-gray-600">
            <li>
              C Tipi Vize (Kısa Süreli): <br>
              Bu vize, genellikle Schengen Bölgesi gibi Avrupa ülkelerinde 90 güne kadar geçerli olan kısa süreli bir vize türüdür. TIR şoförleri, bu vize ile belirtilen süre boyunca iş seyahatlerini gerçekleştirebilirler.
            </li>
            <li>
              D Tipi Vize (Uzun Süreli): <br>
              Bazı durumlarda, TIR şoförleri uzun süreli vizeye ihtiyaç duyabilirler. Bu vize, genellikle 90 günden daha uzun süreli taşımacılık işleri için alınır.
            </li>
            <li>
              Gerekli Belgeler:
            </li>
            <li>
              Pasaport:
              En az 6 ay geçerli, yıpranmamış pasaport gereklidir.
            </li>
            
            <li>
              Vize Başvuru Formu:
              Doldurulmuş ve imzalanmış vize başvuru formu.
            </li>
            
            <li>
              Fotoğraf:
              Biyometrik fotoğraf, vize başvurusuna eklenir.
            </li>
            
            <li>
              Çalışma Belgesi:
              Başvuru sahibinin TIR şoförü olarak çalıştığını belgeleyen resmi evraklar.
            </li>
            
            <li>
              Davetiye:
              Gideceği ülkedeki bir firma tarafından düzenlenmiş davetiye mektubu (bazı ülkeler için gereklidir).
            </li>
            
            <li>
              Sigorta:
              Seyahat süresini kapsayan sağlık sigortası.
            </li>
            
            <li>
              Araç Belgeleri:
              Kullanılacak TIR'a ait belgeler ve araç ruhsatı.
            </li>
            
            <li>
              Çalışma İzni:
              Gerektiği takdirde, çalışma izni belgeleri.
            </li>
          </ul>
          <div class="w-full flex justify-end items-center mt-6">
            <RouterLink
              class="flex justify-center items-center text-right p-2 bg-second border-2 border-primary text-primary hover:bg-primary hover:text-second transition-all"
              to="/order-visa"
              >Hemen basvur<box-icon name='right-arrow-alt' color="brown"></box-icon></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- footer  -->
  <FooterComponent />
</template>
