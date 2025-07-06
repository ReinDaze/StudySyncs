<script setup>
import SidebarLayout from '@/Layouts/SidebarLayout.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import { Head } from '@inertiajs/vue3';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});
</script>

<template>
    <Head title="Profile" />

    <SidebarLayout>
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
                                <svg class="w-5 h-5 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"/>
                                </svg>
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
