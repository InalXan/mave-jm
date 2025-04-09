<script setup>
import { ref } from 'vue'
import { sendMessage } from '@/api/useMessage'
import FixedUtil from '@/utils/FixedUtil.vue'
import FooterComponent from '@/components/FooterComponent.vue'

// Form verileri
const form = ref({
  name: '',
  number: '',
  email: '',
  message: '',
})

// Gönderim durumu
const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// Formu API'ye gönderme işlevi
const submitForm = async () => {
  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    await sendMessage(form.value)
    successMessage.value = 'Mesajınız başarıyla gönderildi!'
    form.value = { name: '', number: '', email: '', message: '' } // Formu sıfırla
  } catch (error) {
    errorMessage.value = 'Mesaj gönderilirken bir hata oluştu.'
    console.error('API Hatası:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
<template>
  <FixedUtil />
  <section class="text-primary py-8 body-font relative">
    <div class="absolute inset-0 bg-second">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.540451248867!2d11.581255575649246!3d48.13838505110585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e758930fbdc47%3A0x9c34ed51dd835782!2sMaximilianstra%C3%9Fe%2C%20M%C3%BCnchen-Altstadt-Lehel%2C%20Almanya!5e0!3m2!1str!2str!4v1742686166804!5m2!1str!2str"
        style=""
      ></iframe>
    </div>
    <form action="" @submit.prevent="submitForm">
      <div class="container px-5 py-24 mx-auto flex">
        <div
          class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
        >
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Kurumsal İletişim</h2>
          <p class="leading-relaxed mb-5 text-gray-600">Bizimle partner olmak istermisiniz?</p>
          <a href="https://maps.app.goo.gl/kcjwjV6qvfBDZoqB8" class="flex">
            <box-icon name='map' type='solid' color="brown"></box-icon>
            Maximilian Straße number :9 , Post Code : 80331 München
          </a>
          <div class="relative mb-4">
            <label for="companyName" class="leading-7 text-sm text-primary">Şirketin adı</label>
            <input
              type="text"
              id="companyName"
              v-model="form.name"
              name="companyName"
              class="w-full bg-white rounded border border-primary focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="companyName" class="leading-7 text-sm text-primary"
              >İletişim numarası</label
            >
            <input
              type="number"
              inputmode="numeric"
              id="companyName"
              v-model="form.number"
              name="companyName"
              class="w-full bg-white rounded border border-primary focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-primary">Email</label>
            <input
              type="email"
              v-model="form.email"
              id="email"
              name="email"
              class="w-full bg-second rounded border border-primary focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-primary">Mesaj</label>
            <textarea
              id="message"
              v-model="form.message"
              name="message"
              class="w-full bg-second rounded border border-primary focus:border-primary focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-primary py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            :disabled="isSubmitting"
            class="text-second bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            {{ isSubmitting ? 'Gönderiliyor...' : 'Gönder' }}
          </button>

          <!-- Başarı & Hata Mesajları -->
          <p v-if="successMessage" class="text-xs text-gray-500 mt-3">{{ successMessage }}</p>
          <p v-if="errorMessage" class="text-xs text-gray-500 mt-3">{{ errorMessage }}</p>
        </div>
      </div>
    </form>
  </section>

  <!-- footer  -->
  <FooterComponent />
</template>
