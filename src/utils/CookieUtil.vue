<template>
  <div
    v-if="showCookieBanner"
    class="fixed bottom-4 z-50 left-0 w-full bg-white border-t border-gray-200 shadow"
  >
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
      <p class="text-sm text-gray-700">
        We use cookies to ensure you get the best experience on our website. Learn more
        <a href="www.mave-jm.com" class="text-primary">here</a>.
      </p>
      <div class="flex space-x-4">
        <button
          @click="acceptCookies"
          class="px-4 py-1.5 bg-primary text-white rounded hover:bg-primary/80 transition duration-300 ease-in-out"
        >
          Accept
        </button>
        <button
          @click="declineCookies"
          class="px-4 py-1.5 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-300 ease-in-out"
        >
          Decline
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCookieBanner: true,
    }
  },
  created() {
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (cookieConsent) {
      this.showCookieBanner = false
    }
  },
  methods: {
    acceptCookies() {
      localStorage.setItem('cookieConsent', 'accepted')
      this.showCookieBanner = false
    },
    declineCookies() {
      localStorage.setItem('cookieConsent', 'declined')
      this.showCookieBanner = false
    },
  },
}
</script>
