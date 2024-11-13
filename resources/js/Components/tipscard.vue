<template>
  <div class="tips-card bg-blue-50 p-6 rounded-lg shadow-xl">
    <div class="content text-gray-800">
      <p class="text-base font-semibold">
        Tips dan Trik untuk Kinestetik:
        Gunakan teknik belajar berbasis aktivitas, seperti demonstrasi, percobaan, atau aktivitas fisik.
        Belajar dengan menciptakan atau memanipulasi objek membantu mengingat lebih baik.
      </p>
    </div>

    <div class="navigation-buttons flex justify-between mt-6">
      <button @click="prevTip" class="btn bg-blue-500 text-white hover:bg-blue-600">Prev</button>
      <button @click="nextTip" class="btn bg-blue-500 text-white hover:bg-blue-600">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TipsCard',
  
  data() {
    return {
      tips: [
        "Gunakan teknik belajar berbasis aktivitas, seperti demonstrasi, percobaan, atau aktivitas fisik.",
        "Belajar dengan menciptakan atau memanipulasi objek membantu mengingat lebih baik.",
        "Pahami konsep sebelum memulai latihan praktis.",
        "Jangan ragu untuk mencoba sesuatu dengan tangan atau tubuh untuk menguasai keterampilan baru."
      ],
      currentTipIndex: 0,
    };
  },

  methods: {
    nextTip() {
      if (this.currentTipIndex < this.tips.length - 1) {
        this.currentTipIndex++;
      } else {
        this.currentTipIndex = 0;  // Loop kembali ke awal
      }
    },
    prevTip() {
      if (this.currentTipIndex > 0) {
        this.currentTipIndex--;
      } else {
        this.currentTipIndex = this.tips.length - 1;  // Loop ke akhir
      }
    },
  },
};
</script>

<style scoped>
.tips-card {
  padding: 24px;
  background-color: #ebf8ff; /* Biru muda cerah */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.content {
  padding: 12px;
}

.text-base {
  font-size: 1.125rem; /* Ukuran font sedikit lebih besar */
}

.font-semibold {
  font-weight: 600; /* Penebalan font agar lebih mencolok */
}

.navigation-buttons button {
  padding: 12px 24px;
  font-size: 14px;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.navigation-buttons button:hover {
  background-color: #3182ce; /* Biru lebih gelap saat hover */
  transform: translateY(-2px); /* Efek angkat sedikit saat hover */
}

.navigation-buttons button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(56, 161, 255, 0.5); /* Fokus dengan highlight biru */
}
</style>
