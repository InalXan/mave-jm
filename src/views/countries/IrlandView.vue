<template>
  <FixedUtil/>
  <div class="w-full min-h-screen bg-gray-50 flex flex-col lg:flex-row my-28">
    <!-- Content Section -->
    <div class="lg:w-1/2 w-full p-6 lg:p-10 flex flex-col justify-center">
      <div class="max-w-2xl mx-auto">
        <div class="mb-8">
          <span class="bg-primary/40 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">İRLANDA VİZE REHBERİ</span>
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">İrlanda Seyahatiniz İçin Vize Rehberi</h1>
          <div class="w-20 h-1 bg-primary mb-6"></div>
          <p class="text-gray-700 leading-relaxed mb-6">
            İrlanda'ya turist olarak gitmek isteyenler için alınması gereken vizeye "Kısa Süreli C Vizesi" denir. Bu vize, turistik geziler, aile veya arkadaş ziyareti, iş görüşmeleri veya kısa süreli eğitim programları gibi amaçlarla İrlanda'yı ziyaret etmek isteyen kişiler için uygundur.
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
              <li>Konum: Kuzeybatı Avrupa'da, Büyük Britanya Adası'nın batısında yer alan bir ada ülkesidir.</li>
              <li>Başkent: Dublin, İrlanda'nın başkenti ve en büyük şehridir. Galway, Cork ve Limerick diğer önemli şehirleridir.</li>
              <li>İklim: Ilıman okyanus iklimi hakimdir. Yıl boyunca yağışlı ve rüzgarlıdır, sıcaklıklar genellikle ılımandır.</li>
            </ul>

            <ul class="text-sm text-gray-700 list-disc pl-5 my-2 space-y-1">
              <li class="text-xl list-none">Tarih: </li>
              <li>Antik Dönem: Kelt kültürünün önemli merkezlerinden biri olmuştur.</li>
              <li>Orta Çağ: Viking istilalarına uğramış, daha sonra İngiliz hakimiyetine girmiştir.</li>
              <li>Modern Dönem: 1921'de bağımsızlığını kazanmış, 1973'te Avrupa Birliği'ne katılmıştır.</li>
            </ul>

            <ul class="text-sm text-gray-700 list-disc pl-5 my-2 space-y-1">
              <li class="text-xl list-none">Kültür: </li>
              <li>Dil: Resmi diller İngilizce ve İrlandaca'dır (Gaelik).</li>
              <li>Edebiyat: James Joyce, W.B. Yeats, Oscar Wilde gibi dünyaca ünlü yazarlar yetişmiştir.</li>
              <li>Müzik: Geleneksel İrlanda müziği ve Riverdance gibi dans gösterileri meşhurdur.</li>
              <li>Mutfak: İrlanda güveci, soda ekmeği ve Guinness gibi bira çeşitleriyle tanınır.</li>
            </ul>

            <ul class="text-sm text-gray-700 list-disc pl-5 my-2 space-y-1">
              <li class="text-xl list-none">Ekonomi: </li>
              <li>Genel Bakış: "Kelt Kaplanı" olarak bilinen güçlü bir ekonomiye sahiptir.</li>
              <li>Endüstriler: Teknoloji, ilaç, finans ve tarım önemli sektörlerdir.</li>
              <li>Para Birimi: Euro (EUR).</li>
            </ul>

            <ul class="text-sm text-gray-700 list-disc pl-5 my-2 space-y-1">
              <li class="text-xl list-none">Yönetim: </li>
              <li>Hükümet: Parlamenter demokrasi ile yönetilir. Cumhurbaşkanı devletin başıdır.</li>
              <li>Parlamento: Oireachtas, Temsilciler Meclisi ve Senato'dan oluşur.</li>
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
        <h3 class="font-semibold text-lg mb-2">İrlanda'da Görmeniz Gereken Yerler</h3>
        <p class="text-gray-600 text-sm">Swiper galerimizde İrlanda'nın en popüler turistik noktalarını keşfedin. Cliffs of Moher, Dublin Kalesi ve daha fazlası...</p>
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
  new URL('@/assets/images/countries/irland/1.jpg', import.meta.url).href,
  new URL('@/assets/images/countries/irland/2.jpg', import.meta.url).href,
  new URL('@/assets/images/countries/irland/3.jpg', import.meta.url).href,
  new URL('@/assets/images/countries/irland/4.jpg', import.meta.url).href,
  new URL('@/assets/images/countries/irland/5.jpg', import.meta.url).href,
  new URL('@/assets/images/countries/irland/6.jpg', import.meta.url).href,
  new URL('@/assets/images/countries/irland/7.jpg', import.meta.url).href,
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