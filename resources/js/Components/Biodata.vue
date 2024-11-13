<template>
  <div class="bg-white p-4 rounded-lg shadow-md">
    <h3 class="text-lg font-semibold mb-2">Biodata</h3>

    <form @submit.prevent="saveBiodata">
      <div class="mb-2">
        <label for="name" class="block">Nama Lengkap:</label>
        <input type="text" id="name" v-model="biodata.name" class="w-full p-2 border rounded" />
      </div>

      <div class="mb-2">
        <label for="birthplace" class="block">Tempat/Tgl Lahir:</label>
        <input type="text" id="birthplace" v-model="biodata.birthplace" class="w-full p-2 border rounded" />
      </div>

      <div class="mb-2">
        <label for="email" class="block">Email:</label>
        <input type="email" id="email" v-model="biodata.email" class="w-full p-2 border rounded" />
      </div>

      <div class="mb-2">
        <label for="school" class="block">Asal Sekolah:</label>
        <input type="text" id="school" v-model="biodata.school" class="w-full p-2 border rounded" />
      </div>

      <div class="mb-2">
        <label for="phone" class="block">Telepon:</label>
        <input type="text" id="phone" v-model="biodata.phone" class="w-full p-2 border rounded" />
      </div>

      <button type="submit" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Simpan</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Biodata',
  data() {
    return {
      biodata: {
        name: 'Gustavio Fajrul Izadi',
        birthplace: 'Karanganyar, 17 Agustus 2005',
        email: 'gustaviofajrul@gmail.com',
        school: 'SMK 72 Kapal Karam Jombang',
        phone: '0856-4164-6504',
      },
    };
  },
  methods: {
    saveBiodata() {
      // Simpan data ke localStorage atau server
      console.log('Biodata disimpan:', this.biodata);
      alert('Biodata telah disimpan');
    },
  },
};
</script>
