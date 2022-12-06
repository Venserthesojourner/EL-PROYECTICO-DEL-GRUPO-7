<template>
  <q-page class="window-height column justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <!-- Configuraciones Usuario -->
      <ConfiguracionesUser></ConfiguracionesUser>
      <p class="text-h4 text-weight-bold text-primary text-center">Mis Reservas</p>
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
              <q-th auto-width></q-th>
            </q-tr>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.value }}
              </q-td>
              <q-td auto-width>
                <q-btn size="12px" round dense flat unelevated icon="content_copy" color="grey-4"
                  @click="copyToClipBoard({ codigo })" class="text-overline" />
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
import { ref } from "vue";
import { useQuasar } from 'quasar';
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
    name: 'DK4Crp3W',
    fecha: '2022-12-06',
  },

]

export default {
  props: { copyToClipBoard: Function },
  components: {
    ConfiguracionesUser,
  },
  setup() {
    const $q = useQuasar();
    return {
      filter: ref(''),
      columns,
      rows,
      copyToClipBoard(id) {
        const content = document.getElementById(id.codigo).innerHTML;

        navigator.clipboard
          .writeText(content)
          .then(() => {
            console.log("Text copied to clipboard...");
            $q.notify({
              color: 'positive',
              textColor: 'dark',
              icon: 'cloud_done',
              message: '¡Copiado!',
            });
          })
          .catch((err) => {
            console.log("Something went wrong");
          });
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.text-overline
  font-size: 1.5rem
</style>
