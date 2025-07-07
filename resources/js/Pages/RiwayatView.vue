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
              class="flex items-center text-blue-500 hover:bg-blue-100 p-3 rounded-md transition-colors duration-300 bg-blue-50"
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

    <div class="container mx-auto py-8 px-4">
      <div class="max-w-full w-full bg-white shadow-lg rounded-lg p-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Riwayat Test Gaya Belajar</h2>

        <div class="space-y-6">
          <!-- Loop through the learning history records -->
          <div v-for="history in learningHistory" :key="history.id" class="bg-white shadow-md rounded-lg p-6">
            <div class="flex justify-between items-center space-x-8">
              <!-- User Information -->
              <div class="flex items-center space-x-6 w-full">
                <!-- User Icon & Username -->
                <div class="flex items-center space-x-4">
                  <div class="w-28 h-28 rounded-full bg-blue-500 flex justify-center items-center">
                    <img :src="getIcon(history.dominant_style)" alt="icon" class="w-20 h-20"/>
                  </div>
                  <div class="flex flex-col pl-16">
                    <p class="text-xl font-semibold text-gray-700">{{ user.name }}</p> <!-- Added username here -->
                    <p class="text-sm text-gray-500">Username</p>
                  </div>
                </div>
                
                <div class="flex space-x-8 w-full">
                  <!-- Tipe Gaya Belajar (Left aligned) -->
                  <div class="flex flex-col items-start pl-16 space-y-1 w-1/3">
                    <p class="text-xl font-semibold text-gray-700 truncate">{{ history.dominant_style }}</p>
                    <p class="text-sm text-gray-500">Tipe Gaya Belajar</p>
                  </div>

                  <!-- Tanggal (Center aligned) -->
                  <div class="flex flex-col items-center pl-16 space-y-1 w-1/3">
                    <p class="text-xl font-semibold text-gray-700 truncate">{{ formatDate(history.created_at) }}</p>
                    <p class="text-sm text-gray-500">Tanggal</p>
                  </div>

                  <!-- Skor Tertinggi (Right aligned) -->
                  <div class="flex flex-col items-end pr-24 space-y-1 w-1/3">
                    <p class="text-xl font-semibold text-gray-700 truncate">{{ getHighestPercentage(history) }}%</p>
                    <p class="text-sm text-gray-500">Skor Tertinggi</p>
                  </div>
                </div>
              </div>

              <!-- Dropdown Button for Test Details -->
              <div class="ml-4">
                <button @click="toggleDetails(history.id)" class="text-sm text-indigo-600 hover:text-indigo-700 focus:outline-none">
                  {{ detailsVisible[history.id] ? 'Sembunyikan Detail' : 'Lihat Detail' }}
                </button>
              </div>
            </div>

            <!-- Test Details Dropdown -->
            <div v-if="detailsVisible[history.id]" class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div class="flex flex-col items-center space-y-2">
                <!-- Visual Score -->
                <img 
                  :src="getIcon('Visual')" 
                  alt="Visual" 
                  class="w-40 h-40"
                  :class="{ 'low-opacity': !getHighestStyle(history).includes('Visual') }" />
                <p class="text-xl font-semibold text-gray-700">Visual</p>
                <p class="text-lg text-gray-500">{{ history.visual_score }}%</p>
              </div>

              <div class="flex flex-col items-center space-y-2">
                <!-- Auditori Score -->
                <img 
                  :src="getIcon('Auditori')" 
                  alt="Auditori" 
                  class="w-40 h-40"
                  :class="{ 'low-opacity': !getHighestStyle(history).includes('Auditori') }" />
                <p class="text-xl font-semibold text-gray-700">Auditori</p>
                <p class="text-lg text-gray-500">{{ history.auditori_score }}%</p>
              </div>

              <div class="flex flex-col items-center space-y-2">
                <!-- Kinestetik Score -->
                <img 
                  :src="getIcon('Kinestetik')" 
                  alt="Kinestetik" 
                  class="w-40 h-40"
                  :class="{ 'low-opacity': !getHighestStyle(history).includes('Kinestetik') }" />
                <p class="text-xl font-semibold text-gray-700">Kinestetik</p>
                <p class="text-lg text-gray-500">{{ history.kinestetik_score }}%</p>
              </div>

              <!-- Tips & Description -->
              <div class="ml-8 col-span-3 flex flex-row space-x-8 mt-6">
                <!-- Each style's tips -->
                <div class="flex-1">
                  <p class="text-xl font-semibold text-gray-700">Keterangan Gaya Belajar</p>
                  <p class="text-lg text-gray-600 break-words">{{ getTips(getHighestStyle(history)) }}</p>
                </div>
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
import { ref } from 'vue';
import { usePage, Link } from '@inertiajs/vue3';

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

// State to track which test details are visible
const detailsVisible = ref({});

// Toggle the visibility of the test details for each history entry
const toggleDetails = (id) => {
  detailsVisible.value[id] = !detailsVisible.value[id];
};

// Format date for displaying
function formatDate(date) {
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

// Function to get the highest percentage score for a history entry
function getHighestPercentage(history) {
  const maxScore = Math.max(history.visual_score, history.auditori_score, history.kinestetik_score);
  return maxScore; // Return the highest score as percentage
}

// Function to get tips based on the learning style
function getTips(style) {
  const tips = {
    Visual: 'Seseorang dengan gaya belajar visual mengandalkan penglihatan sebagai cara utama untuk memahami informasi.',
    Auditori: 'Seseorang dengan gaya belajar auditori lebih mengandalkan pendengaran untuk memahami informasi.',
    Kinestetik: 'Seseorang dengan gaya belajar kinestetik lebih suka belajar melalui gerakan fisik atau pengalaman langsung.'
  };

  if (Array.isArray(style)) {
    return style.map(s => tips[s]).join(' ');
  }

  return tips[style] || 'Tips tidak tersedia';
}

// Function to get the icon for each learning style
function getIcon(dominantStyle) {
  const icons = {
    Visual: '/images/visual.png',
    Auditori: '/images/auditori.png',
    Kinestetik: '/images/kinestetik.png'
  };
  return icons[dominantStyle] || '/images/multi.png';
}

// Function to get the highest style based on the percentage
function getHighestStyle(history) {
  const scores = {
    Visual: history.visual_score,
    Auditori: history.auditori_score,
    Kinestetik: history.kinestetik_score
  };
  
  const maxScore = Math.max(...Object.values(scores));
  
  // Return all styles with the highest score
  return Object.keys(scores).filter(style => scores[style] === maxScore);
}
</script>

<style scoped>
.low-opacity {
  opacity: 0.4; /* Reduce opacity for non-dominant styles */
}
</style>
