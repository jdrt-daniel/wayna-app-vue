<template>
  <q-layout view="hHh Lpr lHh">
    <q-header>
      <q-toolbar class="bg-secondary wayna-header">
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        <q-toolbar-title> Wayna App </q-toolbar-title>

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
      <MenuComponent />
    </q-drawer>

    <q-page-container class="bg-dark">
      <q-toolbar class="bg-dark q-pa-sm">
        <q-btn
          flat
          size="18px"
          icon="menu"
          color="white"
          aria-label="Menu"
          @click="handdleToggle"
        />
        <div class="q-mx-md text-white text-h6">
          <q-breadcrumbs>
            <q-breadcrumbs-el label="Home" />
            <q-breadcrumbs-el label="Dashboard" />
          </q-breadcrumbs>
        </div>
      </q-toolbar>
      <div class="q-pa-lg" style="height: calc(100dvh - 150px)">
        <router-view />
      </div>
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
