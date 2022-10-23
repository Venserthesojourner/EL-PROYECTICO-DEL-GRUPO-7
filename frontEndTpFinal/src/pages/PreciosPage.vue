<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row q-col-gutter-sm justify-center">
    <!-- Formulario -->
    <div class="col-12 col-md-6">
      <q-card flat class="q-pa-md" style="max-width: 500px">

        <q-card-section class="q-pt-none">
          <p class="text-h4 text-center">Modificar Precios</p>
        </q-card-section>

        <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
          <!-- Seleccionar Hora -->
          <q-select filled v-model="hora" :options="options" label="Seleccionar Hora">
            <template v-slot:prepend>
              <q-icon name="schedule" />
            </template>
          </q-select>
          <!-- Nuevo Precio -->
          <q-input filled v-model="precioNew" type="number" label="Nuevo Precio" hint="En pesos" lazy-rules
            :rules="precioRules">
            <template v-slot:prepend>
              <q-icon name="attach_money" />
            </template>
          </q-input>
          <!-- Botones -->
          <div class="row justify-end">
            <q-btn label="Limpiar" type="reset" color="primary" flat class="q-mr-sm" />
            <q-btn label="Actualizar" type="submit" color="primary" />
          </div>
        </q-form>

      </q-card>
    </div>
    <div class="col-12 col-md-6">
      <q-table dense title="Precios por Hora" :rows="rows" :columns="columns" row-key="name" />
    </div>
  </q-page>
</template>
<!-- eslint-disable linebreak-style -->
<script>
import { ref } from 'vue';

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Hora',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'precio', align: 'left', label: 'Precio', field: 'precio', sortable: true,
  },
];

const rows = [
  {
    name: 1,
    precio: 100,
  },
  {
    name: 2,
    precio: 200,
  },
  {
    name: 3,
    precio: 300,
  },
  {
    name: 4,
    precio: 400,
  },
  {
    name: 5,
    precio: 500,

  },
  {
    name: 6,
    precio: 600,
  },
  {
    name: 7,
    precio: 700,
  },
  {
    name: 8,
    precio: 800,
  },
  {
    name: 9,
    precio: 900,
  },
  {
    name: 10,
    precio: 1000,
  },
];

export default {
  setup() {
    const hora = ref(null);
    const precioNew = ref(null);

    const onSubmit = () => {
      rows.value = [...rows.value, {
        hoar: hora.value,
        precio: precioNew.value,
      }];
    };

    const onReset = () => {
      hora.value = null;
      precioNew.value = null;
    };

    return {
      hora,
      precioNew,
      onSubmit,
      onReset,
      columns,
      rows,
      options: [
        1, 2, 3, 4, 5,
      ],
      precioRules: [
        (val) => (val && val.length > 0) || 'Por favor, ingrese un precio',
        (val) => (val > 0) || 'Por favor, ingrese un valor válido',
      ],
    };
  },
};
</script>
