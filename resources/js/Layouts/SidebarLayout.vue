<template>
  <!-- Header Content -->
  <HeaderContent />

  <div class="flex">
    <!-- Sidebar Component - handles responsivity internally -->
    <Sidebar />
    
    <!-- Main Content Area: menyesuaikan dengan sidebar -->
    <main class="flex-1 w-full p-4 md:p-6 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 min-h-screen">
      <!-- Slot for dynamic content -->
      <slot></slot>
    </main>
  </div>

  <!-- Footer Content -->
  <FooterContent />
</template>
<script setup lang="js">
import HeaderContent from '@/Components/HeaderContent.vue';
import FooterContent from '@/Components/FooterContent.vue';
import Sidebar from '@/Components/Sidebar.vue';
</script>

<style scoped>
/* Optional: Add global styles for layout */
</style>
  