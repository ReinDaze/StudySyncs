<template>
  <SidebarLayout>
    <!-- Mobile/Tablet Sidebar Dropdown - tampil di atas konten -->
    <div class="md:hidden bg-white border-b border-gray-200 shadow-sm mb-4">
      <div class="px-4 py-3">
        <button 
          @click="toggleSidebarDropdown"
          class="w-full flex items-center justify-between p-3 text-blue-500 hover:bg-blue-50 rounded-md transition-all duration-200"
        >
          <span class="flex items-center">
            Menu Dashboard
          </span>
          <svg 
            class="w-5 h-5 transform transition-transform duration-200" 
            :class="{ 'rotate-180': isSidebarDropdownOpen }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>

        <!-- Dropdown Menu -->
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 transform -translate-y-2"
          enter-to-class="opacity-100 transform translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 transform translate-y-0"
          leave-to-class="opacity-0 transform -translate-y-2"
        >
          <div v-if="isSidebarDropdownOpen" class="mt-2 space-y-2">
            <Link 
              href="/dashboard-user"
              class="flex items-center text-blue-500 hover:bg-blue-100 p-3 rounded-md transition-colors duration-300"
              @click="closeSidebarDropdown"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
              Dashboard
            </Link>

            <Link 
              href="/profile"
              class="flex items-center text-blue-500 hover:bg-blue-100 p-3 rounded-md transition-colors duration-300"
              @click="closeSidebarDropdown"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              Edit Profile
            </Link>

            <Link 
              href="/riwayat-test"
              class="flex items-center text-blue-500 hover:bg-blue-100 p-3 rounded-md transition-colors duration-300"
              @click="closeSidebarDropdown"
            >
              <svg class="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6l4 2"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12a10 10 0 1110 10 10 10 0 01-10-10z"></path>
              </svg>
              Riwayat Gaya Belajar
            </Link>

            <Link 
              href="/logout" 
              method="post"
              class="flex items-center text-red-500 hover:bg-red-100 p-3 rounded-md transition-colors duration-300"
              @click="closeSidebarDropdown"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
              </svg>
              Log Out
            </Link>
          </div>
        </transition>
      </div>
    </div>

    <div class="container mx-auto py-8 px-4 z-20">

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">

      
        <div class="max-w-full w-full bg-white shadow-lg rounded-lg p-8">
          <p class="text-xl font-semibold text-gray-800">Profil Pengguna</p>
          <p class="text-lg font-medium text-gray-600">{{ user.name }}</p>
          <div class="mt-8">
            <p class="text-sm font-medium text-gray-500">Gaya Belajar Terakhir:</p>
            <div v-if="learningHistory && learningHistory.length > 0">
              <div v-for="history in learningHistory.slice(0, 1)" :key="history.id">
                
                <div class="flex justify-center space-x-8 mt-4">
                  
                  <div class="flex-1 text-center">
                    <p class="text-2xl font-semibold text-blue-500">{{ history.visual_score }}%</p>
                    <p class="text-sm text-gray-600">Visual</p>
                  </div>
                  
                  <div class="flex-1 text-center">
                    <p class="text-2xl font-semibold text-blue-500">{{ history.auditori_score }}%</p>
                    <p class="text-sm text-gray-600">Auditori</p>
                  </div>
                  
                  <div class="flex-1 text-center">
                    <p class="text-2xl font-semibold text-blue-500">{{ history.kinestetik_score }}%</p>
                    <p class="text-sm text-gray-600">Kinestetik</p>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <p class="text-sm text-gray-600">Belum ada riwayat gaya belajar.</p>
            </div>
          </div>

      <div class="mt-12">
        <p class="text-sm font-medium text-gray-500">Kelengkapan Profil</p>
        <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div class="bg-blue-500 h-2.5 rounded-full" :style="{ width: completeness + '%' }"></div>
        </div>
        <p class="mt-1 text-sm font-medium text-gray-600">{{ completeness }}% Lengkap</p>
      </div>
    </div>


    
    <div class="max-w-full w-full bg-white shadow-lg rounded-lg p-8">
      <p class="text-xl font-semibold text-gray-800">Biodata</p>
      <div class="space-y-4 mt-4">
        <p class="text-m font-medium text-gray-600">Nama: {{ user.name }}</p>
        <p class="text-m font-medium text-gray-600">Email: {{ user.email }}</p>
        <p class="text-m font-medium text-gray-600">Telepon: {{ user.phone }}</p>
        <p class="text-m font-medium text-gray-600">Tanggal Lahir: {{ formatDate(user.birthdate) }}</p>
        <p class="text-m font-medium text-gray-600">Alamat: {{ user.address }}</p>
        <p class="text-m font-medium text-gray-600">Asal Sekolah: {{ user.school_origin }}</p>
      </div>
    </div>

    
    <div class="max-w-full w-full bg-white shadow-lg rounded-lg p-8">
      <p class="text-xl font-semibold text-gray-800 mb-4">Riwayat Gaya Belajar</p>
      <div class="space-y-4">
        <div v-for="history in learningHistory" :key="history.id" class="bg-white shadow-md rounded-lg p-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
    
              <div class="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center">
                <img :src="getIcon(history.dominant_style)" alt="icon" class="w-8 h-8" />
              </div>
    
              <div class="ml-4">
                <p class="text-lg font-semibold text-gray-700">{{ history.dominant_style }}</p>
                <p class="text-sm text-gray-500">Persentase: {{ getHighestPercentage(history) }}%</p>
              </div>
            </div>
    
            <p class="text-sm text-gray-500">{{ formatDate(history.created_at) }}</p>
          </div>
        </div>
      </div>
    </div>

    
    <div class="max-w-full w-full bg-white shadow-lg rounded-lg p-8">
      <p class="text-xl font-semibold text-gray-800 mb-4">Tips and Trick Gaya Belajar</p>
      <div class="space-y-4">
        <div class="space-y-6">
          <div v-for="style in ['Visual', 'Auditori', 'Kinestetik']" :key="style" class="bg-blue-600 p-4 rounded-lg">
            <h3 class="font-bold text-white">{{ style }} Style</h3>
            <p class="text-sm text-white mt-2">{{ getTips(style) }}</p>
          </div>
        </div>
      </div>
    </div>

    </div>
    </div>
  </SidebarLayout>
</template>

<script setup>
import SidebarLayout from '@/Layouts/SidebarLayout.vue';
import { Link, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';

const { user, learningHistory } = usePage().props;

// State untuk sidebar dropdown
const isSidebarDropdownOpen = ref(false);

// Functions untuk sidebar dropdown
const toggleSidebarDropdown = () => {
  isSidebarDropdownOpen.value = !isSidebarDropdownOpen.value;
};

const closeSidebarDropdown = () => {
  isSidebarDropdownOpen.value = false;
};

// Menghitung kelengkapan profil
const completeness = Math.round(
  (Object.values(user)
    .filter((value, key) => key !== 'birthdate' && value && value !== '').length
    / Object.keys(user).filter(key => key !== 'birthdate').length) * 100
);

// Fungsi untuk mendapatkan ikon berdasarkan gaya belajar
function getIcon(dominantStyle) {
  const icons = {
    Visual: '/images/visual.png',
    Auditori: '/images/auditori.png',
    Kinestetik: '/images/kinestetik.png'
  };
  return icons[dominantStyle] || '/images/multi.png';
}

// Fungsi untuk memformat tanggal
function formatDate(date) {
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}


// Fungsi untuk menghitung persentase tertinggi di riwayat gaya belajar
function getHighestPercentage(history) {
  const maxScore = Math.max(history.visual_score, history.auditori_score, history.kinestetik_score);
  return maxScore; // Return the highest score as percentage
}

// Tips berdasarkan gaya belajar
function getTips(style) {
  const tips = {
    Visual: 'Gunakan diagram, gambar, dan catatan visual untuk mempermudah pemahaman materi.',
    Auditori: 'Dengarkan penjelasan dengan cermat dan gunakan rekaman audio untuk belajar.',
    Kinestetik: 'Cobalah untuk melibatkan tubuh saat belajar, seperti dengan eksperimen atau simulasi.'
  };
  return tips[style] || 'Tips tidak tersedia';
}
</script>
