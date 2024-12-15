<template>
  <MainLayout>
    <div class="max-w-4xl mx-auto py-8">
      <h1 class="text-3xl font-semibold text-center mb-2">Tes Gaya Belajar</h1>
      <p class="text-center mb-6">Jawablah pertanyaan sesuai dengan tingkat kecocokan dengan diri sendiri</p>

      <!-- Pagination Controls -->
      <p class="text-center mb-4">Page {{ currentPage }} / {{ totalPages }}</p>

      <!-- Display questions with answer options -->
      <div v-for="(soal, index) in paginatedSoals" :key="soal.id" class="mb-8">
        <p class="font-semibold mb-2">{{ (currentPage - 1) * questionsPerPage + index + 1 }}. {{ soal.soal }}</p>

        <!-- Display answer options as radio buttons -->
        <div v-for="(jawaban, idx) in soal.jawaban_options" :key="idx" class="mb-2">
          <label :for="'jawaban-' + soal.id + '-' + idx" class="inline-flex items-center">
            <input
              type="radio"
              :id="'jawaban-' + soal.id + '-' + idx"
              :name="'jawaban-' + soal.id"
              :value="'jawaban_' + (idx + 1)"
              v-model="answers[soal.id]"
              class="mr-2"
            />
            {{ jawaban }}
          </label>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <div class="flex justify-between mt-8">
        <button
          v-if="currentPage > 1"
          @click="previousPage"
          class="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Previous Page
        </button>

        <button
          v-if="currentPage < totalPages"
          @click="nextPage"
          class="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next Page
        </button>

        <!-- Submit Button with Disabled State if Not All Answered -->
        <button
          v-else
          @click="submitAnswers"
          :disabled="isSubmitDisabled"
          class="bg-green-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { usePage, router } from '@inertiajs/vue3';
import MainLayout from '@/Layouts/MainLayout.vue';

// Fetch questions from backend props
const { props } = usePage();
const questions = props.soals || []; // Assuming this contains the structure [{ id, soal, jawaban_options: [option1, option2, ...] }, ...]

const answers = ref({}); // Stores selected answer for each question
const currentPage = ref(1);
const questionsPerPage = 10;

let shuffledQuestions = ref([]);

// Shuffle function to randomize an array (Fisher-Yates Algorithm)
const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
  return arr;
};

// Shuffle questions and answers only once on component mount
onMounted(() => {
  // Shuffle the questions and take only 30 questions
  shuffledQuestions.value = shuffleArray(questions).slice(0, 30);

  // Shuffle answers for each question
  shuffledQuestions.value.forEach((soal) => {
    soal.jawaban_options = shuffleArray(soal.jawaban_options);
  });
});

// Calculate total pages based on the number of questions
const totalPages = computed(() => {
  return Math.ceil(shuffledQuestions.value.length / questionsPerPage);
});

// Computed property to get questions for the current page
const paginatedSoals = computed(() => {
  const start = (currentPage.value - 1) * questionsPerPage;
  const end = start + questionsPerPage;
  return shuffledQuestions.value.slice(start, end);
});

// Computed property to check if all questions have been answered
const isSubmitDisabled = computed(() => {
  // Check if there are any unanswered questions
  return Object.keys(answers.value).length < shuffledQuestions.value.length;
});

// Methods
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const submitAnswers = () => {
  const payload = {
    jawaban: answers.value, // Format data yang dikirim ke backend
  };

  router.post('/submit-kuisioner', payload, {
    onSuccess: () => {
      // Redirect ke halaman hasil
      router.visit('/hasil-kuisioner', {
        method: 'get',
      });
    },
    onError: (errors) => {
      alert('Terjadi kesalahan. Pastikan semua pertanyaan telah dijawab.');
      console.error(errors);
    },
  });
};
</script>

<style scoped>
/* Optional: styling to match your design */
</style>
