<script setup lang="ts">
import EventsCard from '../components/Events/EventsCard.vue';

const events = [
  {
    id: '1',
    name: 'Vue 3 y sus ventajas',
    image:
      'https://vueschool.io/storage/media/c79100806b1bcc517afb50e981d605ed/vue-js-3-fundamentals-with-the-composition-api.jpg',
    user: 'Kevin Torrez',
  },
  {
    id: '2',
    name: 'Pinia: Vue Store',
    image:
      'https://vueschool.io/storage/media/39ebc760d644aa4625743dfc727ff737/pinia-the-enjoyable-vue-store.jpg',
    user: 'Fabio Zacari',
  },
  {
    id: '3',
    name: 'Vue + Typescript',
    image: 'https://vueschool.io/img/events/events-ts-vue-workshop-2.png',
    user: 'Daniel Rafael',
  },
  {
    id: '4',
    name: 'LaraVue: The popular stack',
    image:
      'https://vueschool.io/storage/media/16ce11772bf3727d68e90d9d8f41be18/laravel-backends-for-vue-js-3-not-transparent-1.jpg',
    user: 'Jhonny Chura',
  },
  {
    id: '5',
    name: 'LaraVue: The popular stack',
    image:
      'https://vueschool.io/storage/media/16ce11772bf3727d68e90d9d8f41be18/laravel-backends-for-vue-js-3-not-transparent-1.jpg',
    user: 'Jhonny Chura',
  },
  {
    id: '6',
    name: 'LaraVue: The popular stack',
    image:
      'https://vueschool.io/storage/media/16ce11772bf3727d68e90d9d8f41be18/laravel-backends-for-vue-js-3-not-transparent-1.jpg',
    user: 'Jhonny Chura',
  },
  {
    id: '7',
    name: 'LaraVue: The popular stack',
    image:
      'https://vueschool.io/storage/media/16ce11772bf3727d68e90d9d8f41be18/laravel-backends-for-vue-js-3-not-transparent-1.jpg',
    user: 'Jhonny Chura',
  },
];
</script>
<template>
  <div class="q-my-md">
    <q-card class="wayna-card-dashboard">
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </q-card-section>
    </q-card>
  </div>
  <h5 class="text-white text-bold q-my-lg">Otros sorteos</h5>
  <div class="row w-full">
    <div class="col">
      <div class="row q-col-gutter-lg">
        <div
          class="col-md-3 col-sm-4 col-xs-12"
          v-for="{ id, name, image, user } in events"
          :key="id"
        >
          <EventsCard :name="name" :image="image" :user="user" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wayna-card-dashboard {
  min-height: 350px;
  background-image: url('assets/discord-background.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
