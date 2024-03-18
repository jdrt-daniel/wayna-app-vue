<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { QTableProps } from 'quasar';
import { getList } from '../services/events';
import DialogModule from '../components/DialogModule.vue';

interface Event {
  id: string;
  image: string;
  name: string;
  start_date: string;
  end_date: string;
  description: string;
  serverId: string;
}

const show = ref<boolean>(false);
const rows = ref<Event[]>([]);
const award = ref<string>('');
const columns = <QTableProps['columns']>[
  {
    name: 'name',
    label: 'Nombre del evento',
    field: 'name',
    align: 'left',
    sortable: true,
  },
  {
    name: 'status',
    label: 'Estado',
    field: 'status',
    align: 'left',
    sortable: true,
  },
  {
    name: 'start_date',
    label: 'Fecha inicio',
    field: 'start_date',
    align: 'left',
    sortable: true,
  },
  {
    name: 'end_date',
    label: 'Fecha_fin',
    field: 'end_date',
    sortable: true,
  },
  {
    name: 'description',
    label: 'Descripcion',
    field: 'description',
    sortable: true,
  },
];
const eventData = ref({
  name: '',
  serverID: '',
  startDate: '',
  endDate: '',
  status: '',
  description: '',
  awards: [],
});

const openDialog = () => {
  show.value = true;
};

onMounted(() => {
  rows.value = getList();
});
</script>

<template>
  <q-table
    title="Eventos"
    :rows="rows"
    :columns="columns"
    row-key="id"
    class="bg-secondary text-white"
  >
    <template #body="props">
      <q-tr :props="props">
        <q-td key="name" :props="props">
          <q-avatar size="40px" class="q-mr-sm">
            <img :src="props.row.image" />
          </q-avatar>
          {{ props.row.name }}
        </q-td>
        <q-td key="status" :props="props">
          {{ props.row.status }}
        </q-td>
        <q-td key="start_date" :props="props">
          {{ props.row.start_date }}
        </q-td>
        <q-td key="end_date" :props="props">
          {{ props.row.end_date }}
        </q-td>
        <q-td key="description" :props="props">
          {{ props.row.description }}
        </q-td>
      </q-tr>
    </template>
    <template #top-right>
      <q-btn
        color="primary"
        icon-right="add"
        label="Nuevo registro"
        no-caps
        @click="openDialog"
      />
    </template>
  </q-table>

  <DialogModule v-model="show">
    <q-card class="form-card bg-dark text-white q-pa-lg">
      <q-card-section>
        <div class="text-h6">Nuevo Evento</div>
        <div class="text-subtitle2 text-warning">by John Doe</div>
      </q-card-section>
      <q-card-section horizontal>
        <q-card-section>
          <div class="q-pa-md img-uploader">
            <img src="/src/assets/img/fly.png" alt="" width="150" />
          </div>
        </q-card-section>
        <q-card-section>
          <div class="row q-col-gutter-md">
            <div class="col-md-6 col-sm-12">
              <q-input
                outlined
                round
                v-model="eventData.name"
                type="text"
                label="Nombre del evento"
                color="white"
                dark
              />
            </div>
            <div class="col-md-6 col-sm-12">
              <q-input
                outlined
                round
                v-model="eventData.serverID"
                type="text"
                label="ID Servidor"
                color="white"
                dark
              />
            </div>
            <div class="col-md-6 col-sm-12">
              <q-input
                outlined
                round
                v-model="eventData.startDate"
                type="text"
                label="Fecha inicio"
                color="white"
                dark
              />
            </div>
            <div class="col-md-6 col-sm-12">
              <q-input
                outlined
                round
                v-model="eventData.endDate"
                type="text"
                label="Fecha fin"
                color="white"
                dark
              />
            </div>
            <div class="col-md-6 col-sm-12">
              <q-input
                outlined
                round
                v-model="eventData.status"
                type="text"
                label="Estado"
                color="white"
                dark
              />
            </div>
            <div class="col-md-6 col-sm-12">
              <q-input
                outlined
                round
                v-model="eventData.status"
                type="text"
                label="Estado"
                color="white"
                dark
              />
            </div>
            <div class="col-12">
              <q-input
                outlined
                round
                v-model="eventData.description"
                type="textarea"
                label="Descripcion"
                color="white"
                dark
              />
            </div>
          </div>
          <div class="q-mt-md">
            <h6 class="q-my-sm">Premios</h6>
            <q-input
              v-model="award"
              type="text"
              label=""
              dark
              outlined
              class="q-mb-md"
            />
            <q-list bordered dark class="text-warning">
              <q-item clickable v-ripple>
                <q-item-section>#1. Chanchito</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>#2. 500 luquitas</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>#3. 250 luquitas</q-item-section>
              </q-item>
            </q-list>
          </div>
        </q-card-section>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn flat label="Cancelar" v-close-popup />
        <q-btn dark label="Guardar" v-close-popup />
      </q-card-actions>
    </q-card>
  </DialogModule>
</template>

<style lang="scss" scoped>
.form-card {
  min-width: 50%;
}
.img-uploader {
  min-width: 300px;
  text-align: center;
  border: 1px dashed #ffff;
  border-radius: 30px;
}
</style>
