<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Header Component -->
      <HeaderContent />
  
      <!-- Test Content -->
      <div class="max-w-4xl mx-auto px-4 py-8">
        <h1 class="text-2xl font-bold text-center mb-2">Tes Gaya Belajar</h1>
        <p class="text-center text-gray-600 mb-8">Jawablah pertanyaan sesuai dengan tingkat kecocokan dengan diri sendiri</p>
        
        <div class="text-right mb-4 text-gray-600">Page 1/3</div>
  
        <form @submit.prevent="handleSubmit" class="space-y-8">
          <!-- Generate questions and options dynamically -->
          <div v-for="(question, index) in questions" :key="index" class="bg-white p-6 rounded-lg shadow-sm">
            <p class="font-medium mb-4">{{ index + 1 }}. {{ question }}</p>
            <div class="space-y-3">
              <label v-for="(option, optionIndex) in options" :key="optionIndex" class="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <input
                  type="radio"
                  :name="'question_' + (index + 1)"
                  :value="option.letter"
                  class="mt-1"
                  v-model="answers[index]"
                  required
                />
                <div class="flex items-center space-x-2">
                  <span class="text-gray-600">{{ option.letter }}.</span>
                  <span class="text-gray-600">{{ option.text }}</span>
                </div>
              </label>
            </div>
          </div>
  
          <!-- Submit Button -->
          <div class="flex justify-center">
            <button type="submit" class="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
              Next Page
            </button>
          </div>
        </form>
      </div>
  
      <!-- Footer Component -->
      <FooterContent />
    </div>
  </template>
  
  <script>
  import HeaderContent from '@/Components/HeaderContent.vue'
  import FooterContent from '@/Components/FooterContent.vue'
  
  export default {
    components: {
      HeaderContent,
      FooterContent,
    },
    data() {
      return {
        questions: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit:",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit:",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit:",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit:",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit:"
        ],
        options: [
          { letter: 'A', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
          { letter: 'B', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
          { letter: 'C', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" }
        ],
        answers: Array(5).fill(null) // Array to store selected answers
      }
    },
    methods: {
      handleSubmit() {
        // Handle form submission, e.g., navigate to the next page or process the answers
        console.log(this.answers)
        // Redirect to the next page or another action
        this.$inertia.post('/gayabelajar', { answers: this.answers })
      }
    }
  }
  </script>
  
  <style scoped>
  /* Additional styling can be added here if necessary */
  </style>
  