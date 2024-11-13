<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderContent />

    <div class="max-w-4xl mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold text-center mb-2">Tes Gaya Belajar</h1>
      <p class="text-center text-gray-600 mb-8">
        Jawablah pertanyaan sesuai dengan tingkat kecocokan dengan diri sendiri
      </p>

      <div class="text-right mb-4 text-gray-600">Page 1/3</div>

      <form @submit.prevent="calculateResult" class="space-y-8">
        <div
          v-for="(question, index) in questions"
          :key="index"
          class="bg-white p-6 rounded-lg shadow-sm"
        >
          <p class="font-medium mb-4">{{ index + 1 }}. {{ question.text }}</p>
          <div class="space-y-3">
            <label
              v-for="option in question.options"
              :key="option.letter"
              class="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50"
            >
              <input
                type="radio"
                :name="'question_' + index"
                :value="option.type"
                class="mt-1"
                v-model="answers[index]"
                required
              />
              <span class="text-gray-600">{{ option.letter }}. {{ option.text }}</span>
            </label>
          </div>
        </div>

        <div class="flex justify-center">
          <button
            type="submit"
            class="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Next Page
          </button>
        </div>
      </form>
    </div>

    <FooterContent />
  </div>
</template>

<script>
import HeaderContent from '@/components/HeaderContent.vue';
import FooterContent from '@/components/FooterContent.vue';

export default {
  components: {
    HeaderContent,
    FooterContent,
  },
  data() {
    return {
      questions: [
        {
          text: "Saat mendengarkan penjelasan, bagaimana cara Anda paling mudah memahami informasi?",
          options: [
            { letter: 'A', text: "Dengan mendengarkan dan mengulangi informasi secara lisan.", type: "Auditori" },
            { letter: 'B', text: "Dengan melihat gambar atau diagram.", type: "Visual" },
            { letter: 'C', text: "Dengan langsung mencoba atau menyentuh objek.", type: "Kinestetik" },
          ],
        },
        {
          text: "Apa yang paling membantu Anda mengingat materi pelajaran?",
          options: [
            { letter: 'A', text: "Mendengarkan ceramah atau diskusi.", type: "Auditori" },
            { letter: 'B', text: "Melihat catatan yang penuh dengan gambar atau warna.", type: "Visual" },
            { letter: 'C', text: "Melakukan aktivitas atau praktek langsung", type: "Kinestetik" },
          ],
        },
        {
          text: "Ketika belajar, Anda lebih suka",
          options: [
            { letter: 'A', text: "Mendengarkan audio atau penjelasan lisan", type: "Auditori" },
            { letter: 'B', text: "Membaca buku atau melihat diagram. ", type: "Visual" },
            { letter: 'C', text: "Bergerak atau menggunakan tangan untuk mencoba. ", type: "Kinestetik" },
          ],
        },
        {
          text: "Jika harus mempelajari lokasi baru, apa yang akan Anda lakukan?",
          options: [
            { letter: 'A', text: "Meminta orang menjelaskan arahnya. .", type: "Auditori" },
            { letter: 'B', text: "Melihat peta atau gambar lokasi. ", type: "Visual" },
            { letter: 'C', text: "Menjelajahi tempat itu sendiri. ", type: "Kinestetik" },
          ],
        },
        {
          text: "Bagaimana Anda biasanya mengingat nama seseorang?",
          options: [
            { letter: 'A', text: "Dengan mendengar orang lain menyebutkan nama mereka. ", type: "Auditori" },
            { letter: 'B', text: "Dengan mengingat wajah atau penampilannya. ", type: "Visual" },
            { letter: 'C', text: "Dengan berjabat tangan atau melakukan aktivitas bersama orang tersebut", type: "Kinestetik" },
          ],
        },
        {
          text: "Apa yang paling membantu Anda ketika menonton presentasi?",
          options: [
            { letter: 'A', text: "Mendengarkan penjelasan pembicara. ", type: "Auditori" },
            { letter: 'B', text: "Melihat slide atau materi visual. ", type: "Visual" },
            { letter: 'C', text: "Berpartisipasi dalam diskusi atau demonstrasi langsung. ", type: "Kinestetik" },
          ],
        },
        {
          text: "Dalam situasi belajar kelompok, Anda lebih suka",
          options: [
            { letter: 'A', text: "Mendiskusikan materi dengan anggota kelompok. ", type: "Auditori" },
            { letter: 'B', text: "Melihat presentasi visual yang disediakan. ", type: "Visual" },
            { letter: 'C', text: "Berpartisipasi dalam aktivitas kelompok secara langsung. ", type: "Kinestetik" },
          ],
        },
        {
          text: "Jika Anda harus mengingat daftar panjang informasi, apa yang Anda lakukan?",
          options: [
            { letter: 'A', text: "Penjelasan verbal yang diberikan.", type: "Auditori" },
            { letter: 'B', text: "Visualisasi dan gambar dalam video.", type: "Visual" },
            { letter: 'C', text: "Demonstrasi fisik atau aktivitas yang ditampilkan. ", type: "Kinestetik" },
          ],
        },
        {
          text: "Bagaimana Anda biasanya mengekspresikan ide-ide Anda?",
          options: [
            { letter: 'A', text: "Dengan berbicara atau mendiskusikan ide secara lisan.", type: "Auditori" },
            { letter: 'B', text: "Dengan membuat diagram atau menulis catatan.", type: "Visual" },
            { letter: 'C', text: "Dengan memperagakan atau menunjukkan ide secara fisik.", type: "Kinestetik" },
          ],
        },
        {
          text: "Ketika mencoba mempelajari keterampilan baru, apa yang biasanya Anda lakukan?",
          options: [
            { letter: 'A', text: "Mendengarkan orang lain menjelaskan cara melakukannya.", type: "Auditori" },
            { letter: 'B', text: "Melihat contoh atau gambar yang menjelaskan langkah-langkahnya.", type: "Visual" },
            { letter: 'C', text: "Langsung mencobanya sendiri.", type: "Kinestetik" },
          ],
        },
        {
          text: "Saat berada di tempat umum dan perlu mencari informasi, Anda lebih suka:",
          options: [
            { letter: 'A', text: "Mendengarkan petugas menjelaskan.", type: "Auditori" },
            { letter: 'B', text: "Membaca petunjuk arah atau peta.", type: "Visual" },
            { letter: 'C', text: "Menjelajahi area tersebut sendiri.", type: "Kinestetik" },
          ],
        },
        {
          text: "Apa yang Anda lakukan ketika menghadapi masalah dalam memahami konsep?",
          options: [
            { letter: 'A', text: "Bertanya dan mendengarkan penjelasan dari orang lain.", type: "Auditori" },
            { letter: 'B', text: "Melihat ilustrasi atau grafik yang menjelaskan konsep tersebut.", type: "Visual" },
            { letter: 'C', text: "Mencoba memahami konsep tersebut dengan melakukan kegiatan yang berhubungan.", type: "Kinestetik" },
          ],
        },
        {
          text: "Saat belajar, bagaimana Anda merasa lebih mudah memahami materi?",
          options: [
            { letter: 'A', text: "Mendengarkan penjelasan secara verbal.", type: "Auditori" },
            { letter: 'B', text: "Melihat diagram atau gambar.", type: "Visual" },
            { letter: 'C', text: "Melakukan aktivitas langsung atau simulasi.", type: "Kinestetik" },
          ],
        },
        {
          text: "Ketika menghadapi situasi baru, apa yang membuat Anda merasa lebih nyaman?",
          options: [
            { letter: 'A', text: "Mendengarkan penjelasan mengenai situasi tersebut", type: "Auditori" },
            { letter: 'B', text: "Melihat contoh visual atau peta.", type: "Visual" },
            { letter: 'C', text: "Langsung mengalami situasi tersebut.", type: "Kinestetik" },
          ],
        },
        {
          text: "Jika Anda membaca instruksi, bagaimana Anda memahaminya?",
          options: [
            { letter: 'A', text: "Dengan membaca keras-keras instruksinya.", type: "Auditori" },
            { letter: 'B', text: "Dengan melihat diagram atau gambar yang menyertainya.", type: "Visual" },
            { letter: 'C', text: "Dengan melakukan tindakan berdasarkan instruksi tersebut.", type: "Kinestetik" },
          ],
        },
        {
          text: "Saat mengikuti pelajaran, Anda lebih suka:",
          options: [
            { letter: 'A', text: "Mendengarkan guru berbicara.", type: "Auditori" },
            { letter: 'B', text: "Melihat bahan visual seperti diagram atau video.", type: "Visual" },
            { letter: 'C', text: "Terlibat dalam percobaan atau simulasi.", type: "Kinestetik" },
          ],
        },
        {
          text: "Bagaimana Anda biasanya memahami cerita dalam sebuah buku?",
          options: [
            { letter: 'A', text: "Mendengarkan cerita atau membacanya keras-keras.", type: "Auditori" },
            { letter: 'B', text: "Membayangkan gambaran visual dari cerita tersebut.", type: "Visual" },
            { letter: 'C', text: "Mengaitkan cerita tersebut dengan pengalaman atau aktivitas.", type: "Kinestetik" },
          ],
        },
        {
          text: "Apa yang Anda lakukan saat mencoba mengingat kembali suatu pelajaran?",
          options: [
            { letter: 'A', text: "Mengulang kembali apa yang sudah didengar.", type: "Auditori" },
            { letter: 'B', text: "Melihat contoh visual atau peta.", type: "Visual" },
            { letter: 'C', text: "Mencoba melakukan kembali aktivitas yang berhubungan dengan pelajaran tersebut.", type: "Kinestetik" },
          ],
        },
      ],
      answers: Array(20).fill(null), // Menyimpan jawaban pengguna
    };
  },
  methods: {
    calculateResult() {
      const counts = { Auditori: 0, Visual: 0, Kinestetik: 0 };

      this.answers.forEach(answer => {
        if (answer) counts[answer]++;
      });

      // Hitung persentase
      const total = this.answers.length;
      const auditoriPercent = Math.round((counts.Auditori / total) * 100);
      const visualPercent = Math.round((counts.Visual / total) * 100);
      const kinestetikPercent = Math.round((counts.Kinestetik / total) * 100);

      // Redirect ke halaman hasil dengan persentase
      const queryString = new URLSearchParams({
        auditori: auditoriPercent,
        visual: visualPercent,
        kinestetik: kinestetikPercent,
      }).toString();

      window.location.href = `/gayabelajar?${queryString}`;
    },
  },
};
</script>

<style scoped>
/* Tambahkan styling di sini */
</style>
