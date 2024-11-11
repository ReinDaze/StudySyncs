<template>
    <!-- History and Biodata Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Learning History Section -->
      <section>
        <h2 class="text-lg font-medium mb-4">Riwayat Gaya Belajar</h2>
        <div class="bg-white rounded-2xl shadow-sm p-6">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="text-left text-gray-500">
                  <th class="pb-4">User</th>
                  <th class="pb-4">Type</th>
                  <th class="pb-4">Date</th>
                  <th class="pb-4">Point</th>
                </tr>
              </thead>
              <tbody class="text-gray-700">
                <tr class="border-t">
                  <td class="py-4 flex items-center">
                    <i class="fas fa-user-circle mr-2"></i>
                    Agusta
                  </td>
                  <td class="py-4">Kinestetik</td>
                  <td class="py-4">17 Aug 2023</td>
                  <td class="py-4">57%</td>
                </tr>
                <!-- Add more rows if needed -->
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'LearningHistory',
  });
  </script>
  
  <style scoped>
  /* Import Font Awesome for the user icon */
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
  </style>
  