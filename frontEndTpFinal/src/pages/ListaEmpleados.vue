<template>
  <q-page padding class="row justify-center">
    <div class="q-pa-md col-12 col-md-6">
      <p class="q-pa-md text-h4 text-center">Lista de Empleados</p>
      <q-table dark :rows="rows" :columns="columns" row-key="name" flat>

        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
            <q-th auto-width />
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.value }}
            </q-td>
            <q-td auto-width>
              <q-btn size="12px" round dense flat unelevated icon="delete" color="deep-purple-2"
                onclick="eliminarUsuario()" />
            </q-td>
          </q-tr>
        </template>

      </q-table>
      <!-- Añadir Empleado -->
      <div class="q-mt-sm row justify-center">
        <span><a href="nuevoEmpleado">Añadir Empleado</a></span>
      </div>
    </div>
  </q-page>
</template>

<script>
const columns = [
  {
    name: 'nombre',
    required: true,
    label: 'Nombre',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
]

const rows = [
  {
    name: 'Pepe Argento',
  },
  {
    name: 'Hannah Montana',
  },
  {
    name: 'Firulais',
  },
]
import { ref, onMounted } from 'vue';

export default {
  setup() {

    onMounted(() => {
      //TODO: en teoria esto se carga primero
      setTimeout(() => {
        axios.get(`http://localhost:3000/usuario/username/${username.value}`)
          .then((response) => {
            console.log(response);
            // TODO: seguir aca.
            $q.notify({
              color: 'green-4',
              textColor: 'white',
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
              color: 'red-5',
              textColor: 'white',
            });
          });
      }, 3000);
      //}, 2000);
    });

    const eliminarUsuario = () => {
      //TODO: ESTO TIENE QUE SER UN PUT PARA ELIMINAR, ni idea como se hace
      setTimeout(() => {
        axios.get(`http://localhost:3000/usuario/username/${username.value}`)
          .then((response) => {
            console.log(response);
            // TODO: seguir aca.
            $q.notify({
              color: 'green-4',
              textColor: 'white',
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
              color: 'red-5',
              textColor: 'white',
            });
          });
      }, 3000);
      //}, 2000);
    }
    return {
      columns,
      rows
    }
  }
}
</script>
