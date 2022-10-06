<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-page class="q-pa-md row q-col-gutter-sm">
    <div class="col-12 col-md-6 justify-center">
      <q-card class="q-pa-md rounded-borders" style="max-width: 400px">

        <q-card-section>
          <p class="text-h4 text-center">Modificar Precios</p>
        </q-card-section>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input filled v-model="precioActual" type="number" label="Precio Actual" readonly=""
            hint="Este es el precio actual por hora" lazy-rules
            :rules="[ val => val && val.length > 0 || 'Por favor, ingrese un precio']">
            <template v-slot:prepend>
              <q-icon name="attach_money" />
            </template>
          </q-input>

          <q-input filled v-model="precioNew" type="number" label="Nuevo precio por hora" hint="En pesos" lazy-rules
            :rules="[ val => val && val.length > 0 || 'Por favor, ingrese un precio']">
            <template v-slot:prepend>
              <q-icon name="attach_money" />
            </template>
          </q-input>
          <div class="row justify-end">
            <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm" />
            <q-btn label="Actualizar precio" type="submit" color="primary" />
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
    const precioActual = ref(100);
    const precioNew = ref(null);

    return {
      precioActual,
      precioNew,
      columns,
      rows,
    };
  },
};
</script>
