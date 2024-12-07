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
                <h2 class="text-3xl font-extrabold text-gray-800 mb-6">Welcome Back!</h2>
                <p class="text-gray-600 text-sm mb-6">Log in to your account</p>

                <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
                    {{ status }}
                </div>

                <form @submit.prevent="submit" class="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                    <div>
                        <InputLabel for="email" value="Email" class="text-gray-700" />
                        <TextInput
                            id="email"
                            type="email"
                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                            v-model="form.email"
                            required
                            autofocus
                            autocomplete="username"
                        />
                        <InputError class="mt-2" :message="form.errors.email" />
                    </div>

                    <div class="mt-4">
                        <InputLabel for="password" value="Password" class="text-gray-700" />
                        <TextInput
                            id="password"
                            type="password"
                            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                            v-model="form.password"
                            required
                            autocomplete="current-password"
                        />
                        <InputError class="mt-2" :message="form.errors.password" />
                    </div>

                    <div class="mt-4 block">
                        <label class="flex items-center">
                            <Checkbox name="remember" v-model:checked="form.remember" />
                            <span class="ms-2 text-sm text-gray-600">Remember me</span>
                        </label>
                    </div>

                    <div class="mt-6 flex items-center justify-between">
                        <Link
                            v-if="canResetPassword"
                            :href="route('password.request')"
                            class="text-sm text-blue-500 hover:underline"
                        >
                            Forgot your password?
                        </Link>
                        <Link
                            :href="route('register')"
                            class="text-sm text-blue-500 hover:underline"
                        >
                            Sign Up
                        </Link>
                    </div>

                    <div class="mt-6">
                        <PrimaryButton
                            class="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md transition-colors duration-300"
                            :class="{ 'opacity-50': form.processing }"
                            :disabled="form.processing"
                        >
                            Log in
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    </MainLayout>
</template>
