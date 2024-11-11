<template>
  <div class="bg-white p-4 rounded-lg shadow-md">
    <div class="flex items-center">
      <img src="https://via.placeholder.com/50" alt="Profile" class="rounded-full mr-4">
      <div>
        <h2 class="text-lg font-semibold">Agusta</h2>
        <p class="text-sm text-gray-500">Gaya belajar: Kinestetik</p>
      </div>
    </div>
    <div class="mt-4 flex space-x-4">
      <div class="text-center">
        <p class="text-blue-600 text-2xl font-bold">57%</p>
        <p class="text-sm text-gray-500">Kinestetik</p>
      </div>
      <div class="text-center">
        <p class="text-green-600 text-2xl font-bold">37%</p>
        <p class="text-sm text-gray-500">Visual</p>
      </div>
      <div class="text-center">
        <p class="text-red-600 text-2xl font-bold">16%</p>
        <p class="text-sm text-gray-500">Auditori</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
}
</script>
