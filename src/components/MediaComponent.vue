<template>
  <div class="fixed right-2 bottom-1/2 translate-y-1/2 z-50">
    <ul
      class="bg-second/80 backdrop-blur-md rounded-l-xl p-4 flex flex-col items-center space-y-4 shadow-lg"
    >
      <li>
        <a
          href="http://wa.me/4915122407050"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary hover:text-green-500 transition"
          aria-label="WhatsApp"
        >
          <box-icon type="logo" name="whatsapp" size="md"></box-icon>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/mave.jm?igsh=NnB3amQ3ZDJ4NWE5&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary hover:text-pink-500 transition"
          aria-label="Instagram"
        >
          <box-icon name="instagram" type="logo" size="md"></box-icon>
        </a>
      </li>
      <li>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary hover:text-blue-600 transition"
          aria-label="Facebook"
        >
          <box-icon name="meta" type="logo" size="md"></box-icon>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@media (max-width: 640px) {
  .fixed {
    right: 0.5rem;
    bottom: 1rem;
    transform: none;
  }

  ul {
    flex-direction: row;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    gap: 1rem;
  }

  li {
    margin: 0 !important;
  }
}
</style>