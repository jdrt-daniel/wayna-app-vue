<template>
  <q-layout view="lHh lpR fFf">
    <q-header>
      <q-toolbar class="bg-dark wayna-header">
        <q-btn
          flat
          size="18px"
          icon="menu"
          color="white"
          aria-label="Menu"
          @click="handdleToggle"
        />

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="text-grey-7" icon="apps">
            <q-tooltip>Google Apps</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="text-grey-7" icon="notifications">
            <q-badge color="red" text-color="white" floating> 2 </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="30px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="toggle" show-if-above class="bg-secondary">
      <q-item class="q-pa-md">
        <q-item-section top avatar>
          <img src="src/assets/img/ISO MONO2.png" width="50px" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h5 text-white">Wayna App</q-item-label>
          <q-item-label caption lines="2" class="text-warning">
            by Devtalles
          </q-item-label>
        </q-item-section>
      </q-item>
      <MenuComponent />
    </q-drawer>

    <q-page-container class="bg-dark full-heigth">
      <q-scroll-area class="q-px-lg" style="height: calc(100dvh - 100px)">
        <router-view />
      </q-scroll-area>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import MenuComponent from '../components/Menu/MenuComponent.vue';
import { ref } from 'vue';

const toggle = ref(false);

const handdleToggle = () => {
  toggle.value = !toggle.value;
};
</script>

<style lang="scss">
.full-heigth {
  height: 100dvh;
}
</style>
