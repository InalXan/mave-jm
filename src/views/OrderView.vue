Copy
<template>
  <FixedUtil />
  <section
    class="bg-[url('@/assets/images/order/bg.jpg')] bg-center bg-cover text-primary py-16 md:py-36 relative"
  >
    <div
      class="container mx-auto rounded-3xl bg-second/70 backdrop-blur-md px-4 sm:px-6 max-w-6xl flex flex-wrap justify-between"
    >
      <!-- Left Section -->
      <div class="w-full lg:w-1/2 p-4 md:p-8 text-center lg:text-left">
        <div class="w-full flex justify-center items-center">
          <img 
            src="@/assets/images/about/about.png" 
            class="rounded-3xl my-5 w-full max-w-md" 
            alt="About Mave JM" 
          />
        </div>
        <h4 class="text-lg font-semibold tracking-wide uppercase">
          Formu doldurarak hayallerinize bir adim daha
        </h4>
        <h2 class="text-3xl md:text-4xl font-bold mt-2">yaklaşın</h2>
        <div class="w-24 h-1 bg-primary my-4 md:my-6 mx-auto lg:mx-0"></div>
        <div class="mt-6 bg-primary p-4 md:p-6 rounded-lg shadow-lg text-second">
          <h3 class="text-xl font-semibold">İletişim Bilgileri</h3>
          <ul class="mt-3 md:mt-4 space-y-2">
            <li class="flex items-center gap-2">
              <span class="font-bold flex items-center gap-2">
                <box-icon type='solid' name='phone' color="white"></box-icon> 
                Telefon:
              </span>
              <a href="tel:4915122407050" class="text-second hover:underline">+49 151 224 070 50</a>
            </li>
            <li class="flex items-center gap-2">
              <span class="font-bold flex items-center gap-2">
                <box-icon name='envelope' type='solid' color="white"></box-icon> 
                Email:
              </span>
              <a href="mailto:info@mave-jm.com" class="text-second hover:underline">
                info@mave-jm.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Form Section -->
      <div class="w-full lg:w-1/2 p-4 md:p-8 lg:p-10 text-gray-900">
        <form @submit.prevent="submitForm" class="space-y-4 md:space-y-6">
          <!-- Name and Surname -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label class="block text-sm font-semibold mb-1">İsim*</label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Jane"
                class="w-full p-3 border-2 border-primary rounded-lg focus:ring-2 focus:ring-primary/60"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-semibold mb-1">Soyisim*</label>
              <input
                v-model="form.surname"
                type="text"
                placeholder="Doe"
                class="w-full p-3 border-2 border-primary rounded-lg focus:ring-2 focus:ring-primary/60"
                required
              />
            </div>
          </div>

          <!-- Age -->
          <div>
            <label class="block text-sm font-semibold mb-1">Yaşınız*</label>
            <input
              v-model="form.age"
              type="number"
              min="18"
              max="99"
              placeholder="35"
              class="w-full p-3 border-2 border-primary rounded-lg focus:ring-2 focus:ring-primary/60"
              required
            />
          </div>

          <!-- Country -->
          <div>
            <label class="block text-sm font-semibold mb-1">Gitmek istediğiniz ülke*</label>
            <input
              v-model="form.country"
              type="text"
              placeholder="Germany"
              class="w-full p-3 border-2 border-primary rounded-lg focus:ring-2 focus:ring-primary/60"
              required
            />
          </div>

          <!-- Visa Type -->
          <div>
            <label class="block text-sm font-semibold mb-1">Vize Türü*</label>
            <select
              v-model="form.work"
              class="w-full p-3 border-2 border-primary rounded-lg focus:ring-2 focus:ring-primary/60"
              required
            >
              <option value="" disabled selected>Seçiniz</option>
              <option value="İş">İş</option>
              <option value="Gezi">Gezi</option>
              <option value="Turistik">Turistik</option>
              <option value="Schengen">Schengen</option>
              <option value="Aile birleşimi">Aile birleşimi</option>
              <option value="Tır şoförü vizesi">Tır şoförü vizesi</option>
            </select>
          </div>

          <!-- Previous Visa -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label class="block text-sm font-semibold mb-1">Daha önce vize alındı mı?*</label>
              <select
                v-model="form.VisaData"
                class="w-full p-3 border-2 border-primary rounded-lg focus:ring-2 focus:ring-primary/60"
                required
              >
                <option value="" disabled selected>Seçiniz</option>
                <option value="Evet">Evet</option>
                <option value="Hayır">Hayır</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-semibold mb-1">Daha önce vize reddi alındı mı?*</label>
              <select
                v-model="form.disableVisaData"
                class="w-full p-3 border-2 border-primary rounded-lg focus:ring-2 focus:ring-primary/60"
                required
              >
                <option value="" disabled selected>Seçiniz</option>
                <option value="Evet">Evet</option>
                <option value="Hayır">Hayır</option>
              </select>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label class="block text-sm font-semibold mb-1">E-posta*</label>
              <input
                v-model="form.email"
                type="email"
                placeholder="john@gmail.com"
                class="w-full p-3 border-2 border-primary rounded-lg focus:ring-2 focus:ring-primary/60"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-semibold mb-1">Telefon*</label>
              <input
                v-model="form.phone"
                type="tel"
                placeholder="0 (548) 123 4567"
                class="w-full p-3 border-2 border-primary rounded-lg focus:ring-2 focus:ring-primary/60"
                required
              />
            </div>
          </div>

          <!-- Personal Info -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label class="block text-sm font-semibold mb-1">Medeni Durum*</label>
              <select
                v-model="form.married"
                class="w-full p-3 border-2 border-primary rounded-lg focus:ring-2 focus:ring-primary/60"
                required
              >
                <option value="" disabled selected>Seçiniz</option>
                <option value="Evli">Evli</option>
                <option value="Bekar">Bekar</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-semibold mb-1">Meslek*</label>
              <select
                v-model="form.job"
                class="w-full p-3 border-2 border-primary rounded-lg focus:ring-2 focus:ring-primary/60"
                required
              >
                <option value="" disabled selected>Seçiniz</option>
                <option value="Çalışan">Çalışan</option>
                <option value="İşveren">İşveren</option>
                <option value="Emekli">Emekli</option>
                <option value="Memur">Memur</option>
                <option value="Çalışmayan">Çalışmayan</option>
              </select>
            </div>
          </div>

          <!-- Work Info -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label class="block text-sm font-semibold mb-1">Çalışma Süresi*</label>
              <select
                v-model="form.careertime"
                class="w-full p-3 border-2 border-primary rounded-lg focus:ring-2 focus:ring-primary/60"
                required
              >
                <option value="" disabled selected>Seçiniz</option>
                <option value="1 yıldan az">1 yıldan az</option>
                <option value="1 yıldan fazla">1 yıldan fazla</option>
                <option value="3 yıldan fazla">3 yıldan fazla</option>
                <option value="5 yıldan fazla">5 yıldan fazla</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-semibold mb-1">Maaş bankaya yatıyor mu?*</label>
              <select
                v-model="form.profit"
                class="w-full p-3 border-2 border-primary rounded-lg focus:ring-2 focus:ring-primary/60"
                required
              >
                <option value="" disabled selected>Seçiniz</option>
                <option value="Evet">Evet</option>
                <option value="Hayır">Hayır</option>
              </select>
            </div>
          </div>

          <!-- Travel Reason -->
          <div>
            <label class="block text-sm font-semibold mb-1">Seyahat Sebebiniz*</label>
            <textarea
              v-model="form.adventure"
              rows="4"
              placeholder="Seyahat amacınızı detaylı şekilde açıklayın..."
              class="w-full p-3 border-2 border-primary rounded-lg focus:ring-2 focus:ring-primary/60"
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-primary text-second py-3 rounded-lg font-bold hover:bg-primary/80 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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

<script setup>
import { ref } from 'vue'
import { useOrder } from '@/api/useOrder'
import FixedUtil from '@/utils/FixedUtil.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const { createOrder } = useOrder()

// Form data with initial empty values
const form = ref({
  name: '',
  surname: '',
  age: '',
  country: '',
  work: '',
  VisaData: '',
  disableVisaData: '',
  email: '',
  phone: '',
  married: '',
  job: '',
  careertime: '',
  profit: '',
  adventure: '',
})

// Form submission handler
const submitForm = async () => {
  try {
    const response = await createOrder(form.value)
    console.log('Order created:', response)
    alert('Formunuz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.')
    
    // Reset form
    form.value = {
      name: '',
      surname: '',
      age: '',
      country: '',
      work: '',
      VisaData: '',
      disableVisaData: '',
      email: '',
      phone: '',
      married: '',
      job: '',
      careertime: '',
      profit: '',
      adventure: '',
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('Form gönderilirken bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyin.')
  }
}
</script>

<style scoped>
/* Custom styles for form elements */
select, input, textarea {
  transition: all 0.2s ease;
}

select:focus, input:focus, textarea:focus {
  border-color: #a86332;
  box-shadow: 0 0 0 2px rgba(168, 99, 50, 0.2);
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .rounded-3xl {
    border-radius: 1rem;
  }
}
</style>