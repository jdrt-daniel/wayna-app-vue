<script setup lang="ts">
defineProps<{
    name: string;
    path: string;
    icon: string;
}>()

</script>
<template>
    <q-item clickable class="text-white" :to="path" active-class="bg-primary" exact>
        <q-item-section avatar>
            <q-icon :name="icon" />
        </q-item-section>
        <q-item-section>
            <q-item-label class="text-white">{{ name }}</q-item-label>
        </q-item-section>
    </q-item>
</template>


<style scoped></style>