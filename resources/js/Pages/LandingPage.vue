<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <HeaderContent />

    <!-- Hero Section -->
    <section class="container max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <!-- Text Section -->
        <div class="text-center md:text-left space-y-6">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Cari tahu gaya <span class="text-blue-500">belajarmu</span> sekarang!
          </h1>
          <p class="text-gray-600 text-lg md:text-xl">
            Temukan metode belajar yang paling sesuai dengan karakteristik Anda untuk hasil yang optimal.
          </p>
          <a 
         href="/tesgayabelajar" 
         class="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
         Mulai Sekarang
        </a>
        </div>

        <!-- Image Section -->
        <div class="transform hover:scale-105 transition-transform duration-500">
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/65032957f6f64a9f7b3a969be2cd8bd8b6d9096a8b9aac1efac2cd59306b4e46" 
            alt="Illustration of learning styles" 
            class="object-contain w-full" 
          />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gradient-to-b from-white to-blue-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Kelebihan StudySync</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-white p-8 rounded-2xl text-center transform transition duration-300 hover:shadow-xl hover:-translate-y-2 border border-blue-100">
            <div class="inline-block p-4 bg-blue-500 rounded-full mb-6">
              <i class="fas fa-book text-white text-3xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">Informatif</h3>
            <p class="text-gray-600">Dapatkan informasi mendalam tentang gaya belajar yang sesuai dengan karakteristik Anda.</p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-white p-8 rounded-2xl text-center transform transition duration-300 hover:shadow-xl hover:-translate-y-2 border border-blue-100">
            <div class="inline-block p-4 bg-blue-500 rounded-full mb-6">
              <i class="fas fa-users text-white text-3xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">Personalisasi</h3>
            <p class="text-gray-600">Solusi pembelajaran yang disesuaikan dengan kebutuhan individual Anda.</p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-white p-8 rounded-2xl text-center transform transition duration-300 hover:shadow-xl hover:-translate-y-2 border border-blue-100">
            <div class="inline-block p-4 bg-blue-500 rounded-full mb-6">
              <i class="fas fa-clock text-white text-3xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">Efisien</h3>
            <p class="text-gray-600">Hemat waktu dengan metode belajar yang tepat dan terarah.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Styles Carousel -->
    <section class="py-20 bg-[#EEF3FF]">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Kenali Gaya Belajar</h2>
        
        <!-- Carousel Component -->
        <div class="relative w-full">
          <div class="overflow-hidden">
            <div class="flex transition-transform duration-300 ease-in-out" 
                 :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
              
              <!-- Visual Slide -->
              <div class="w-full flex-shrink-0 px-4">
                <div class="max-w-4xl mx-auto">
                  <div class="flex flex-col md:flex-row items-center gap-8">
                    <div class="md:w-1/2">
                      <img 
                        src="/images/visual.png"
                        alt="Visual Learning" 
                        class="w-full h-auto"
                      />
                    </div>
                    <div class="md:w-1/2 text-center md:text-left">
                      <h3 class="text-3xl font-semibold text-blue-600 mb-4">Visual</h3>
                      <p class="text-blue-800 text-lg">
                        Seseorang dengan gaya belajar visual mengandalkan penglihatan sebagai cara utama untuk memahami informasi. Orang dengan gaya ini cenderung lebih mudah mengingat grafik, diagram, gambar, dan video.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Auditori Slide -->
              <div class="w-full flex-shrink-0 px-4">
                <div class="max-w-4xl mx-auto">
                  <div class="flex flex-col md:flex-row items-center gap-8">
                    <div class="md:w-1/2">
                      <img 
                        src="/images/auditori.png"
                        class="w-full h-auto"
                      />
                    </div>
                    <div class="md:w-1/2 text-center md:text-left">
                      <h3 class="text-3xl font-semibold text-blue-600 mb-4">Auditori</h3>
                      <p class="text-blue-800 text-lg">
                        Seseorang dengan gaya belajar auditori akan mengutamakan pendengaran untuk memperoleh informasi seperti mendengar kuliah. Banyak dari mereka menyerap informasi ketika mendengarkan speech atau mendengarkan ceramah, diskusi, atau audio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Kinestetik Slide -->
              <div class="w-full flex-shrink-0 px-4">
                <div class="max-w-4xl mx-auto">
                  <div class="flex flex-col md:flex-row items-center gap-8">
                    <div class="md:w-1/2">
                      <img 
                        src="/images/kinestik.png"
                        alt="Kinesthetic Learning" 
                        class="w-full h-auto"
                      />
                    </div>
                    <div class="md:w-1/2 text-center md:text-left">
                      <h3 class="text-3xl font-semibold text-blue-600 mb-4">Kinestetik</h3>
                      <p class="text-blue-800 text-lg">
                        Seseorang dengan gaya belajar kinestetik lebih mudah menerima dan memproses informasi ketika mereka dapat mencoba atau melakukannya secara langsung. Orang dengan gaya ini cenderung lebih mudah belajar dengan melakukan sesuatu secara langsung.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <button 
            @click="prevSlide" 
            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
            :class="{ 'invisible': currentIndex === 0 }"
          >
            <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            @click="nextSlide" 
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
            :class="{ 'invisible': currentIndex === 2 }"
          >
            <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Dots Navigation -->
          <div class="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
            <button 
              v-for="(_, index) in 3" 
              :key="index"
              @click="goToSlide(index)"
              class="w-3 h-3 rounded-full transition-colors duration-200 border-2 border-blue-500"
              :class="index === currentIndex ? 'bg-blue-500' : 'bg-transparent'"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterContent />
  </div>
</template>

<script>
import HeaderContent from '../Components/HeaderContent.vue';
import FooterContent from '../Components/FooterContent.vue';

export default {
  name: 'LandingPage',
  components: {
    HeaderContent,
    FooterContent,
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < 2) {
        this.currentIndex++
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },
    goToSlide(index) {
      this.currentIndex = index
    }
  }
}
</script>