<template>
    <div class="bg-white p-4 rounded-lg shadow-md">
      <h3 class="text-lg font-semibold mb-2">Riwayat Gaya Belajar</h3>
      <table class="w-full text-left border-collapse">
        <thead>
          <tr>
            <th class="p-2">User</th>
            <th class="p-2">Tipe</th>
            <th class="p-2">Date</th>
            <th class="p-2">Poin</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(history, index) in histories" :key="index" class="border-t">
            <td class="p-2">Agusta</td>
            <td class="p-2">{{ history.type }}</td>
            <td class="p-2">{{ history.date }}</td>
            <td class="p-2">{{ history.point }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LearningHistory',
    data() {
      return {
        histories: [
          { type: 'Kinestetik', date: '14 Aug 2024', point: 57 },
          { type: 'Auditori', date: '11 Dec 2020', point: 45 },
          { type: 'Kinestetik', date: '5 Dec 2020', point: 65 },
          { type: 'Visual', date: '3 Dec 2020', point: 75 },
        ],
      }
    },
  }
  </script>
  