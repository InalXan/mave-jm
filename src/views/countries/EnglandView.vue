<template>
  <FixedUtil/>
  <div class="w-full min-h-screen bg-gray-50 flex flex-col lg:flex-row my-28">
    <!-- Content Section -->
    <div class="lg:w-1/2 w-full p-6 lg:p-10 flex flex-col justify-center">
      <div class="max-w-2xl mx-auto">
        <div class="mb-8">
          <span class="bg-primary/40 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">UK VISA GUIDE</span>
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">İngiltere Seyahatiniz İçin Vize Rehberi</h1>
          <div class="w-20 h-1 bg-primary mb-6"></div>
          <p class="text-gray-700 leading-relaxed mb-6">
            İngiltere'ye turist olarak gitmek isteyenler için alınması gereken vizeye "Standart Ziyaretçi Vizesi" (Standard Visitor Visa) denir. Bu vize, turistik geziler, aile veya arkadaş ziyareti, iş görüşmeleri veya kısa süreli eğitim programları gibi amaçlarla İngiltere'yi ziyaret etmek isteyen kişiler için uygundur.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 class="font-semibold text-primary mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd" />
              </svg>
              Ülke ile ilgili detaylı bilgiler
            </h3>
            <ul class="text-sm text-gray-700 list-disc pl-5 my-2 space-y-1">
              <li class="text-xl list-none">Coğrafya: </li>
              <li>Konum:  İngiltere, Büyük Britanya Adası'nın güneydoğusunda yer alır ve kuzeyde İskoçya, batıda Galler ile komşudur. Ayrıca, İrlanda Denizi, Kelt Denizi, Kuzey Denizi ve İngiliz Kanalı ile çevrilidir.</li>
              <li>Başkent:  Londra, hem İngiltere'nin hem de Birleşik Krallık'ın başkentidir. Dünya çapında finans, kültür ve tarih açısından önemli bir merkezdir.</li>
              <li>İklim:  Ilıman okyanusal iklim görülür. Kışlar genellikle soğuk, yazlar ise ılıktır. Yıl boyunca yağışlıdır.</li>
            </ul>

            <ul class="text-sm text-gray-700 list-disc pl-5 my-2 space-y-1">
              <li class="text-xl list-none">Tarih: </li>
              <li>Tarih Öncesi ve Antik Dönem:  Stonehenge gibi anıtlar, İngiltere'nin tarih öncesi çağlardan beri yerleşim gördüğünü gösterir. Roma İmparatorluğu döneminde İngiltere, Britannia adıyla bilinir.</li>
              <li>Orta Çağ:  1066'da Normanlar'ın İngiltere'yi fethi, ülkenin tarihinde önemli bir dönüm noktasıdır.</li>
              <li>Modern Dönem:  16. ve 17. yüzyıllarda İngiltere, denizcilikte ve sömürgecilikte öncü bir rol üstlenmiştir. Sanayi Devrimi de 18. yüzyılda burada başlamıştır.</li>
            </ul>

            <ul class="text-sm text-gray-700 list-disc pl-5 my-2 space-y-1">
              <li class="text-xl list-none">Kültür: </li>
              <li>Dil:  Resmi dil İngilizce'dir ve dünya çapında en yaygın konuşulan dillerden biridir.</li>
              <li>Sanat ve Edebiyat:  William Shakespeare, Charles Dickens, J.K. Rowling gibi dünyaca ünlü yazarlar İngiltere'dendir. Londra, birçok sanat galerisine ve tiyatroya ev sahipliği yapar.</li>
              <li>Müzik:  The Beatles, Rolling Stones gibi gruplar İngiltere'den çıkmıştır ve dünya müziğine büyük etkisi olmuştur.</li>
              <li>
                Spor:  Futbol, İngiltere'de en popüler spordur. Premier League, dünyanın en prestijli futbol liglerinden biridir. Ayrıca kriket ve rugby de oldukça popülerdir.
              </li>
            </ul>

            <ul class="text-sm text-gray-700 list-disc pl-5 my-2 space-y-1">
              <li class="text-xl list-none">Ekonomi: </li>
              <li>Genel Bakış:  İngiltere, dünyanın en büyük ekonomilerinden birine sahiptir. Londra, uluslararası finans merkezi olarak tanınır.</li>
              <li>Endüstriler:  Finans, teknoloji, otomotiv, havacılık ve ilaç sanayisi öne çıkan sektörler arasındadır.</li>
              <li>
                Para Birimi:  İngiliz Sterlini (GBP).
              </li>
            </ul>

            <ul class="text-sm text-gray-700 list-disc pl-5 my-2 space-y-1">
              <li class="text-xl list-none">Yönetim: </li>
              <li>Hükümet:  İngiltere, anayasal monarşi ve parlamenter demokrasi ile yönetilir. Kraliçe veya kral devletin başıdır, ancak politik gücü sınırlıdır.</li>
              <li>Parlamento:  İngiltere'nin yasama organı olan Parlamento, iki meclisten oluşur: Avam Kamarası ve Lordlar Kamarası.</li>
            </ul>
          </div>
        </div>
        
        <RouterLink to="/order-visa" class="bg-primary hover:bg-primary/40 text-white text-center font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center">
          Hemen başvuru yap
          
        </RouterLink>
      </div>
    </div>

    <!-- Gallery Section -->
    <div class="lg:w-1/2 w-full bg-gray-100 p-4 lg:p-8 flex flex-col">
      <div class="rounded-xl overflow-hidden ">
        <swiper
          :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#3b82f6',
          }"
          :spaceBetween="10"
          :navigation="true"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          class="h-full rounded-lg"
        >
          <swiper-slide v-for="(image, index) in images" :key="index">
            <div class="h-auto w-full bg-gray-200 flex items-center justify-center">
              <img :src="image" class="object-cover h-full w-full" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      
      <div class="mt-4">
        <swiper
          @swiper="setThumbsSwiper"
          :spaceBetween="10"
          :slidesPerView="4"
          :freeMode="true"
          :watchSlidesProgress="true"
          :modules="modules"
          class="thumbnail-swiper"
        >
          <swiper-slide v-for="(image, index) in images" :key="index">
            <div class="h-24 bg-gray-200 rounded-md overflow-hidden cursor-pointer transition-opacity hover:opacity-80">
              <img :src="image" class="object-cover h-full w-full" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      
      <div class="mt-6 bg-white p-4 rounded-lg shadow-sm">
        <h3 class="font-semibold text-lg mb-2">İngiltere'de Görmeniz Gereken Yerler</h3>
        <p class="text-gray-600 text-sm">Swiper galerimizde İngiltere'nin en popüler turistik noktalarını keşfedin. Big Ben, Tower Bridge ve daha fazlası...</p>
      </div>
    </div>
  </div>
  <FooterComponent/>
</template>

<script>
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';
  import 'swiper/css/thumbs';
  import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
  import FixedUtil from "@/utils/FixedUtil.vue";
  import FooterComponent from "@/components/FooterComponent.vue"

  export default {
    components: {
      Swiper,
      SwiperSlide,
      FixedUtil,
      FooterComponent
    },
    setup() {
      const thumbsSwiper = ref(null);
      const images = [
        'https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1500380804539-4e1e8c1e7118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      ];

      const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
      };

      return {
        thumbsSwiper,
        setThumbsSwiper,
        modules: [FreeMode, Navigation, Thumbs],
        images
      };
    },
  };
</script>

<style>
  .thumbnail-swiper .swiper-slide {
    opacity: 0.6;
    transition: opacity 0.3s;
  }
  
  .thumbnail-swiper .swiper-slide-thumb-active {
    opacity: 1;
    border: 2px solid #3b82f6;
  }
  
  .swiper-button-next, .swiper-button-prev {
    background-color: rgba(0,0,0,0.5);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 15px;
  }
  
  .swiper-button-next:after, .swiper-button-prev:after {
    font-size: 1.2rem;
    color: white;
  }
</style>