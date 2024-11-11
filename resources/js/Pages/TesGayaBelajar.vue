<script>
import HeaderContent from '@/components/HeaderContent.vue';
import FooterContent from '@/components/FooterContent.vue';

export default {
  components: {
    HeaderContent,
    FooterContent,
  },
  methods: {
    startTest() {
      console.log('Tes dimulai!');
      // Arahkan ke halaman tes atau lakukan aksi lainnya
    },
  },
};
</script>

<style scoped>
/* Tambahkan CSS khusus di sini jika diperlukan */
</style>

<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderContent />

    <!-- Hero Section -->
    <section class="container max-w-6xl mx-auto px-4 py-8 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="text-center md:text-left">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            StudySync
          </h1>
          <p class="text-gray-600 mb-8 text-lg">
            Temukan gaya belajar yang paling cocok untuk Anda! Ikuti tes ini untuk mendapatkan wawasan tentang cara belajar yang paling efektif.
          </p>
          <button 
            @click="startTest" 
            class="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Mulai Tes
          </button>
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

    <!-- Informational Section -->
    <section class="max-w-6xl mx-auto px-4 py-16 bg-white">
      <h2 class="text-2xl md:text-3xl font-semibold text-center mb-12">Kenapa Tes Gaya Belajar?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Info 1 -->
        <div class="bg-blue-100 p-8 rounded-xl text-center transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
          <div class="inline-block p-4 bg-blue-500 rounded-full mb-6">
            <i class="fas fa-brain text-white text-3xl"></i>
          </div>
          <h3 class="text-xl font-semibold mb-4">Kenali Diri Anda</h3>
          <p class="text-gray-600">Dapatkan pemahaman lebih baik tentang cara belajar yang sesuai dengan karakteristik Anda.</p>
        </div>

        <!-- Info 2 -->
        <div class="bg-blue-100 p-8 rounded-xl text-center transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
          <div class="inline-block p-4 bg-blue-500 rounded-full mb-6">
            <i class="fas fa-chart-line text-white text-3xl"></i>
          </div>
          <h3 class="text-xl font-semibold mb-4">Tingkatkan Efektivitas</h3>
          <p class="text-gray-600">Metode belajar yang tepat dapat meningkatkan hasil belajar secara signifikan.</p>
        </div>

        <!-- Info 3 -->
        <div class="bg-blue-100 p-8 rounded-xl text-center transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
          <div class="inline-block p-4 bg-blue-500 rounded-full mb-6">
            <i class="fas fa-trophy text-white text-3xl"></i>
          </div>
          <h3 class="text-xl font-semibold mb-4">Capai Kesuksesan</h3>
          <p class="text-gray-600">Metode belajar yang efektif akan membantu Anda mencapai tujuan akademik lebih cepat.</p>
        </div>
      </div>
    </section>

    <FooterContent />
  </div>
</template>
