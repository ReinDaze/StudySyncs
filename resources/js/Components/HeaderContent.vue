<template>
  <header
    class="flex flex-wrap items-center justify-between gap-5 px-14 pt-4 pb-11 w-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5"
  >
    <a href="/" class="text-5xl font-bold text-blue-500 max-md:text-3xl">
      Studysync
    </a>
    <nav class="flex flex-wrap items-center gap-5 max-md:flex-col">
      <a
        href="/"
        class="text-2xl font-medium text-blue-500 max-md:text-xl hover:text-blue-600 transition-colors"
      >
        Beranda
      </a>
      <a
        href="/tesgayabelajar"
        class="text-2xl font-medium text-blue-500 max-md:text-xl hover:text-blue-600 transition-colors"
      >
        Tes Gaya Belajar
      </a>
      <a
        href="/dashboard"
        class="text-2xl font-medium text-blue-500 max-md:text-xl hover:text-blue-600 transition-colors"
      >
        Dashboard
      </a>
      <a
        href="/kontak"
        class="text-2xl font-medium text-blue-500 max-md:text-xl hover:text-blue-600 transition-colors"
      >
        Kontak
      </a>
      <a
        href="/login"
        class="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full px-8 py-3 text-2xl max-md:text-lg max-md:px-5 max-md:py-2 transition-colors"
      >
        Login
      </a>
    </nav>
  </header>
</template>

<script setup lang="ts">
// Tidak memerlukan script karena menggunakan href langsung
</script>