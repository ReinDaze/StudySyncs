<template>
  <div class="flex justify-center items-center min-h-screen">
    <main class="flex flex-col bg-white shadow-lg rounded-3xl w-full max-w-[1007px] px-5 py-10 sm:px-20 sm:py-20">
      <section class="flex flex-col bg-zinc-300 rounded-t-3xl rounded-b-3xl p-5 max-w-full sm:p-8">
        <div class="flex flex-col justify-center items-center bg-white rounded-3xl border border-black p-5 sm:p-12">
          <div class="flex flex-col max-w-full sm:w-[550px]">
            <h1 class="text-xl font-semibold text-black text-center sm:text-2xl">
              Gaya belajarmu adalah
            </h1>
            <div class="mt-10 sm:mt-14">
              <div class="flex flex-wrap gap-5 justify-center">
                <article v-for="style in learningStyles" :key="style.name" class="flex flex-col w-[48%] sm:w-[33%]">
                  <div class="flex flex-col grow items-center mt-3.5 font-semibold text-black">
                    <img :src="style.imageUrl" class="object-contain self-stretch w-full aspect-square" />
                    <p class="mt-5 text-2xl">{{ style.percentage }}%</p>
                    <p class="mt-3 text-base">{{ style.name }}</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a href="/Soaluji" class="flex justify-center items-center bg-blue-500 text-white text-2xl font-bold rounded-b-3xl py-4 max-w-full w-[298px] mx-auto hover:bg-blue-600 transition-colors mt-5 sm:mt-3.5 sm:text-3xl sm:py-5">
        Kembali
      </a>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LearningStyleResult',
  data() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      learningStyles: [
        {
          name: 'Visual',
          percentage: parseInt(urlParams.get('visual')) || 0,
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/81a540af7c17a04ba7d71b311c8f6929da569b959755dc39ed527504570ccdb6?apiKey=4403a8f96f2f4610a2aa817af3063966&',
        },
        {
          name: 'Auditori',
          percentage: parseInt(urlParams.get('auditori')) || 0,
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fb265e523019916d0cd9f45574858e2c8fc9c062f2e5165dfba32b9439ad6ba8?apiKey=4403a8f96f2f4610a2aa817af3063966&',
        },
        {
          name: 'Kinestetik',
          percentage: parseInt(urlParams.get('kinestetik')) || 0,
          imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b1606e0e96098316c14a82511717196eac12d2fb45fab50d77b8ae57ca90e5d2?apiKey=4403a8f96f2f4610a2aa817af3063966&',
        },
      ],
    };
  },
});
</script>
