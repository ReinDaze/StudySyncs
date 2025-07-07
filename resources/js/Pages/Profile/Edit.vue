<script setup>
import SidebarLayout from '@/Layouts/SidebarLayout.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import { Head, Link } from '@inertiajs/vue3';
import { ref } from 'vue';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

// State untuk sidebar dropdown
const isSidebarDropdownOpen = ref(false);

// Functions untuk sidebar dropdown
const toggleSidebarDropdown = () => {
  isSidebarDropdownOpen.value = !isSidebarDropdownOpen.value;
};

const closeSidebarDropdown = () => {
  isSidebarDropdownOpen.value = false;
};
</script>

<template>
    <Head title="Profile" />

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
                            class="flex items-center text-blue-500 hover:bg-blue-100 p-3 rounded-md transition-colors duration-300 bg-blue-50"
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

        <template #header>
            <div class="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
                <div class="flex items-center space-x-4">
                    <div class="p-3 bg-white bg-opacity-20 rounded-full">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                    </div>
                    <div>
                        <h2 class="text-3xl font-bold leading-tight">
                            Edit Profil
                        </h2>
                        <p class="mt-2 text-lg font-light text-blue-100">
                            Kelola informasi pribadi dan pengaturan akun Anda
                        </p>
                    </div>
                </div>
            </div>
        </template>

        <div class="py-8">
            <div class="mx-auto max-w-4xl">
                <div class="space-y-8">
                    <!-- Profile Update Form -->
                    <div class="bg-white p-8 shadow-xl rounded-2xl border border-blue-100">
                        <div class="mb-6">
                            <h3 class="text-xl font-semibold text-gray-800 flex items-center">
                                Informasi Profil
                            </h3>
                            <p class="text-gray-600">Perbarui informasi akun dan alamat email Anda</p>
                        </div>
                        <UpdateProfileInformationForm
                            :must-verify-email="mustVerifyEmail"
                            :status="status"
                        />
                    </div>

                    <!-- Delete User Form -->
                    <div class="bg-white p-8 shadow-xl rounded-2xl border border-red-100">
                        <div class="mb-6">
                            <h3 class="text-xl font-semibold text-gray-800 flex items-center">
                                <svg class="w-5 h-5 mr-3 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/>
                                </svg>
                                Hapus Akun
                            </h3>
                            <p class="text-gray-600">Hapus akun Anda secara permanen</p>
                        </div>
                        <DeleteUserForm />
                    </div>
                </div>
            </div>
        </div>
    </SidebarLayout>
</template>
