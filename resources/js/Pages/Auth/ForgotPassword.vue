<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, useForm } from '@inertiajs/vue3';
import MainLayout from '@/Layouts/MainLayout.vue';

defineProps({
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <MainLayout>
        <GuestLayout>
            <Head title="Forgot Password" />

            <div class="flex flex-col items-center">
                <!-- Logo dan Header -->
                <div class="flex items-center mb-8">
                    <img src="/images/studysync.png" alt="StudySync Logo" class="w-8 h-10 mr-4" />
                    <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                        StudySync
                    </h1>
                </div>
                
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-800 mb-2">Lupa Password?</h2>
                    <p class="text-gray-600 max-w-md">
                        Tidak masalah! Masukkan email Anda dan kami akan mengirimkan link untuk reset password.
                    </p>
                </div>

                <div
                    v-if="status"
                    class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-sm font-medium text-green-700 max-w-md w-full text-center"
                >
                    {{ status }}
                </div>

                <form @submit.prevent="submit" class="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-blue-100">
                    <!-- Email Field -->
                    <div class="mb-6">
                        <InputLabel for="email" value="Email" class="text-gray-700 font-medium mb-2" />
                        <TextInput
                            id="email"
                            type="email"
                            class="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            v-model="form.email"
                            required
                            autofocus
                            autocomplete="username"
                            placeholder="Masukkan email Anda"
                        />
                        <InputError class="mt-2 text-sm text-red-500" :message="form.errors.email" />
                    </div>

                    <!-- Submit Button -->
                    <div class="mb-6">
                        <PrimaryButton
                            class="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            :class="{ 'opacity-75 cursor-not-allowed': form.processing }"
                            :disabled="form.processing"
                        >
                            <span v-if="form.processing" class="flex items-center justify-center">
                                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Mengirim...
                            </span>
                            <span v-else>Kirim Link Reset Password</span>
                        </PrimaryButton>
                    </div>

                    <!-- Back to Login Link -->
                    <div class="text-center">
                        <div class="text-sm text-gray-600">
                            Ingat password Anda? 
                            <Link
                                :href="route('login')"
                                class="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors"
                            >
                                Kembali ke login
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </GuestLayout>
    </MainLayout>
</template>
