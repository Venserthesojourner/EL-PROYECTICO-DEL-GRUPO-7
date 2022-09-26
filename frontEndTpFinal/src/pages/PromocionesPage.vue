<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row q-col-gutter-sm justify-center">
    <div class="col-12 text-h3">User</div>
    <!-- Formulario -->
    <div class="col-12 col-md-6">
      <q-card flat class="q-pa-md" style="max-width: 500px">

        <q-card-section>
          <p class="text-h4 text-center">Modificar Promoción</p>
        </q-card-section>

        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input filled v-model="precioActual" type="number" label="Precio Actual" readonly=""
            hint="Este es el precio actual por hora" lazy-rules
            :rules="[ val => val && val.length > 0 || 'Por favor, ingrese un precio']">
            <template v-slot:prepend>
              <q-icon name="attach_money" />
            </template>
          </q-input>

          <q-input filled v-model="precioNew" type="number" label="Nuevo precio" hint="En pesos" lazy-rules
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
    <!-- Promoción -->
    <div class="col-12 col-md-6">
      <q-table grid :card-container-class="cardContainerClass" title="Mis Promoción" :rows="rows" :columns="columns"
        row-key="name" :filter="filter" hide-header v-model:pagination="pagination"
        :rows-per-page-options="rowsPerPageOptions">
        <!-- Filtro -->
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Buscar">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <!-- Tabla Promoción -->
        <template v-slot:item="props">
          <div class="q-pa-md col-12 col-lg-6">
            <q-card class="text-center">
              <q-card-section class="card-title text-white text-h4">
                {{ props.row.name }}
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
import { useQuasar } from 'quasar';
import { ref, computed, watch } from 'vue';

const deserts = [
  'Frozen Yogurt',
  'Ice cream sandwich',
  'Eclair',
  'Cupcake',
  'Gingerbread',
  'Jelly bean',
  'Lollipop',
  'Honeycomb',
  'Donut',
  'KitKat',
];

const rows = [];

deserts.forEach((name) => {
  for (let i = 0; i < 24; i += 1) {
    rows.push({ name: `${name}`, precio: 200 + Math.ceil(50 * Math.random()) });
  }
});

rows.sort(() => (-1 + Math.floor(2 * Math.random())));

export default {
  setup() {
    const $q = useQuasar();

    function getItemsPerPage() {
      if ($q.screen.lt.sm) {
        return 4;
      }
      if ($q.screen.lt.md) {
        return 8;
      }
      return 2;
    }

    const filter = ref('');
    const pagination = ref({
      page: 1,
      rowsPerPage: getItemsPerPage(),
    });

    watch(() => $q.screen.name, () => {
      pagination.value.rowsPerPage = getItemsPerPage();
    });

    return {
      rows,

      filter,
      pagination,

      columns: [
        { name: 'name', label: 'Name', field: 'name' },
        { name: 'precio', label: '$ Precio', field: 'precio' },
      ],

      rowsPerPageOptions: computed(() => ($q.screen.gt.xs
        ? $q.screen.gt.sm ? [2, 4, 8] : [2, 4]
        : [2])),
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
        background-image: url("../assets/background-c3.png")
        &.text-h4
          text-shadow: 0 0 5px #dfd2ff
      & .card-precio
        font-size: 2rem
        padding: 2px
</style>
