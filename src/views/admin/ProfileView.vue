<template>
  <!-- side bar  -->
  <SidebarComponent />
  <div class="sm:w-[95%] w-[85%] float-end min-h-screen">
    <!-- profile  -->
    <div class="w-full flex justify-center items-center">
      <!-- defualt theme -->
      <div class="max-w-3xl w-full mx-auto z-10">
        <div class="flex flex-col">
          <div
            class="bg-second/10 backdrop-blur-md border border-primary shadow-lg rounded-3xl p-4 m-4"
          >
            <div class="flex-none sm:flex">
              <div class="relative h-32 w-32 sm:mb-0 mb-3">
                <img
                  src="@/assets/images/logo/logo.png"
                  alt="aji"
                  class="w-32 h-32 object-cover rounded-2xl"
                />
              </div>
              <div class="flex-auto sm:ml-5 justify-evenly">
                <div class="flex items-center justify-between sm:mt-2">
                  <div class="flex items-center">
                    <div class="flex flex-col">
                      <div class="w-full flex text-lg text-primary font-bold leading-none m-2">
                        <h1>mave-jm admin kullanicisi</h1>
                        <span class="text-gray-400 mx-2">#info@mave-jm.com</span>
                      </div>
                      <div class="flex-auto text-gray-500 my-1">
                        <span class="mr-3">Yetki</span
                        ><span class="mr-3 border-r border-primary max-h-0"></span><span>Tam</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row items-center">
                  <div class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5 text-primary"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5 text-primary"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5 text-primary"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5 text-primary"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5 text-primary"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
									stroke="currentColor" class="h-5 w-5 text-yellow-500">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
										d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
									</path>
								</svg> -->
                  </div>
                </div>
                <div class="flex flex-wrap pt-2 text-sm text-gray-500">
                  <div class="flex-1 inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                      ></path>
                    </svg>
                    <p class="">{{ stats.totalVisits }} Toplam ziyaretciler</p>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p class="">{{ stats.uniqueVisitors }} Su anda ziyaret edenler</p>
                  </div>
                  <a
                    href="https://layoutlore.com"
                    class="flex justify-center items-center bg-primary hover:bg-primary/70 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-primary/50 hover:border-primary cursor-pointer text-second rounded-full transition ease-in duration-300"
                    >layoutlore LLC <ion-icon class="text-xl" name="arrow-forward-circle"></ion-icon
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- stats  -->
    <div class="flex items-center w-full bg-gray-200 text-gray-800">
      <div class="p-4 w-full">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 sm:col-span-6 md:col-span-3">
            <div class="flex flex-row bg-white shadow-sm rounded p-4">
              <div
                class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col flex-grow ml-4">
                <div class="text-sm text-gray-500">Toplam ziyaretci</div>
                <div class="font-bold text-lg">{{ stats.totalVisits }}</div>
              </div>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6 md:col-span-3">
            <div class="flex flex-row bg-white shadow-sm rounded p-4">
              <div
                class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-100 text-orange-500"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col flex-grow ml-4">
                <div class="text-sm text-gray-500">New Clients</div>
                <div class="font-bold text-lg">{{ stats.totalVisits }}</div>
              </div>
            </div>
          </div>

          <div class="col-span-12 sm:col-span-6 md:col-span-3">
            <div class="flex flex-row bg-white shadow-sm rounded p-4">
              <div
                class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 text-green-500"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col flex-grow ml-4">
                <div class="text-sm text-gray-500">Paylasilan icerikler</div>
                <div class="font-bold text-lg">{{ stats.uniqueVisitors }}</div>
              </div>
            </div>
          </div>
          <div class="col-span-12 sm:col-span-6 md:col-span-3">
            <div class="flex flex-row bg-white shadow-sm rounded p-4">
              <div
                class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-red-500"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- guide section  -->
    <section class="py-20 bg-white">
      <div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
        <div class="relative">
          <h2 class="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
            İnternetde yeni devrim
          </h2>
          <p class="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">
            Herşey bizimle daha kolay
          </p>
        </div>
        <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
          <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
            <img
              class="rounded-lg shadow-xl"
              src="https://cdn.devdojo.com/images/december2020/dashboard-011.png"
              alt=""
            />
          </div>
          <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
            <p class="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
              Kullanım rahatlığı
            </p>
            <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Bizimle yüksek kullanım rahatlığına ulaşın</h3>
            <p class="mt-5 text-lg text-gray-700 text md:text-left">
              Sizin için kolay erişile bilir menü ve şablonlar tasarladık. Yardıma ihtiyacınız olmadan internet sitenizi kolaylıkla yönetin.
            </p>
          </div>
        </div>
        <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
          <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
            <img
              class="rounded-lg shadow-xl"
              src="https://cdn.devdojo.com/images/december2020/dashboard-04.png"
              alt=""
            />
          </div>
          <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
            <p class="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
              Yüksek performans
            </p>
            <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Yüksek performanse ve anında erişim</h3>
            <p class="mt-5 text-lg text-gray-700 text md:text-left">
              Müşterileriniz ve sizin için getirdiğimiz yüksek performansla işlerinizi gecikmeden yürütmenizi sağladık.
            </p>
          </div>
        </div>
        <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
          <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
            <img
              class="rounded-lg shadow-xl"
              src="https://cdn.devdojo.com/images/december2020/dashboard-03.png"
              alt=""
            />
          </div>
          <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
            <p class="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
              Kolay yönetim
            </p>
            <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Bizimle şirketinizi tek tıkta yönete bilirsiniz</h3>
            <p class="mt-5 text-lg text-gray-700 text md:text-left">
              İş pilanlamalarınız ve hizmet şablonlarınızı, gelir gider tablolarınızı bizimle daha gelişmiş teknoloji ile yönete bilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import useVisit from '@/api/useVisit'
import SidebarComponent from '@/components/SidebarComponent.vue'

const stats = ref({ totalVisits: 0, uniqueVisitors: 0 })

onMounted(async () => {
  const response = await useVisit.get('/admin/stats')
  stats.value = response.data
})
</script>
