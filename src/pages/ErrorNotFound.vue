<template>
  <div class="flex items-center" style="height: 100dvh">
    <q-card class="error-card q-pa-lg">
      <q-card-section horizontal>
        <img src="src/assets/img/404.png" />
        <q-card-section>
          <div class="text-h3">Recurso no encontrado</div>
          <div class="text-subtitle2 q-my-lg">
            Lo sentimos, no pudimos encontrar lo que estabas buscando.
          </div>
          <router-link :to="{ path: '/home' }">Volver al inicio</router-link>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>
<style lang="scss" scoped>
.error-card {
  max-width: 33%;
  margin: 0 auto;
}
</style>
