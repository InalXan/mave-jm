<template>
  <footer class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="lg:flex lg:items-start lg:gap-8">
        <div class="text-teal-600">
          <img src="@/assets/images/logo/logo.png" class="w-28" alt="">
        </div>
  
        <div class="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
          <div class="col-span-2">
            <div>
              <h2 class="text-2xl font-bold text-gray-900">
                Hayalleriniz bizimle gerçekleşsin</h2>
            </div>
          </div>
  
          <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">
            
          </div>
  
          <div class="col-span-2 sm:col-span-1">
            <p class="font-medium text-gray-900">Hizmetlerimiz</p>
  
            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <RouterLink to="/order-visa" class="text-gray-700 transition hover:opacity-75"> Başvuru yap </RouterLink>
              </li>
  
              <li>
                <RouterLink to="/questions" class="text-gray-700 transition hover:opacity-75">Sıkca sorulan sorular  </RouterLink>
              </li>
  
              <li>
                <RouterLink to="/truck-visa" class="text-gray-700 transition hover:opacity-75"> Tır şöförü vizesi </RouterLink>
              </li>
  
              <li>
                <RouterLink to="/" class="text-gray-700 transition hover:opacity-75"> Hizmet verdiğimiz ülkeler </RouterLink>
              </li>
            </ul>
          </div>
  
          <div class="col-span-2 sm:col-span-1">
            <p class="font-medium text-gray-900">Ajansımız</p>
  
            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <RouterLink to="/about" class="text-gray-700 transition hover:opacity-75"> Hakkımızda </RouterLink>
              </li>
  
              <li>
                <RouterLink to="/how-can-i-get-visa" class="text-gray-700 transition hover:opacity-75"> Nasıl vize alırım </RouterLink>
              </li>
  
              <li>
                <RouterLink to="/advantages" class="text-gray-700 transition hover:opacity-75">Sunduğumuz avantajlar </RouterLink>
              </li>
            </ul>
          </div>
  
          <div class="col-span-2 sm:col-span-1">
            <p class="font-medium text-gray-900">Yardımcı linkler</p>
  
            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" class="text-gray-700 transition hover:opacity-75"> Kurumsal iletişim </a>
              </li>
              </ul>
          </div>
  
          <div class="col-span-2 sm:col-span-1">
            <p class="font-medium text-gray-900">Address</p>
  
            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <a href="https://maps.app.goo.gl/kcjwjV6qvfBDZoqB8" class="flex items-starttext-gray-700 transition hover:opacity-75"> <box-icon class="w-12 h-12" name='current-location' ></box-icon> Maximilianstr. 9 
80331 München
  </a>
              </li>
  
              <li>
                <a href="tel:4915122407050" class="flex items-starttext-gray-700 transition hover:opacity-75"> <box-icon name='phone' type='solid' ></box-icon> +49 151 224 070 50 </a>
              </li>
  
             
            </ul>
          </div>
  
    
  
         
        </div>
      </div>
  
      <div class="mt-8 border-t border-gray-100 pt-8">
        <div class="sm:flex sm:justify-between">
          <p class="text-xs text-gray-500">&copy; 2025. Layoutlore LLC. All rights reserved.</p>
  
          <ul class="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
            <li>
              <a href="#" class="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
            </li>
  
            <li>
              <a href="#" class="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
            </li>
  
            <li>
              <a href="#" class="text-gray-500 transition hover:opacity-75"> Cookies </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>