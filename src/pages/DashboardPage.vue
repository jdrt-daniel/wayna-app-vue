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
    <q-card class="wayna-card-dashboard text-white">
      <q-card-section horizontal>
        <q-card-section class="col-6 text-center">
          <h5 class="">Sorteo principal 2024</h5>
          <div class="text-center w-full q-mb-lg">
            <div class="bg-number">
              <h2 class="q-ma-none text-bold">102</h2>
              <h5 class="q-ma-none">Participantes</h5>
            </div>
          </div>
          <q-btn color="primary" label="INICIAR SORTEO" />
        </q-card-section>
        <q-card-section class="col-6">
          <q-list bordered class="bg-participants text-white w-full">
            <q-item clickable v-ripple>
              <q-avatar
                size="40px"
                font-size="20px"
                color="white"
                text-color="dark"
                icon="person"
                class="q-mr-md"
              />
              <q-item-section>Daniel Rafael</q-item-section>
              <q-item-section
                >Se unió el 11 de marza a las 17:00
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-avatar
                size="40px"
                font-size="20px"
                color="white"
                text-color="dark"
                icon="person"
                class="q-mr-md"
              />
              <q-item-section>Daniel Rafael</q-item-section>
              <q-item-section
                >Se unió el 11 de marza a las 17:00
              </q-item-section> </q-item
            ><q-item clickable v-ripple>
              <q-avatar
                size="40px"
                font-size="20px"
                color="white"
                text-color="dark"
                icon="person"
                class="q-mr-md"
              />
              <q-item-section>Daniel Rafael</q-item-section>
              <q-item-section
                >Se unió el 11 de marza a las 17:00
              </q-item-section> </q-item
            ><q-item clickable v-ripple>
              <q-avatar
                size="40px"
                font-size="20px"
                color="white"
                text-color="dark"
                icon="person"
                class="q-mr-md"
              />
              <q-item-section>Daniel Rafael</q-item-section>
              <q-item-section
                >Se unió el 11 de marza a las 17:00
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
  <h5 class="text-white text-bold q-my-lg">Otros sorteos</h5>
  <div class="row w-full">
    <div class="col">
      <div class="row q-col-gutter-lg">
        <div
          class="col-lg-3 col-md-4 col-sm-4 col-xs-12"
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
  min-height: 400px;
  background-image: url('assets/img/discord-background.webp');
  background-size: 65%;
  opacity: 1;
  background-repeat: repeat-x;
  background-position: center;
}

.bg-participants {
  background: #302f2f93;
  color: #ffff;
  border-radius: 10px;
}
.bg-number {
  background: #39327993;
  color: #ffff;
  border-radius: 10px;
  max-width: 200px;
  padding: 10px;
  margin: 0 auto;
}
</style>
