<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row q-col-gutter-sm justify-center">
    <!-- Formulario -->
    <div class="col-12 col-md-6">
      <q-card flat class="q-pa-md" style="max-width: 500px">

        <q-card-section>
          <p class="text-h4 text-center">Modificar Planes</p>
        </q-card-section>

        <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">

          <q-input filled v-model="nombre" type="text" label="Nuevo nombre" lazy-rules
            :rules="[ val => val && val.length > 0 || 'Por favor, ingrese un nombre']">
          </q-input>

          <q-input filled v-model="precio" type="number" label="Nuevo precio" hint="En pesos" lazy-rules
            :rules="[ val => val && val.length > 0 || 'Por favor, ingrese un precio']">
            <template v-slot:prepend>
              <q-icon name="attach_money" />
            </template>
          </q-input>

          <div class="row justify-end">
            <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm" />
            <q-btn label="Actualizar plan" type="submit" color="primary" />
          </div>
        </q-form>

      </q-card>
    </div>
    <!-- Planes -->
    <div class="col-12 col-md-6">
      <q-table grid :card-container-class="cardContainerClass" title="Mis Planes" :rows="planes" :columns="columns"
        :planes="planes" row-key="name" :filter="filter" hide-header v-model:pagination="pagination"
        :rows-per-page-options="rowsPerPageOptions">
        <!-- Filtro -->
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Buscar">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <!-- Tabla Planes -->
        <template v-slot:item="props">
          <div class="q-pa-md col-12 col-lg-6">
            <q-card class="text-center">
              <q-card-section class="card-title text-white text-h4">
                {{ props.row.nombre }}
              </q-card-section>
              <q-separator />
              <q-card-section class="card-precio flex flex-center">
                <div>$ {{ props.row.precio }}</div>
              </q-card-section>
            </q-card>
          </div>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

const columns = [{
  name: 'plan',
}];

const rows = [{
  nombre: 'nombrePlan',
  precio: 200 + Math.ceil(50 * Math.random()),
}];

export default {
  setup() {
    const nombre = ref(null);
    const precio = ref(null);

    const filter = ref('');
    const planes = ref([]);

    const onSubmit = () => {
      planes.value = [...planes.value, {
        nombre: nombre.value,
        precio: precio.value,
      }];
    };

    const onReset = () => {
      nombre.value = null;
      precio.value = null;
    };

    return {
      nombre,
      precio,
      onSubmit,
      onReset,
      columns,
      rows,
      planes,
    };
  },
};
</script>

<style lang="sass" scoped>
.q-table
  &__grid-content
    & .q-card
      border-radius: 1rem
      & .card-title
        background-color: #ffffff
        background-image: url("../assets/background-c2.png")
        text-shadow: 0 0 5px #dfd2ff
      & .card-precio
        font-size: 2rem
        padding: 2px
</style>
