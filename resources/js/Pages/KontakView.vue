<template>
    <MainLayout>
    <div class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="max-w-6xl mx-auto text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Hubungi Kami</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami.
        </p>
      </div>
  
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="bg-blue-100 rounded-xl shadow-lg p-8">
          <h2 class="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-800">Informasi Kontak</h2>
  
          <div class="space-y-6">
            <!-- Alamat -->
            <div class="bg-white rounded-xl p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <div class="inline-block p-3 bg-blue-500 rounded-full">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-800 mb-1">Alamat</h3>
                  <p class="text-gray-600">
                    Kentingan, Universitas Sebelas Maret<br>
                    <span class="text-sm">Surakarta, Jawa Tengah</span>
                  </p>
                </div>
              </div>
            </div>

            <!-- Telepon -->
            <div class="bg-white rounded-xl p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <div class="inline-block p-3 bg-blue-500 rounded-full">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-800 mb-1">Telepon</h3>
                  <a href="tel:+6285641646594" class="text-gray-600 hover:text-blue-500 transition-colors">
                    +62 856-4164-6594
                  </a>
                </div>
              </div>
            </div>

            <!-- Email -->
            <div class="bg-white rounded-xl p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <div class="inline-block p-3 bg-blue-500 rounded-full">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-800 mb-1">Email</h3>
                  <a href="mailto:info@studysync@gmail.com" class="text-gray-600 hover:text-blue-500 transition-colors">
                    studysync@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Social Media Links -->
          <div class="mt-8 pt-6 border-t border-blue-200">
            <h3 class="text-xl font-semibold text-gray-800 mb-4 text-center">Hubungi Kami Melalui</h3>
            <div class="flex justify-center space-x-6">
              <!-- Instagram -->
              <a href="https://instagram.com/studysync" 
                 class="bg-white p-4 rounded-xl hover:shadow-lg transform transition duration-300 hover:-translate-y-1 group">
                <div class="flex flex-col items-center space-y-2">
                  <div class="inline-block p-3 bg-blue-500 rounded-full group-hover:bg-pink-500 transition-colors">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span class="text-sm font-semibold text-gray-600 group-hover:text-pink-500 transition-colors">Instagram</span>
                </div>
              </a>
              
              <!-- WhatsApp -->
              <a href="https://wa.me/6285641646594" 
                 class="bg-white p-4 rounded-xl hover:shadow-lg transform transition duration-300 hover:-translate-y-1 group">
                <div class="flex flex-col items-center space-y-2">
                  <div class="inline-block p-3 bg-blue-500 rounded-full group-hover:bg-green-500 transition-colors">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                    </svg>
                  </div>
                  <span class="text-sm font-semibold text-gray-600 group-hover:text-green-500 transition-colors">WhatsApp</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-800">Kirim Pesan</h2>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                placeholder="Masukkan nama lengkap Anda"
                required
              />
            </div>
  
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                placeholder="contoh@email.com"
                required
              />
            </div>
  
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
              <input
                type="text"
                id="subject"
                v-model="formData.subject"
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                placeholder="Subjek pesan Anda"
                required
              />
            </div>
  
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="5"
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors resize-none"
                placeholder="Tulis pesan Anda di sini..."
                required
              ></textarea>
            </div>
  
            <div>
              <button
                type="submit"
                class="w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </MainLayout>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import MainLayout from '@/Layouts/MainLayout.vue';
  
  const formData = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const handleSubmit = async () => {
    try {
      console.log('Form submitted:', formData.value)
      formData.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
      alert('Pesan berhasil dikirim!')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Terjadi kesalahan. Silakan coba lagi.')
    }
  }
  </script>
  