<template>
  <!-- Mobile Overlay dan Sidebar - hanya render di mobile -->
  <template v-if="isMobile">
    <!-- Mobile Overlay -->
    <div 
      v-if="isOpen" 
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      @click.stop="closeSidebar"
    ></div>

    <!-- Mobile Sidebar -->
    <div 
      class="fixed top-0 left-0 w-64 h-full bg-white z-50 transition-transform duration-300 ease-in-out border-r border-gray-200"
      :class="{
        'translate-x-0': isOpen,
        '-translate-x-full': !isOpen
      }"
    >
      <!-- Mobile Close Button -->
      <div class="flex justify-end p-4 border-b border-gray-200">
        <button 
          @click.stop="closeSidebar"
          class="p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
        >
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div class="p-6">
        <!-- Menu Navigasi Mobile -->
        <nav class="flex flex-col space-y-6">
          <Link href="/dashboard-user"
            class="flex items-center text-blue-500 hover:bg-blue-200 p-3 rounded-md transition-colors duration-300"
            @click="handleNavClick">
            <!-- Icon Dashboard -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              class="w-6 h-6 mr-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
            Dashboard
          </Link>

          <Link href="/profile"
            class="flex items-center text-blue-500 hover:bg-blue-200 p-3 rounded-md transition-colors duration-300"
            @click="handleNavClick">
            <!-- Icon Profile -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              class="w-6 h-6 mr-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            Edit Profile
          </Link>

          <Link href="/riwayat-test"
            class="flex items-center text-blue-500 hover:bg-blue-200 p-3 rounded-md transition-colors duration-300"
            @click="handleNavClick">
            <!-- Icon Riwayat Test -->
            <svg class="w-6 h-6 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6l4 2"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M2 12a10 10 0 1110 10 10 10 0 01-10-10z"></path>
            </svg>
            Riwayat Gaya Belajar
          </Link>

          <Link href="/logout" method="post"
            class="flex items-center text-blue-500 hover:bg-blue-200 p-3 rounded-md transition-colors duration-300"
            @click="handleNavClick">
            <!-- Icon Log Out -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              class="w-6 h-6 mr-4">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
            </svg>
            Log Out
          </Link>
        </nav>
      </div>
    </div>
  </template>

  <!-- Desktop Sidebar - hanya render di desktop -->
  <div 
    v-else
    class="w-64 bg-white min-h-screen border-r border-gray-200 flex-shrink-0"
  >
    <div class="p-6">
      <!-- Menu Navigasi -->
      <nav class="flex flex-col space-y-6">
        <Link href="/dashboard-user"
          class="flex items-center text-blue-500 hover:bg-blue-200 p-3 rounded-md transition-colors duration-300"
          @click="handleNavClick">
          <!-- Icon Dashboard -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6 mr-4">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
          </svg>
          Dashboard
        </Link>

        <Link href="/profile"
          class="flex items-center text-blue-500 hover:bg-blue-200 p-3 rounded-md transition-colors duration-300"
          @click="handleNavClick">
          <!-- Icon Profile -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6 mr-4">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          Edit Profile
        </Link>

        <Link href="/riwayat-test"
          class="flex items-center text-blue-500 hover:bg-blue-200 p-3 rounded-md transition-colors duration-300"
          @click="handleNavClick">
          <!-- Icon Riwayat Test -->
          <svg class="w-6 h-6 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6l4 2"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M2 12a10 10 0 1110 10 10 10 0 01-10-10z"></path>
          </svg>
          Riwayat Gaya Belajar
        </Link>

        <Link href="/logout" method="post"
          class="flex items-center text-blue-500 hover:bg-blue-200 p-3 rounded-md transition-colors duration-300"
          @click="handleNavClick">
          <!-- Icon Log Out -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6 mr-4">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
          </svg>
          Log Out
        </Link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import { ref, onMounted, onUnmounted } from 'vue';

// State untuk sidebar mobile
const isOpen = ref(false);
const isMobile = ref(false);

// Function untuk update mobile state
const updateMobileState = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth < 768; // md breakpoint
  }
};

// Function untuk menutup sidebar
const closeSidebar = () => {
  isOpen.value = false;
};

// Function untuk toggle sidebar
const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};

// Function untuk handle navigation click
const handleNavClick = () => {
  // Auto close sidebar di mobile setelah navigasi
  if (isMobile.value) {
    closeSidebar();
  }
};

// Function untuk handle resize window
const handleResize = () => {
  updateMobileState();
  // Close sidebar di mobile saat resize ke desktop
  if (!isMobile.value) {
    isOpen.value = false;
  }
};

// Event listener untuk toggle dari header
let toggleTimeout = null;
const handleToggleEvent = () => {
  // Debounce untuk mencegah multiple triggers
  if (toggleTimeout) return;
  
  toggleTimeout = setTimeout(() => {
    toggleSidebar();
    toggleTimeout = null;
  }, 50);
};

// Setup event listeners
onMounted(() => {
  updateMobileState(); // Set initial state
  window.addEventListener('resize', handleResize);
  window.addEventListener('toggle-sidebar', handleToggleEvent);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('toggle-sidebar', handleToggleEvent);
  if (toggleTimeout) {
    clearTimeout(toggleTimeout);
  }
});

// Expose methods untuk parent component
defineExpose({
  toggleSidebar,
  closeSidebar
});
</script>
