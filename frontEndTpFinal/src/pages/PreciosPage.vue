<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row q-col-gutter-sm justify-center">
    <!-- Formulario -->
    <div class="col-12 col-md-6">
      <q-card dark flat class="q-pa-md">

        <q-card-section class="q-pt-none">
          <p class="text-h4 text-center">Modificar Precios</p>
        </q-card-section>

        <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
          <!-- Seleccionar Hora -->
          <q-input filled dark v-model="hora" type="number" label="Hora" hint="Seleccionar Hora" lazy-rules
            :rules="horaRules">
            <template v-slot:prepend>
              <q-icon name="schedule" />
            </template>
          </q-input>
          <!-- Nuevo Precio -->
          <q-input filled dark v-model="precioNew" type="number" label="Nuevo Precio" hint="En pesos" lazy-rules
            :rules="precioRules" class="q-mb-lg">
            <template v-slot:prepend>
              <q-icon name="attach_money" />
            </template>
          </q-input>
          <!-- Botones -->
          <div class="row justify-end">
            <q-btn label="Limpiar" type="reset" color="positive" flat class="q-mr-sm" />
            <q-btn label="Actualizar" type="submit" color="positive" text-color="dark" />
          </div>
        </q-form>

      </q-card>
    </div>
    <!-- Precios -->
    <div class="col-12 col-md-6">
      <q-table dark flat title="Precios por Hora" :rows="rows" :columns="columns" row-key="name" selection="single"
        v-model:selected="selected" :filter="filter" v-model:pagination="pagination"
        :rows-per-page-options="rowsPerPageOptions">
        <!-- Filtro -->
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Buscar">
            <template v-slot:append>
              <q-icon name="search" color="white" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref, computed, watch, onMounted } from 'vue';

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
    const $q = useQuasar();
    const hora = ref(null);
    const precioNew = ref(null);

    onMounted(() => {
      //TODO: en teoria esto se carga primero
      // setTimeout(() => {
      //   axios.get(`http://localhost:3000/usuario/username/${username.value}`)
      //     .then((response) => {
      //       console.log(response);
      //       // TODO: seguir aca.
      //       $q.notify({
      //         color: 'positive',
      //         textColor: 'dark',
      //         icon: 'cloud_done',
      //         message: '¡Bienvenido!',
      //       });
      //       // agregar los datos a la variable data.
      //       if ('') {
      //         router.push('/datos-persona');
      //       } else {
      //         router.push('/dashboard/plazas');
      //       }
      //     })
      //     .catch(() => {
      //       $q.notify({
      //         message: 'Error en el registro de usuario, contactar con soporte.',
      //         icon: 'warning',
      //         color: 'red-10',
      //         textColor: 'white',
      //       });
      //     });
      // }, 3000);
      //}, 2000);
    });

    const onSubmit = () => {
      rows.value = [...rows.value, {
        hoar: hora.value,
        precio: precioNew.value,
      }];

      //TODO: hay que hacer que cuando hace el submit, cargue de nuevo la pagina para traer los datos actualizados de la BD
      const body = {
        username: username.value,
        email: mail.value,
        password: 'b7159b31a2fdf4ef8394df2234acca8fdbbc438f',
        role: 'owner',
      };
      const route = 'http://localhost:3000/api/web/NOMBRE_TABLA';

      setTimeout(() => {
        $q.notify({
          progress: true,
          message: 'actualizando precio...',
          color: 'secondary',
          textColor: 'white',
        });
        setTimeout(() => {
          axios.post(route, body)
            .then(() => {
              $q.notify({
                color: 'positive',
                textColor: 'dark',
                icon: 'cloud_done',
                message: '¡precio actualizado!',
              });
              alert();
            })
            .catch(() => {
              $q.notify({
                message: 'Error en la actualizacion del precio, contactar con soporte.',
                icon: 'warning',
                color: 'red-10',
                textColor: 'white',
              });
            });
        }, 3000);
      }, 2000);
    };

    const onReset = () => {
      hora.value = null;
      precioNew.value = null;
    };

    function getItemsPerPage() {
      return 5;
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
      hora,
      precioNew,
      onSubmit,
      onReset,
      columns,
      rows,
      filter,
      pagination,
      rowsPerPageOptions: computed(() => ($q.screen.gt.xs
        ? [5, 10]
        : [5])),
      horaRules: [
        (val) => (val && val.length > 0 || val && val.length < 24) || 'Por favor, seleccione una hora',
        (val) => (val > 0) || 'Por favor, ingrese un valor válido',
      ],
      precioRules: [
        (val) => (val && val.length > 0) || 'Por favor, ingrese un precio',
        (val) => (val > 0) || 'Por favor, ingrese un valor válido',
      ],
      selected: ref([]),
    };
  },
};
</script>

<style lang="sass" scoped>
.q-table
  &__container
    padding-top: 4px
:deep(.q-field__native)
  color: #fff
</style>
