<script>
import HeaderContent from '@/Components/HeaderContent.vue';
import FooterContent from '@/Components/FooterContent.vue';


export default {
  components: {
    HeaderContent,
    FooterContent,
  },
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>

<template>
    <div class="min-h-screen bg-gray-50">
      <HeaderContent />
  
      <!-- Hero Section -->
      <section class="container max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="text-center md:text-left">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Cari tahu gaya belajarmu sekarang!
            </h1>
            <p class="text-gray-600 mb-8 text-lg">
              Temukan metode belajar yang paling sesuai dengan karakteristik Anda untuk hasil yang optimal.
            </p>
            <router-link 
              to="/tes-gaya-belajar" 
              class="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Mulai Sekarang
            </router-link>
          </div>
          <div class="flex justify-center items-center">
            <div class="relative w-full max-w-md">
              <svg width="100%" height="100%" viewBox="0 0 1920 952" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
                <rect width="1920" height="952" fill="white" fill-opacity="0.8"/>
                <rect width="1920" height="952" fill="url(#paint0_linear)" fill-opacity="0.2"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="1065.5" y1="1533.5" x2="1192" y2="396" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4A90E2" stop-opacity="0"/>
                    <stop offset="0.585" stop-color="#0075FF" stop-opacity="0.73125"/>
                    <stop offset="0.8" stop-color="#4A90E2"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Features Section -->
      <section class="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 class="text-2xl md:text-3xl font-semibold text-center mb-12">Kelebihan StudySync</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-blue-100 p-8 rounded-xl text-center transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="inline-block p-4 bg-blue-500 rounded-full mb-6">
              <i class="fas fa-book text-white text-3xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">Informatif</h3>
            <p class="text-gray-600">Dapatkan informasi mendalam tentang gaya belajar yang sesuai dengan karakteristik Anda.</p>
          </div>
          
          <!-- Feature 2 -->
          <div class="bg-blue-100 p-8 rounded-xl text-center transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="inline-block p-4 bg-blue-500 rounded-full mb-6">
              <i class="fas fa-users text-white text-3xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">Personalisasi</h3>
            <p class="text-gray-600">Solusi pembelajaran yang disesuaikan dengan kebutuhan individual Anda.</p>
          </div>
          
          <!-- Feature 3 -->
          <div class="bg-blue-100 p-8 rounded-xl text-center transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="inline-block p-4 bg-blue-500 rounded-full mb-6">
              <i class="fas fa-clock text-white text-3xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">Efisien</h3>
            <p class="text-gray-600">Hemat waktu dengan metode belajar yang tepat dan terarah.</p>
          </div>
        </div>
      </section>

      <!-- Feature 1 -->
    <section class="flex flex-col w-full bg-white bg-opacity-80 max-md:max-w-full">
      <div class="flex flex-col justify-center items-center px-20 py-72 w-full bg-white bg-opacity-80 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div class="flex flex-col mb-0 ml-14 max-w-full w-[1131px] max-md:mb-2.5">
          <div class="max-w-full w-[504px]">
            <div class="flex gap-5 max-md:flex-col">
              <div class="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9366db073a052b7551ffd94ac58ac3d421b6c41fcb84e3277a596e93c8a8131b?placeholderIfAbsent=true&apiKey=4403a8f96f2f4610a2aa817af3063966" alt="Visual learning concept illustration" class="object-contain grow w-full aspect-square max-md:mt-9" />
              </div>
              <div class="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                <h1 class="mt-40 text-7xl font-semibold text-blue-500 max-md:mt-10 max-md:text-4xl">
                  Visual
                </h1>
              </div>
            </div>
          </div>
          <p class="mt-7 text-4xl text-blue-500 max-md:max-w-full">
            Seseorang dengan gaya belajar visual mengandalkan penglihatan sebagai cara utama untuk memahami informasi. Orang dengan gaya ini cenderung lebih mudah memahami grafik, diagram, gambar, dan video.
          </p>
        </div>
      </div>
    </section>


  
      <FooterContent />
    </div>
  </template>
  
