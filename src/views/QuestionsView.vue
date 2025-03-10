<template>
    <!-- This is an example component -->
<div class='flex items-center justify-center min-h-screen from-purple-100 via-red-300 to-indigo-500 bg-gradient-to-br'>
    <div class='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
        <h1 class="text-xl mb-10 text-center">TAILWINDCSS ACCORDION WITH <code>&lt;details&gt; &lt;summary&gt;</code> HTML Tag</h1>
        <!-- THE ACCORDION WITH <details> <summary> HTML Tag -->
        <details class="w-full bg-white border border-blue-500 cursor-pointer mb-3">
            <summary class="w-full bg-white text-dark flex justify-between px-4 py-3  after:content-['+']">Morbi at sagittis velit</summary>
            <p class="px-4 py-3">
            Nunc posuere dapibus urna quis cursus. Mauris malesuada tincidunt diam vel placerat mi tincidunt ac. Nullam augue urna, venenatis ut blandit eget, auctor vel eros. In ut dolor ante
            </p>
        </details>

        <details class="w-full bg-white border border-blue-500 cursor-pointer mb-3">
            <summary class="w-full bg-white text-dark flex justify-between px-4 py-3 after:content-['+']">Etiam ut lacus in enim sagittis posuere at a elit</summary>
            <p class="px-4 py-3">
            Fusce sed laoreet ex. Aenean justo nisl, eleifend eget eleifend sit amet, imperdiet id libero. Suspendisse et tempus leo, et lacinia arcu. Etiam at ante in est efficitur fringilla eleifend nec tellus. Integer sed auctor lectus, nec ullamcorper arcu. Nullam nec eros elit. Nulla tempor massa ut quam elementum dignissim. Sed eu pulvinar est, vel vehicula dolor. Pellentesque in ante vel elit facilisis consectetur eu id felis
            </p>
        </details>

        <details class="w-full bg-white border border-blue-500 cursor-pointer mb-3">
            <summary class="w-full bg-white text-dark flex justify-between px-4 py-3  after:content-['+']">
            Nam auctor fringilla magna id porta
            </summary>
            <p class="px-4 py-3">
            Etiam maximus vitae eros eu vestibulum. Donec posuere, magna non tincidunt dignissim, magna tortor mollis augue, at maximus ante lacus vel tellus. Vestibulum vestibulum consectetur tortor id sagittis. Suspendisse nisi ipsum, pretium a lorem at, laoreet condimentum arcu
            </p>
        </details>

 
 </div>
</div>
</template>

       <style scoped>
       details summary::-webkit-details-marker {
       display: none;
   }

    
   details[open] summary {
       background: blue;
       color: white
   }

   details[open] summary::after {
       content: "-";
   }

   details[open] summary ~ * {
       animation: slideDown 0.3s ease-in-out;
   }

   details[open] summary p {
       opacity: 0;
       animation-name: showContent;
       animation-duration: 0.6s;
       animation-delay: 0.2s;
       animation-fill-mode: forwards;
       margin: 0;
   }

   @keyframes showContent {
       from {
       opacity: 0;
       height: 0;
       }
       to {
       opacity: 1;
       height: auto;
       }
   }
   @keyframes slideDown {
       from {
       opacity: 0;
       height: 0;
       padding: 0;
       }

       to {
       opacity: 1;
       height: auto;
       }
   }
</style>
