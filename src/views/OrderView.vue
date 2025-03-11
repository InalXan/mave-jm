<script setup>
import FixedUtil from '@/utils/FixedUtil.vue';
</script>

<template>
    <FixedUtil />
    <section class="bg-second text-primary py-36 relative">
        <div class="container mx-auto px-6 max-w-6xl flex flex-wrap justify-between items-center">
            <!-- Left Section -->
            <div class="w-full lg:w-1/2 p-8 text-center lg:text-left">
                <h4 class="text-gray-800 font-semibold text-sm tracking-wide">PROFESYONEL HİZMET BAŞVURUSU</h4>
                <h2 class="text-3xl font-semibold mt-2 text-gray-900">MAVE-JM</h2>
                <h1 class="text-5xl font-bold mt-4 leading-snug text-gray-900">Formu doldurarak <br> hayallerinize bir adım daha yaklaşın</h1>
                <div class="w-24 h-1 bg-gray-800 my-6"></div>
                <h2 class="text-xl font-semibold text-gray-700">VISA</h2>
            </div>

            <!-- Form Section -->
            <form class="w-full lg:w-1/2 bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-xl text-gray-900">
                <h2 class="text-2xl font-bold text-gray-900 text-center">Başvuru Formu</h2>
                <p class="text-gray-600 text-sm mt-2 text-center">Taksitle ödeme imkanı kazanın</p>
                <div class="mt-6 space-y-5">
                    <input type="text" placeholder="Adınız" required class="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                    <input type="text" placeholder="Soyadınız" required class="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                    <select name="service" class="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                        <option value="">Hizmet Türünü Seçin</option>
                        <option value="1">Mimarlık</option>
                        <option value="2">İç Tasarım</option>
                        <option value="3">Danışmanlık</option>
                    </select>
                    <input type="number" placeholder="Kimlik Numarası" required class="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                    <input type="email" placeholder="E-posta Adresiniz" required class="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                    <input type="tel" placeholder="Telefon Numaranız" required class="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                </div>
                <label class="flex items-center mt-5 text-sm text-gray-600">
                    <input type="checkbox" class="w-5 h-5 text-primary border-gray-400 rounded-md">
                    <span class="ml-3">Gizlilik politikalarını ve veri kullanım şartlarını kabul ediyorum</span>
                </label>
                <button type="submit" class="w-full mt-6 bg-primary text-white font-semibold py-4 rounded-xl hover:bg-primary/80 transition-all duration-300 shadow-md">Gönder</button>
            </form>
        </div>
    </section>
</template>