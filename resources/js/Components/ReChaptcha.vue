<template>
    <div>
      <div class="form-group row">
        <div class="col-md-6 offset-md-4">
          <vue-recaptcha
            ref="recaptcha"
            :sitekey="siteKey"
            @verify="onVerify"
          ></vue-recaptcha>
  
          <!-- Tampilkan error jika verifikasi reCAPTCHA gagal -->
          <span v-if="recaptchaError" class="invalid-feedback" style="display:block">
            <strong>{{ recaptchaError }}</strong>
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import VueRecaptcha from 'vue-recaptcha';
  
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY; // Mengambil site key dari environment variable
  const recaptchaError = ref('');
  
  const onVerify = (response) => {
    recaptchaError.value = ''; // Reset error ketika verifikasi berhasil
    console.log('reCAPTCHA Response:', response);
  
    // Kirim response reCAPTCHA ke server untuk verifikasi lebih lanjut
    // Bisa menggunakan Inertia.js untuk mengirimkan response ke controller
    // Contoh:
    // this.$inertia.post('/your-api-endpoint', { recaptcha: response });
  };
  </script>
  
  <script>
  export default {
    components: {
      VueRecaptcha
    },
  };
  </script>
  
  <style scoped>
  /* Tambahkan styling jika diperlukan */
  </style>
  