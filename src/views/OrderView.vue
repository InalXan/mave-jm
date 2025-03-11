<script setup>
import FixedUtil from '@/utils/FixedUtil.vue';
</script>
<template>
    <FixedUtil/>
    <section class="bg-gradient-to-br from-secondary via-primary/70 to-primary text-second py-36 relative">
    <div class="container mx-auto px-6 max-w-5xl flex flex-wrap justify-between items-center">
        <div class="w-full lg:w-1/2 p-8  text-center lg:text-left">
            <h4 class="text-[#222] font-bold text-sm">PROFESIONALES CON PRINCIPIOS</h4>
            <h2 class="text-3xl font-semibold mt-2">Carrera de</h2>
            <h1 class="text-5xl font-bold mt-2 leading-tight">Arquitectura y <br> Urbanismo</h1>
            <div class="w-20 h-1 bg-[#222] my-4"></div>
            <h2 class="text-xl font-semibold">Sede Lima</h2>
        </div>
        <form class="w-full lg:w-1/2 bg-second/80 backdrop-blur-md p-8 rounded-lg shadow-lg text-gray-800">
            <h2 class="text-2xl font-semibold text-primary">Recibe asesoría</h2>
            <p class="text-gray-600 text-sm mt-2">Déjanos tus datos y un asesor resolverá tus dudas</p>
            <div class="mt-4 space-y-4">
                <input type="text" placeholder="Ingresa tu nombre" required
                    class="w-full p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary">
                <input type="text" placeholder="Ingresa tus apellidos"
                    class="w-full p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary">
                <select name="genero" id="genero"
                    class="w-full p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary">
                    <option value="">Selecciona tu género</option>
                    <option value="1">Arquitectura</option>
                </select>
                <input type="number" placeholder="Nro. documento"
                    class="w-full p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary">
                <input type="email" placeholder="Ingresa tu correo"
                    class="w-full p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary">
                <input type="number" placeholder="Ingresa tu número de celular"
                    class="w-full p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary">
            </div>
            <label class="flex items-center mt-4 text-sm text-gray-600">
                <input type="checkbox" class="w-4 h-4 text-primary border-second rounded">
                <span class="ml-2">Acepto las políticas de privacidad y uso de datos</span>
            </label>
            <button type="submit"
                class="w-full mt-6 bg-primary text-second font-semibold py-3 rounded-lg hover:bg-primary/80 cursor-pointer transition">Enviar</button>
        </form>
    </div>
</section>

</template>