<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <!-- Configuraciones Usuario -->
      <ConfiguracionesUser></ConfiguracionesUser>
      <p class="text-h4 text-weight-bold text-primary text-center">Historial</p>
      <div class="q-mt-md">
        <q-table :rows="rows" :columns="columns" row-key="name" :filter="filter" style="min-width: 300px"
          hide-pagination flat dark>
          <!-- Filtro -->
          <template v-slot:top-left>
            <q-input dark borderless dense debounce="300" v-model="filter" placeholder="Buscar">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
          <!-- Datos -->
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.label }}
              </q-th>
              <q-th auto-width>Recibo</q-th>
            </q-tr>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.value }}
              </q-td>
              <q-td auto-width>
                <q-btn size="12px" round dense flat unelevated icon="description" color="grey-4" />
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
      <q-btn to="index" push color="primary" text-color="black" size="lg"
        class="full-width border-radius-inherit q-mt-md" label="Volver" no-caps />
    </div>
  </q-page>
</template>

<script>
import ConfiguracionesUser from '../components/ConfiguracionesUser.vue';

const columns = [
  {
    name: 'codigo',
    required: true,
    label: 'Código',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  { name: 'fecha', align: 'left', label: 'Fecha', field: 'fecha', sortable: true },
]

const rows = [
  {
    name: '5fYU8',
    fecha: '2022-11-26',
  },
  {
    name: 'mN90t',
    fecha: '2022-11-20',
  },
  {
    name: '2eo4W',
    fecha: '2022-11-17',
  },
]

import { ref, onMounted } from "vue";


export default {
  components: {
    ConfiguracionesUser,
  },
  setup() {

    onMounted(() => {

      //TODO: en teoria esto se carga primero
      setTimeout(() => {
        axios.get(`http://localhost:3000/usuario/username/${username.value}`)
          .then((response) => {
            console.log(response);
            // TODO: seguir aca.
            $q.notify({
              color: 'positive',
              textColor: 'dark',
              icon: 'cloud_done',
              message: '¡Bienvenido!',
            });
            // agregar los datos a la variable data.
            if ('') {
              router.push('/datos-persona');
            } else {
              router.push('/dashboard/plazas');
            }
          })
          .catch(() => {
            $q.notify({
              message: 'Error en el registro de usuario, contactar con soporte.',
              icon: 'warning',
              color: 'red-10',
              textColor: 'white',
            });
          });
      }, 3000);
      //}, 2000);
    })
    return {
      filter: ref(''),
      columns,
      rows
    }
  }
}
</script>

<style lang="sass" scoped>
.text-overline
  font-size: 1.5rem
:deep(.q-table__grid-content row)
  width: 100%
</style>
