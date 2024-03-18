<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { QTableProps } from 'quasar';
import { getUserList } from '../services/users';

interface User {
  id: string;
  avatar: string;
  name: string;
  email: string;
  username: string;
}

const rows = ref<User[]>([]);
const columns = <QTableProps['columns']>[
  {
    name: 'name',
    label: 'Nombre',
    field: 'name',
    align: 'left',
    sortable: true,
  },
  {
    name: 'email',
    label: 'Correo',
    field: 'email',
    align: 'left',
    sortable: true,
  },
  {
    name: 'username',
    label: 'Calories',
    field: 'username',
    sortable: true,
  },
];

onMounted(() => {
  rows.value = getUserList();
});
</script>

<template>
  <q-table
    title="Usuarios"
    :rows="rows"
    :columns="columns"
    row-key="id"
    class="bg-secondary text-white"
  >
    <template #body="props">
      <q-tr :props="props">
        <q-td key="name" :props="props">
          <q-avatar size="40px" class="q-mr-sm">
            <img :src="props.row.avatar" />
          </q-avatar>
          {{ props.row.name }}
        </q-td>
        <q-td key="email" :props="props">
          {{ props.row.email }}
        </q-td>
        <q-td key="username" :props="props">
          {{ props.row.username }}
        </q-td>
      </q-tr>
    </template>
    <template #top-right>
      <q-btn color="primary" icon-right="add" label="Nuevo registro" no-caps />
    </template>
  </q-table>
</template>

<style scoped></style>
