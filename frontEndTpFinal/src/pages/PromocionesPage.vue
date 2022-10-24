<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row q-col-gutter-sm justify-center">
    <!-- Formulario -->
    <div class="col-12 col-md-6">
      <q-card flat class="q-pa-md">

        <q-card-section class="q-pt-none">
          <p class="text-h4 text-center">Agregar Promoción</p>
        </q-card-section>

        <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
          <!-- Nombre Promoción -->
          <q-input filled v-model="name" type="text" label="Nombre" lazy-rules :rules="nameRules">
            <template v-slot:prepend>
              <q-icon name="edit" />
            </template>
          </q-input>
          <!-- Precio Promoción -->
          <q-input filled v-model="precio" type="number" label="Precio" hint="En pesos" lazy-rules :rules="precioRules">
            <template v-slot:prepend>
              <q-icon name="attach_money" />
            </template>
          </q-input>
          <!-- Botones -->
          <div class="row justify-end">
            <q-btn label="Limpiar" type="reset" color="primary" flat class="q-mr-sm" />
            <q-btn label="Agregar" type="submit" color="primary" />
          </div>
        </q-form>

      </q-card>
    </div>
    <!-- Promoción -->
    <div class="col-12 col-md-6">
      <q-table grid title="Mis Promociones" :rows="promos" :columns="columns" :promos="promos" row-key="name"
        :filter="filter" hide-header v-model:pagination="pagination" :rows-per-page-options="rowsPerPageOptions">
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

export default {
  setup() {
    const $q = useQuasar();
    const name = ref(null);
    const precio = ref(null);
    const promos = [];

    deserts.forEach((nombre) => {
      for (let i = 0; i < 1; i += 1) {
        promos.push({ name: `${nombre}`, precio: 200 + Math.ceil(50 * Math.random()) });
      }
    });

    promos.sort(() => (-1 + Math.floor(2 * Math.random())));

    const onSubmit = () => {
      promos.value = [...promos.value, {
        name: name.value,
        precio: precio.value,
      }];
    };

    const onReset = () => {
      name.value = null;
      precio.value = null;
    };

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
      name,
      precio,
      onSubmit,
      onReset,
      filter,
      pagination,
      promos,
      rowsPerPageOptions: computed(() => ($q.screen.gt.xs
        ? $q.screen.gt.sm ? [2, 4, 8] : [2, 4]
        : [2])),
      nameRules: [
        (val) => (val && val.length > 0) || 'Por favor, ingrese un nombre',
      ],
      precioRules: [
        (val) => (val && val.length > 0) || 'Por favor, ingrese un precio',
        (val) => (val > 0) || 'Por favor, ingrese un valor válido',
      ],
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
        background-image: url("../assets/background-rd1.png")
        &.text-h4
          text-shadow: 0 0 5px #dfd2ff
      & .card-precio
        font-size: 2rem
        padding: 2px
  &__container
    padding-top: 4px
</style>
