<template>
  <header class="relative flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-14 py-4 lg:py-7 w-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300">
    <!-- Left Section: Logo Only -->
    <div class="flex items-center">
      <!-- Logo Section with Animation -->
      <div class="flex items-center group">
        <img 
          src="/images/studysync.png" 
          alt="StudySync Logo" 
          class="w-5 h-7 sm:w-6 sm:h-8 mr-3 sm:mr-6 transition-transform duration-300 group-hover:scale-110" 
        />
        <h1 class="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-clip-text text-blue-500 transition-all duration-300 group-hover:text-blue-600">
          StudySync
        </h1>
      </div>
    </div>

    <!-- Mobile Menu Button with Animation -->
    <button 
      @click="toggleMobileMenu" 
      class="lg:hidden flex items-center px-3 py-2 border rounded text-blue-500 border-blue-500 hover:text-blue-700 hover:border-blue-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-90': isMobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>

    <!-- Desktop Navigation with Hover Animations -->
    <nav class="hidden lg:flex flex-wrap gap-6 xl:gap-10 items-center">
      <Link 
        href="/" 
        class="relative text-lg xl:text-xl font-medium text-blue-500 hover:text-blue-700 transition-all duration-300 group"
      >
        <span class="relative z-10">Beranda</span>
        <span class="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </Link>
      <Link 
        href="/tes-gaya-belajar" 
        class="relative text-lg xl:text-xl font-medium text-blue-500 hover:text-blue-700 transition-all duration-300 group"
      >
        <span class="relative z-10">Tes Gaya Belajar</span>
        <span class="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </Link>
      <Link 
        href="/kontak" 
        class="relative text-lg xl:text-xl font-medium text-blue-500 hover:text-blue-700 transition-all duration-300 group"
      >
        <span class="relative z-10">Kontak</span>
        <span class="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </Link>
      <Link 
        href="/bantuan" 
        class="relative text-lg xl:text-xl font-medium text-blue-500 hover:text-blue-700 transition-all duration-300 group"
      >
        <span class="relative z-10">Bantuan</span>
        <span class="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </Link>

      <!-- User Authentication Section with Animation -->
      <template v-if="user">
        <div class="relative">
          <Dropdown align="right" width="48">
            <template #trigger>
              <button
                type="button"
                class="inline-flex items-center rounded-full bg-blue-500 text-white px-3 lg:px-4 py-2 text-sm font-medium leading-4 transition-all duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              > 
                <svg
                  class="w-5 h-5 lg:w-6 lg:h-6 mr-1 lg:mr-2 text-white transition-transform duration-300 hover:rotate-12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                </svg>
                <span class="font-semibold hidden sm:inline truncate max-w-24">{{ user.name }}</span>
                <svg
                  class="h-4 w-4 ml-1 lg:ml-2 text-white transition-transform duration-300"
                  :class="{ 'rotate-180': dropdownOpen }"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </template>

            <template #content>
              <DropdownLink 
                :href="route('dashboarduser')" 
                class="text-sm text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-md transition-all duration-200 hover:translate-x-1"
              >
                <svg class="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                Profile
              </DropdownLink>
              <DropdownLink 
                :href="route('logout')" 
                method="post" 
                as="button" 
                class="text-sm text-red-600 hover:bg-red-100 px-4 py-2 rounded-md transition-all duration-200 hover:translate-x-1"
              >
                <svg class="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                </svg>
                Log Out
              </DropdownLink> 
            </template>
          </Dropdown>
        </div>
      </template>

      <template v-else>
        <button 
          @click="login" 
          class="relative px-4 lg:px-6 py-2 text-lg xl:text-xl font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 overflow-hidden group"
        >
          <span class="relative z-10">Login</span>
          <span class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
      </template>
    </nav>

    <!-- Mobile Navigation Menu with Slide Animation -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 transform -translate-y-4"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-4"
    >
      <div v-if="isMobileMenuOpen" class="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50 overflow-hidden">
        <nav class="flex flex-col p-4 space-y-2">
          <Link 
            href="/" 
            class="text-lg font-medium text-blue-500 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 py-3 px-2 rounded-md transform hover:translate-x-2"
            @click="closeMobileMenu"
          >
            <svg class="w-5 h-5 mr-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Beranda
          </Link>
          <Link 
            href="/tes-gaya-belajar" 
            class="text-lg font-medium text-blue-500 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 py-3 px-2 rounded-md transform hover:translate-x-2"
            @click="closeMobileMenu"
          >
            <svg class="w-5 h-5 mr-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
            Tes Gaya Belajar
          </Link>
          <Link 
            href="/kontak" 
            class="text-lg font-medium text-blue-500 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 py-3 px-2 rounded-md transform hover:translate-x-2"
            @click="closeMobileMenu"
          >
            <svg class="w-5 h-5 mr-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Kontak
          </Link>
          <Link 
            href="/bantuan" 
            class="text-lg font-medium text-blue-500 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 py-3 px-2 rounded-md transform hover:translate-x-2"
            @click="closeMobileMenu"
          >
            <svg class="w-5 h-5 mr-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Bantuan
          </Link>
          
          <template v-if="user">
            <div class="border-t pt-4 mt-4">
              <div class="flex items-center mb-4 p-2 bg-blue-50 rounded-md">
                <svg
                  class="w-6 h-6 mr-3 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  />
                </svg>
                <span class="font-semibold text-gray-800">{{ user.name }}</span>
              </div>
              <Link 
                :href="route('dashboarduser')" 
                class="block text-lg font-medium text-blue-500 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 py-3 px-2 rounded-md transform hover:translate-x-2"
                @click="closeMobileMenu"
              >
                <svg class="w-5 h-5 mr-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                Profile
              </Link>
              <Link 
                :href="route('logout')" 
                method="post" 
                as="button" 
                class="block text-lg font-medium text-red-500 hover:text-red-700 hover:bg-red-50 transition-all duration-200 py-3 px-2 rounded-md transform hover:translate-x-2"
                @click="closeMobileMenu"
              >
                <svg class="w-5 h-5 mr-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                </svg>
                Log Out
              </Link>
            </div>
          </template>
          
          <template v-else>
            <button 
              @click="login" 
              class="w-full px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4 relative overflow-hidden group"
            >
              <span class="relative z-10">Login</span>
              <span class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          </template>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script>
import { Link, usePage } from '@inertiajs/vue3';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';

export default {
  name: 'StudySyncHeader',
  components: {
    Link,
    Dropdown,
    DropdownLink,
  },
  data() {
    return {
      user: null,
      isMobileMenuOpen: false,
      dropdownOpen: false,
    };
  },
  computed: {
    // Computed properties for header functionality
  },
  mounted() {
    this.user = this.$page.props.auth.user;
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', this.handleClickOutside);
    
    // Close mobile menu on window resize
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    login() {
      this.$inertia.visit('/login');
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
    handleClickOutside(event) {
      const header = this.$el;
      if (header && !header.contains(event.target)) {
        this.isMobileMenuOpen = false;
      }
    },
    handleResize() {
      if (window.innerWidth >= 1024) { // lg breakpoint
        this.isMobileMenuOpen = false;
      }
    },
  },
};
</script>

<style scoped>
/* Additional custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.3s ease-out;
}

.animate-pulse-subtle {
  animation: pulse 2s infinite;
}

/* Smooth gradient overlay for buttons */
.gradient-overlay {
  background: linear-gradient(45deg, #3b82f6, #1d4ed8);
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Mobile menu backdrop blur effect */
.mobile-menu-backdrop {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/* Hover effects for navigation links */
.nav-link::before {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 50%;
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::before {
  width: 100%;
}

/* Enhanced focus styles for accessibility */
.focus-enhanced:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
  transform: scale(1.02);
}

/* Staggered animation for mobile menu items */
.mobile-menu-item:nth-child(1) { animation-delay: 0.1s; }
.mobile-menu-item:nth-child(2) { animation-delay: 0.2s; }
.mobile-menu-item:nth-child(3) { animation-delay: 0.3s; }
.mobile-menu-item:nth-child(4) { animation-delay: 0.4s; }
.mobile-menu-item:nth-child(5) { animation-delay: 0.5s; }
</style>
