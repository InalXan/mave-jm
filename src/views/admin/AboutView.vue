<template>
  <!-- side bar  -->
  <SidebarComponent />
  <div class="sm:w-[95%] w-[85%] float-end min-h-screen">
    <div class="w-full min-h-screen">
      <div class="bg-gray-100">
        <div
          class="header bg-second h-16 px-10 py-8 border-b-2 border-gray-200 flex items-center justify-between"
        >
          <div class="flex items-center space-x-2 text-gray-400">
            <span class="text-primary tracking-wider font-thin text-md"><a href="#">Home</a></span>
            <span>/</span>
            <span class="tracking-wide text-md">
              <span class="text-base">About</span>
            </span>
            <span>/</span>
          </div>
        </div>
        <div class="header my-3 h-12 px-10 flex items-center justify-between">
          <h1 class="font-medium text-2xl">About</h1>

          <h2>{{ selectedContent ? 'İçeriği Güncelle' : 'Yeni İçerik Ekle' }}</h2>
        </div>
        <div class="flex flex-col mx-3 mt-6 lg:flex-row">
          <div class="w-full lg:w-1/3 m-1">
            <form @submit.prevent="handleSubmit" class="w-full bg-white shadow-md p-6">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-full px-3 mb-6">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                    htmlFor="category_name"
                    >Category Name</label
                  >
                  <input
                    v-model="title"
                    class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
                    type="text"
                    name="name"
                    placeholder="Category Name"
                    required
                  />
                </div>
                <div class="w-full px-3 mb-6">
                  <textarea
                    v-model="description"
                    textarea
                    rows="4"
                    class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
                    type="text"
                    name="description"
                    required
                  >
                  </textarea>
                </div>

                <div class="w-full md:w-full px-3 mb-6">
                  <button
                    class="appearance-none block w-full bg-primary text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-primary/50 focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    {{ selectedContent ? 'Güncelle' : 'Ekle' }}
                  </button>
                  <button
                    v-if="selectedContent"
                    @click="selectedContent = null, title = '', description = ''
                    "
                    type="button"
                    class="cancel"
                  >
                    İptal
                  </button>
                </div>

                <div class="w-full px-3 mb-8">
                  <label
                    class="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary bg-second p-6 text-center"
                    htmlFor="dropzone-file"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>

                    <h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">
                      Category image
                    </h2>

                    <p class="mt-2 text-gray-500 tracking-wide">
                      Upload or drag & drop your file SVG, PNG, JPG or GIF.
                    </p>

                    <input
                      id="dropzone-file"
                      type="file"
                      class="hidden"
                      name="category_image"
                      accept="image/png, image/jpeg, image/webp"
                    />
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div
            class="w-full lg:w-2/3 m-1 bg-second shadow-lg text-lg rounded-sm border border-gray-200"
          >
            <div class="overflow-x-auto rounded-lg p-3">
              <table class="table-auto w-full">
                <thead class="text-sm font-semibold uppercase text-gray-800 bg-gray-50 mx-auto">
                  <tr>
                    <th></th>
                    <th>
                      <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5 h-5 mx-auto">
                        <path
                          d="M6 22h12a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm7-18 5 5h-5V4zm-4.5 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8.5 11zm.5 5 1.597 1.363L13 13l4 6H7l2-3z"
                        ></path>
                      </svg>
                    </th>
                    <th class="p-2">
                      <div class="font-semibold">About</div>
                    </th>
                    <th class="p-2">
                      <div class="font-semibold text-left">Description</div>
                    </th>
                    <th class="p-2">
                      <div class="font-semibold text-center">Action</div>
                    </th>
                  </tr>
                  <tr v-for="content in contents" :key="content._id">
                    <td>&</td>
                    <td><img src="@/assets/images/logo/logo.png" class="h-8 w-8 mx-auto" /></td>
                    <td>{{ content.title }}</td>
                    <td>{{ content.description }}</td>
                    <td class="p-2">
                      <div class="flex justify-center">
                        <button
                          @click="handleEdit(content)"
                          class="rounded-md hover:bg-primary/60 text-primary cursor-pointer p-2 flex justify-between items-center"
                        >
                          <span><FaEdit class="w-4 h-4 mr-1" /> </span> Edit
                        </button>
                        <button
                          class="rounded-md hover:bg-[crimson] text-[crimson] hover:text-[crimson] hover:text-second cursor-pointer p-2 flex justify-between items-center"
                          @click="handleDelete(content._id)"
                        >
                          <span><FaTrash class="w-4 h-4 mr-1" /></span> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
        <!-- mission section  -->
        <MissionUtil />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { getAllContent, createContent, updateContent, deleteContent } from '@/api/useAbout'
import SidebarComponent from '@/components/SidebarComponent.vue'
import MissionUtil from '@/utils/admin/MissionUtil.vue'
// İçerik listesi
const contents = ref([])
const selectedContent = ref(null)
const title = ref('')
const description = ref('')
let index = ref(0)

// İçerikleri API'den çekme
const fetchContents = async () => {
  contents.value = await getAllContent()
}

// Yeni içerik ekleme veya güncelleme
const handleSubmit = async () => {
  if (selectedContent.value) {
    await updateContent(selectedContent.value._id, {
      title: title.value,
      description: description.value,
    })
  } else {
    await createContent({ title: title.value, description: description.value })
  }

  title.value = ''
  description.value = ''
  selectedContent.value = null
  fetchContents()
}

// İçeriği düzenleme
const handleEdit = (content) => {
  selectedContent.value = content
  title.value = content.title
  description.value = content.description
}

// İçeriği silme
const handleDelete = async (id) => {
  if (confirm('Bu içeriği silmek istediğine emin misin?')) {
    await deleteContent(id)
    fetchContents()
  }
}

// Sayfa yüklendiğinde içerikleri çek
onMounted(fetchContents)
</script>
