<script setup>
import FixedUtil from '@/utils/FixedUtil.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>
<template>
  <FixedUtil />
  <div
    class="min-h-screen py-8 flex flex-col items-center justify-center bg-[url('@/assets/images/intro/intro.jpg')] bg-center bg-cover bg-full p-5"
  >
    <div class="w-full max-w-2xl py-36 bg-second/10 backdrop-blur-md rounded-lg shadow-xl p-6">
      <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Sıkça Sorulan Sorular</h1>

      <div class="space-y-4">
        <details class="group bg-transparent border border-primary rounded-lg overflow-hidden">
          <summary
            class="flex justify-between items-center px-4 py-3 cursor-pointer text-lg font-medium text-gray-800 group-open:bg-primary group-open:text-white transition-all"
          >
          Turist vizesi nedir?
            <span class="text-xl">+</span>
          </summary>
          <p class="px-4 py-3 text-gray-700">
            Turist vizesi, bir kişinin turistik amaçlarla başka bir ülkeye seyahat etmesine izin veren resmi bir belgedir. Bu vize genellikle tatil, gezi, kültürel etkinlikler veya arkadaş ve akraba ziyareti gibi turistik faaliyetler için verilir. Turist vizesi, genellikle belirli bir süre için geçerlidir ve bu süre boyunca kişinin ülkeye giriş yapmasına ve kalmasına izin verir. 
            <br>
            Her ülkenin vize politikaları farklı olduğundan, turist vizesi başvuru süreci, gerekli belgeler ve vize süreleri ülkeye göre değişiklik gösterebilir. Genellikle turist vizesi almak için başvuru formu doldurmak, pasaport, fotoğraf, seyahat planı ve finansal durum belgeleri gibi dokümanlar sunmak gereklidir. Bazı ülkeler, belirli ülkelerin vatandaşlarından vize talep etmez ve kısa süreli ziyaretler için vizesiz giriş izni verir.
          </p>
        </details>

        <details class="group bg-transparent border border-primary rounded-lg overflow-hidden">
          <summary
            class="flex justify-between items-center px-4 py-3 cursor-pointer text-lg font-medium text-gray-800 group-open:bg-primary group-open:text-white transition-all"
          >
          Turist vizesi almak için pasaportum gerekli mi?
            <span class="text-xl">+</span>
          </summary>
          <p class="px-4 py-3 text-gray-700">
            Evet, tüm vize başvuruları için bir pasaporta ihtiyacınız var.
          </p>
        </details>

        <details class="group bg-transparent border border-primary rounded-lg overflow-hidden">
          <summary
            class="flex justify-between items-center px-4 py-3 cursor-pointer text-lg font-medium text-gray-800 group-open:bg-primary group-open:text-white transition-all"
          >
          Turist vizesine başvurmak için neler gereklidir?
            <span class="text-xl">+</span>
          </summary>
          <p class="px-4 py-3 text-gray-700">
            Pasaportunuzun bulunması ve yurt dışına çıkış yasağınızın olmaması gerekmektedir.
          </p>
        </details>
        <details class="group bg-transparent border border-primary rounded-lg overflow-hidden">
          <summary
            class="flex justify-between items-center px-4 py-3 cursor-pointer text-lg font-medium text-gray-800 group-open:bg-primary group-open:text-white transition-all"
          >
          Schengen vizesi nedir?
            <span class="text-xl">+</span>
          </summary>
          <p class="px-4 py-3 text-gray-700">
            Avrupa Birliğine dahil olan ülkeler ve AB'ye üye olmayan İsviçre, İzlanda, Norveç ve Lichtenstein ülkelerine seyahat etmek amacıyla alınan vizedir. Tek bir ülkeye alınan schengen vizesi ile öncelikle vize aldığınız ülkeye giriş yapmak koşuluyla toplam 29 ülkeye seyahat edilebilmektedir.
          </p>
        </details>
        <details class="group bg-transparent border border-primary rounded-lg overflow-hidden">
          <summary
            class="flex justify-between items-center px-4 py-3 cursor-pointer text-lg font-medium text-gray-800 group-open:bg-primary group-open:text-white transition-all"
          >
          MAVE - JM benim için turist vizesini nasıl alır?
            <span class="text-xl">+</span>
          </summary>
          <p class="px-4 py-3 text-gray-700">
            Gidiş dönüş uçak bileti ve otel rezervasyonunuz tarafımızca konfirme olarak gösterilir, seyahat sağlık sigortanızı da biz gerçekleştiriyoruz. Vize uzmanlarımız tarafından niyet ve motivasyon mektuplarınız profesyonelce, kişiye özel hazırlanır. Başvuru formlarınızı biz dolduruyoruz. Kısacası tüm evrak takibiniz bize ait. Siz sadece konsolosluğa parmak izi, evrak teslimi için gidiyorsunuz.
          </p>
        </details>
        <details class="group bg-transparent border border-primary rounded-lg overflow-hidden">
          <summary
            class="flex justify-between items-center px-4 py-3 cursor-pointer text-lg font-medium text-gray-800 group-open:bg-primary group-open:text-white transition-all"
          >
          MAVE - JM'in seyahat vizemi işleme koyması ne kadar sürer?
            <span class="text-xl">+</span>
          </summary>
          <p class="px-4 py-3 text-gray-700">
            Danışmanlık sözleşmesi sonrasında 24 saat içerisinde danışanımıza bir vize uzmanı atanır. Evrak hazırlığı ve randevu takibi sürecine başlanır. Bunlara ek olarak Amerika ve Schengen ülkelerinde vip randevu desteği sağlamaktayız.
          </p>
        </details>
        <details class="group bg-transparent border border-primary rounded-lg overflow-hidden">
          <summary
            class="flex justify-between items-center px-4 py-3 cursor-pointer text-lg font-medium text-gray-800 group-open:bg-primary group-open:text-white transition-all"
          >
          Schengen Vizesinde süreç ne kadar sürüyor?
            <span class="text-xl">+</span>
          </summary>
          <p class="px-4 py-3 text-gray-700">
            Schengen vizesi alma süreci konsolosluk yoğunluğuna göre değişmektedir. Ortalama olarak 2 - 4 ay sürmektedir.
          </p>
        </details>
        <details class="group bg-transparent border border-primary rounded-lg overflow-hidden">
          <summary
            class="flex justify-between items-center px-4 py-3 cursor-pointer text-lg font-medium text-gray-800 group-open:bg-primary group-open:text-white transition-all"
          >
          Davetiyemin olması vize sonucumu olumlu etkiler mi veya süreci kısaltır mı?
            <span class="text-xl">+</span>
          </summary>
          <p class="px-4 py-3 text-gray-700">
            Davetiyenizin olması vize sonucunuzu olumlu etkileyebilir ancak sürecinizi kısaltmaz.
          </p>
        </details>
        <details class="group bg-transparent border border-primary rounded-lg overflow-hidden">
          <summary
            class="flex justify-between items-center px-4 py-3 cursor-pointer text-lg font-medium text-gray-800 group-open:bg-primary group-open:text-white transition-all"
          >
          Bir ülkeden aldığım Schengen vizesiyle diğer Schengen ülkelerine de gidebilir miyim?
            <span class="text-xl">+</span>
          </summary>
          <p class="px-4 py-3 text-gray-700">
            Öncelikle vizesini aldığınız ülkeye giriş yapmak koşuluyla tüm Schengen ülkelerine giriş yapabilirsiniz.
          </p>
        </details>
        <details class="group bg-transparent border border-primary rounded-lg overflow-hidden">
          <summary
            class="flex justify-between items-center px-4 py-3 cursor-pointer text-lg font-medium text-gray-800 group-open:bg-primary group-open:text-white transition-all"
          >
          Aktif olarak çalışmıyorum, vize başvurumda sorun olur mu?
            <span class="text-xl">+</span>
          </summary>
          <p class="px-4 py-3 text-gray-700">
            Hayır sorun olmaz. Birinci dereceden bir yakınınız size sponsor olursa ya da hesabınızda gerekli miktarda para gösterirseniz  başvuruda bulunabilirsiniz.
          </p>
        </details>
        <details class="group bg-transparent border border-primary rounded-lg overflow-hidden">
          <summary
            class="flex justify-between items-center px-4 py-3 cursor-pointer text-lg font-medium text-gray-800 group-open:bg-primary group-open:text-white transition-all"
          >
          Kanada vize sonucumu beklediğim süreçte farklı bir Schengen ülkesinden vize-randevu alabilir miyim?
            <span class="text-xl">+</span>
          </summary>
          <p class="px-4 py-3 text-gray-700">
            Evet, alabilirsiniz.
          </p>
        </details>
        <details class="group bg-transparent border border-primary rounded-lg overflow-hidden">
          <summary
            class="flex justify-between items-center px-4 py-3 cursor-pointer text-lg font-medium text-gray-800 group-open:bg-primary group-open:text-white transition-all"
          >
          Seyahat sağlık sigortasının süresi ne kadar oluyor?
            <span class="text-xl">+</span>
          </summary>
          <p class="px-4 py-3 text-gray-700">
            Seyahat planınızın süresine uygun sürede olmaktadır.
          </p>
        </details>
        <details class="group bg-transparent border border-primary rounded-lg overflow-hidden">
          <summary
            class="flex justify-between items-center px-4 py-3 cursor-pointer text-lg font-medium text-gray-800 group-open:bg-primary group-open:text-white transition-all"
          >
          18 yaşından küçüğüm, vize alabiliyor muyum?
            <span class="text-xl">+</span>
          </summary>
          <p class="px-4 py-3 text-gray-700">
            Anne ve babadan muvaffakatname olursa evet alabiliyoruz.
          </p>
        </details>

      </div>
    </div>

    <div
      class="w-full max-w-2xl bg-second/10 backdrop-blur-md rounded-lg shadow-xl p-6 mt-6 flex flex-col items-center text-center"
    >
      <img src="@/assets/images/logo/logo.png" class="w-16 mb-4" alt="Logo" />
      <h2 class="text-xl font-semibold text-gray-800">
        Bize Sormak İstediğiniz Bir Sorunuz Var mı?
      </h2>
      <p class="text-gray-600 mt-2">Vize uzmanlarımıza sorun.</p>
      <RouterLink
        to="/contact"
        class="mt-4 px-6 py-2 bg-primary text-second font-medium rounded-lg shadow-md hover:bg-blue-600 transition-all"
      >
        Vize Uzmanına Sorun
      </RouterLink>
    </div>
  </div>

  <!-- footer  -->
  <FooterComponent />
</template>
