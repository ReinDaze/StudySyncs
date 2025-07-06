<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const user = usePage().props.auth.user;

const form = useForm({
    name: user.name,
    email: user.email,
    address: user.address || '',  // Menambahkan field address
    phone: user.phone || '',      // Menambahkan field phone
    birthdate: (user.birthdate) || '',  // Menambahkan field birthdate    
    school_origin: user.school_origin || ''
});


</script>

<template>
    <section>
        <form @submit.prevent="form.patch(route('profile.update'))" class="space-y-6">
            <!-- Name Field -->
            <div class="space-y-2">
                <InputLabel for="name" value="Name" class="text-gray-700 font-medium" />
                <TextInput id="name" type="text"
                    class="mt-1 block w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    v-model="form.name" required autofocus autocomplete="name" />
                <InputError class="mt-2 text-sm text-red-500" :message="form.errors.name" />
            </div>

            <!-- Email Field -->
            <div class="space-y-2">
                <InputLabel for="email" value="Email" class="text-gray-700 font-medium" />
                <TextInput id="email" type="email"
                    class="mt-1 block w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    v-model="form.email" required autocomplete="username" />
                <InputError class="mt-2 text-sm text-red-500" :message="form.errors.email" />
            </div>

            <!-- Address Field -->
            <div class="space-y-2">
                <InputLabel for="address" value="Address" class="text-gray-700 font-medium" />
                <TextInput id="address" type="text"
                    class="mt-1 block w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    v-model="form.address" placeholder="Your address" />
                <InputError class="mt-2 text-sm text-red-500" :message="form.errors.address" />
            </div>

            <!-- Phone Field -->
            <div class="space-y-2">
                <InputLabel for="phone" value="Phone" class="text-gray-700 font-medium" />
                <TextInput id="phone" type="text"
                    class="mt-1 block w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    v-model="form.phone" placeholder="Your phone number" />
                <InputError class="mt-2 text-sm text-red-500" :message="form.errors.phone" />
            </div>

            <!-- Birthdate Field -->
            <div class="space-y-2">
                <InputLabel for="birthdate" value="Birthdate" class="text-gray-700 font-medium" />
                <TextInput id="birthdate" type="date"
                    class="mt-1 block w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    v-model="form.birthdate" />
                <InputError class="mt-2 text-sm text-red-500" :message="form.errors.birthdate" />
            </div>

            <!-- Asal Sekolah Field -->
            <div class="space-y-2">
                <InputLabel for="school_origin" value="School Origin" class="text-gray-700 font-medium" />
                <TextInput id="school_origin" type="text"
                    class="mt-1 block w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    v-model="form.school_origin" placeholder="Enter your school origin" />
                <InputError :message="form.errors.school_origin" />
            </div>


            <!-- Email Verification Reminder (if needed) -->
            <div v-if="mustVerifyEmail && user.email_verified_at === null"
                class="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                <p class="text-sm text-gray-800">
                    Your email address is unverified.
                    <Link :href="route('verification.send')" method="post" as="button"
                        class="text-sm text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 underline">
                    Click here to re-send the verification email.
                    </Link>
                </p>

                <div v-show="status === 'verification-link-sent'" class="mt-2 text-sm font-medium text-green-600">
                    A new verification link has been sent to your email address.
                </div>
            </div>

            <!-- Save Button -->
            <div class="flex items-center gap-4 pt-4">
                <PrimaryButton :disabled="form.processing"
                    class="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium">
                    Save Changes
                </PrimaryButton>

                <Transition enter-active-class="transition ease-in-out" enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out" leave-to-class="opacity-0">
                    <p v-if="form.recentlySuccessful" class="text-sm text-green-600 font-medium">
                        Saved successfully!
                    </p>
                </Transition>
            </div>
        </form>
    </section>
</template>
