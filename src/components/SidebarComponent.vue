<template>
  <!-- container -->

  <aside class="flex fixed top-0 flex-col items-center bg-second text-gray-700 shadow h-full">
    <!-- Side Nav Bar-->

    <div class="h-16 flex items-center w-full">
      <!-- Logo Section -->
      <RouterLink class="h-12 w-12 mx-auto" to="/mave/admin/profile">
        <img
          class="h-12 w-12 mx-auto"
          src="@/assets/images/admin/layoutlore/single.png"
          alt="svelte logo"
        />
      </RouterLink>
    </div>

    <ul>
      <!-- Items Section -->

      <li class="hover:bg-gray-100">
        <RouterLink
          to="/mave/admin/profile"
          class="h-16 px-6 flex justify-center items-center w-full focus:text-primary"
        >
          <box-icon name="home-smile" type="solid"></box-icon>
        </RouterLink>
      </li>
      <li class="hover:bg-gray-100">
        <RouterLink
          to="/mave/admin/inbox"
          class="h-16 px-6 flex flex justify-center items-center w-full focus:text-primary"
        >
          <box-icon type="solid" name="inbox"></box-icon>
        </RouterLink>
      </li>
      <li class="hover:bg-gray-100">
        <a href="." class="h-16 px-6 flex justify-center items-center w-full focus:text-primary">
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path
              d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2
							0 0 1 2-2h4a2 2 0 0 1 2 2v2"
            ></path>
          </svg>
        </a>
      </li>

      <li class="hover:bg-gray-100">
        <a
          href="."
          class="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500"
        >
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path
              d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0
							2-1.61L23 6H6"
            ></path>
          </svg>
        </a>
      </li>

      <li class="hover:bg-gray-100">
        <RouterLink
          to="/mave/admin/about"
          class="h-16 px-6 flex flex justify-center items-center w-full focus:text-primary"
        >
          <box-icon name="question-mark"></box-icon>
        </RouterLink>
      </li>

      <li class="hover:bg-gray-100">
        <RouterLink
          to="/mave/admin/corporative"
          class="h-16 px-6 flex justify-center items-center w-full focus:text-primary"
        >
          <box-icon name="bell" animation="tada"></box-icon>
        </RouterLink>
      </li>
    </ul>

    <div class="mt-auto h-16 flex items-center w-full">
      <!-- Action Section -->
      <button
        @click="logout"
        class="h-16 w-10 mx-auto flex flex justify-center items-center w-full focus:text-primary hover:bg-primary/80 cursor-pointer transition-all text-[crimson] hover:text-second focus:outline-none"
      >
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      </button>
    </div>
  </aside>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('accessToken')
  router.push('/mave/admin/login')
}
</script>
