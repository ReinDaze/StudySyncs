<template>
  <div class="min-h-screen bg-gray-50 p-8 grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
    <!-- Header -->
    <HeaderContent v-if="showHeader" class="col-span-full mb-8"/>

    <!-- Profile and Learning Statistics -->
    <section class="md:col-span-2 lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
      <ProfileCard />
    </section>

    <!-- Learning Style Percentage Overview -->
    <section class="bg-white p-6 rounded-lg shadow-md lg:col-span-1 md:col-span-1">
      <h2 class="text-xl font-bold mb-4">Learning Style Results</h2>
      <div class="text-center">
        <div class="text-lg font-semibold mb-2">Visual: {{ visualPercent }}%</div>
        <div class="text-lg font-semibold mb-2">Auditory: {{ auditoriPercent }}%</div>
        <div class="text-lg font-semibold mb-2">Kinesthetic: {{ kinestetikPercent }}%</div>
      </div>
    </section>

    <!-- Biodata Section -->
    <section class="bg-white p-6 rounded-lg shadow-md lg:col-span-1 md:col-span-1">
      <Biodata />
    </section>

    <!-- Tips Section -->
    <section class="bg-white p-6 rounded-lg shadow-md lg:col-span-2 md:col-span-2">
      <TipsCard v-if="showTips" :learningStyle="learningStyle" />
    </section>

    <!-- Footer -->
    <FooterContent v-if="showFooter" class="col-span-full mt-8"/>
  </div>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import HeaderContent from '@/Components/HeaderContent.vue'
import FooterContent from '@/Components/FooterContent.vue'
import ProfileCard from '@/Components/ProfileCard.vue'
import LearningHistory from '@/Components/LearningHistory.vue'
import Biodata from '@/Components/Biodata.vue'
import TipsCard from '@/Components/TipsCard.vue'

export default {
  name: 'Dashboard',
  
  components: {
    Link,
    HeaderContent,
    FooterContent,  
    ProfileCard,
    LearningHistory,
    Biodata,
    TipsCard,
  },

  data() {
    return {
      showHeader: true,
      showFooter: true,
      showTips: true,
      visualPercent: 0,
      auditoriPercent: 0,
      kinestetikPercent: 0,
      learningStyle: '', // Visual, Auditori, or Kinestetik based on the highest percentage
    }
  },

  methods: {
    isCurrentRoute(path) {
      return this.$page.url === path
    },
    fetchLearningResults() {
      // Assume this data is passed as query parameters when redirected after the quiz
      const urlParams = new URLSearchParams(window.location.search);
      this.visualPercent = parseInt(urlParams.get('visual'), 10) || 0;
      this.auditoriPercent = parseInt(urlParams.get('auditori'), 10) || 0;
      this.kinestetikPercent = parseInt(urlParams.get('kinestetik'), 10) || 0;

      this.setLearningStyle();
    },
    setLearningStyle() {
      const maxPercent = Math.max(this.visualPercent, this.auditoriPercent, this.kinestetikPercent);
      if (maxPercent === this.visualPercent) {
        this.learningStyle = 'Visual';
      } else if (maxPercent === this.auditoriPercent) {
        this.learningStyle = 'Auditory';
      } else if (maxPercent === this.kinestetikPercent) {
        this.learningStyle = 'Kinesthetic';
      }
    }
  },

  mounted() {
    this.fetchLearningResults(); // Fetch results after mounting the component
  }
}
</script>

<style scoped>
/* Styling for layout adjustment */
.min-h-screen {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 768px) {
  .min-h-screen {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .min-h-screen {
    grid-template-columns: repeat(4, 1fr);
  }
}

.bg-white {
  background-color: #ffffff;
}

.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.p-6 {
  padding: 1.5rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

/* Additional styles for better layout and responsiveness */
.text-center {
  text-align: center;
}

.font-bold {
  font-weight: bold;
}

.text-lg {
  font-size: 1.125rem;
}

.text-xl {
  font-size: 1.25rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}
</style>
