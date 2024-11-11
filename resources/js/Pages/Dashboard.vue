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
      <LearningHistory />
    </section>

    <!-- Biodata Section -->
    <section class="bg-white p-6 rounded-lg shadow-md lg:col-span-1 md:col-span-1">
      <Biodata />
    </section>

    <!-- Tips Section -->
    <section class="bg-white p-6 rounded-lg shadow-md lg:col-span-2 md:col-span-2">
      <TipsCard v-if="showTips"/>
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
    }
  },

  methods: {
    isCurrentRoute(path) {
      return this.$page.url === path
    }
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
</style>
