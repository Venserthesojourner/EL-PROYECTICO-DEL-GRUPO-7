<!-- eslint-disable max-len -->
<!-- eslint-disable comma-dangle -->
<template>
  <q-page class="q-pa-md row q-col-gutter-sm">
    <div class="col-12 col-md-6 justify-center">
      <q-card class="q-pa-md rounded-borders" style="max-width: 400px">

        <q-card-section>
          <p class="text-h4 text-center">Modificar Precios</p>
        </q-card-section>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input filled v-model="precio" type="text" label="Precio *" hint="En pesos" lazy-rules
            :rules="[ val => val && val.length > 0 || 'Por favor, ingrese un precio']" />

          <q-input filled type="text" v-model="hora" label="Hora *" lazy-rules
            :rules="[ val => val && val.length > 0 || 'Por favor, ingrese un horario']" />
          <div class="row justify-end">
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            <q-btn label="Submit" type="submit" color="primary" />
          </div>
        </q-form>

      </q-card>
    </div>
    <div class="col-12 col-md-6">
      <q-table dense title="Precios por Hora" :rows="rows" :columns="columns" row-key="name" />
    </div>
  </q-page>
</template>

<script>
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
    return {
      columns,
      rows,
    };
  },
};
</script>
