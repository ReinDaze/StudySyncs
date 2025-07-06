<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import MainLayout from '@/Layouts/MainLayout.vue';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),

    });
};
</script>

<template>
    <MainLayout>
        <GuestLayout>
            <Head title="Log in" />

            <div class="flex flex-col items-center">
                <!-- Logo dan Header -->
                <div class="flex items-center mb-8">
                    <img src="/images/studysync.png" alt="StudySync Logo" class="w-8 h-10 mr-4" />
                    <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                        StudySync
                    </h1>
                </div>
                
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold text-gray-800 mb-2">Selamat Datang Kembali!</h2>
                    <p class="text-gray-600">Masuk ke akun StudySync Anda</p>
                </div>

                <div v-if="status" class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-sm font-medium text-green-700">
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

                    <!-- Password Field -->
                    <div class="mb-6">
                        <InputLabel for="password" value="Password" class="text-gray-700 font-medium mb-2" />
                        <TextInput
                            id="password"
                            type="password"
                            class="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            v-model="form.password"
                            required
                            autocomplete="current-password"
                            placeholder="Masukkan password Anda"
                        />
                        <InputError class="mt-2 text-sm text-red-500" :message="form.errors.password" />
                    </div>

                    <!-- Remember Me -->
                    <div class="mb-6">
                        <label class="flex items-center">
                            <Checkbox name="remember" v-model:checked="form.remember" class="rounded border-blue-300 text-blue-600 focus:ring-blue-500" />
                            <span class="ml-2 text-sm text-gray-600">Ingat saya</span>
                        </label>
                    </div>

                    <!-- Login Button -->
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
                                Memproses...
                            </span>
                            <span v-else>Masuk</span>
                        </PrimaryButton>
                    </div>

                    <!-- Links -->
                    <div class="text-center space-y-3">
                        <div v-if="canResetPassword">
                            <Link
                                :href="route('password.request')"
                                class="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                            >
                                Lupa password?
                            </Link>
                        </div>
                        <div class="text-sm text-gray-600">
                            Belum punya akun? 
                            <Link
                                :href="route('register')"
                                class="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors"
                            >
                                Daftar di sini
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </GuestLayout>
    </MainLayout>
</template>
