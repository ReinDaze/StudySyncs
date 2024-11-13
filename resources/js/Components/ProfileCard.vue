<template>
  <div class="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
    <div class="flex items-center">
      <input
        type="file"
        @change="onFileChange"
        class="hidden"
        ref="fileInput"
        accept="image/*"
      />
      <img
        :src="profileImage"
        alt="Profile"
        class="rounded-full w-24 h-24 object-cover mr-6 cursor-pointer"
        @click="triggerFileInput"
      />
      <div>
        <h2 class="text-xl font-semibold">Agusta</h2>
        <p class="text-sm text-gray-500">Gaya belajar: Kinestetik</p>
      </div>
    </div>

    <div class="mt-6 grid grid-cols-3 gap-4">
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
  data() {
    return {
      profileImage: 'https://via.placeholder.com/150', // Default image
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click(); // Trigger file input on image click
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profileImage = e.target.result; // Set the uploaded image as profile picture
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style scoped>
/* Add a smooth transition to image change */
img {
  transition: all 0.3s ease-in-out;
}
</style>
