<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row q-col-gutter-sm justify-center">
    <!-- Formulario -->
    <div class="col-12 col-md-6">
      <q-card dark flat class="q-pa-md">

        <q-card-section class="q-pt-none">
          <p class="text-h4 text-center">Agregar Promoción</p>
        </q-card-section>

        <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
          <!-- Código Promoción -->
          <q-input filled dark v-model="codigo" type="text" label="Código" hint="Código del plan" lazy-rules
            :rules="codigoRules">
            <template v-slot:prepend>
              <q-icon name="edit" />
            </template>
          </q-input>
          <!-- Precio Base -->
          <q-input filled dark v-model="precio" type="number" label="Precio Base" hint="En pesos" lazy-rules
            :rules="precioRules">
            <template v-slot:prepend>
              <q-icon name="attach_money" />
            </template>
          </q-input>
          <!-- Descuento / Porcentaje -->
          <q-input filled dark v-model="porcentaje" type="number" label="Porcentaje" hint="Porcentaje de descuento"
            lazy-rules :rules="porcentajeRules">
            <template v-slot:prepend>
              <q-icon name="percent" />
            </template>
          </q-input>
          <!-- Fecha Inicio -->
          <q-input filled dark v-model="dateIni" placeholder="2022/11/21" :rules="dateIniRules"
            hint="Fecha inicio de promoción">
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date color="secondary" class="bg-dark" v-model="dateIni">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Cerrar" color="positive" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <!-- Fecha Fin -->
          <q-input filled dark v-model="dateFin" placeholder="2022/12/21" :rules="dateFinRules"
            hint="Fecha final de promoción" class="q-mb-lg">
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date color="secondary" class="bg-dark" v-model="dateFin">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Cerrar" color="positive" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <!-- Botones -->
          <div class="row justify-end">
            <q-btn label="Limpiar" type="reset" color="positive" flat class="q-mr-sm" />
            <q-btn label="Agregar" type="submit" color="positive" text-color="dark" />
          </div>
        </q-form>

      </q-card>
    </div>
    <!-- Promoción -->
    <div class="col-12 col-md-6">
      <q-table dark grid title="Mis Promociones" :rows="promos" :columns="columns" :promos="promos" row-key="codigo"
        :filter="filter" hide-header v-model:pagination="pagination" :rows-per-page-options="rowsPerPageOptions">
        <!-- Filtro -->
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Buscar">
            <template v-slot:append>
              <q-icon name="search" color="white" />
            </template>
          </q-input>
        </template>
        <!-- Tabla Promoción -->
        <template v-slot:item="props">
          <div class="q-pa-md col-12 col-lg-6">
            <q-card class="text-center bg-tablitas">
              <q-card-section class="card-precio text-white q-py-md">
                <div class="text-overline">{{ props.row.codigo }}</div>
              </q-card-section>
              <q-separator />
              <q-card-section class="card-datos column justify-center items-center">
                <div>Precio: <span class="fechaCaducidad">${{ props.row.precioFinal }} </span><span
                    class="strikethrough q-ml-sm">${{ props.row.precio }}</span></div>
                <div>Inicia: <span class="fechaCaducidad">{{ props.row.dateIni }}</span></div>
                <div>Finaliza: <span class="fechaCaducidad">{{ props.row.dateFin }}</span></div>
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
import { ref, computed, watch, onMounted } from 'vue';

let rows = [{codigo: "123123", precio: "100",  descuento: "10", dateIni: "2022-11-19", dateFin: "2022-11-20"}]


export default {
  setup() {
    const $q = useQuasar();
    const codigo = ref(null);
    const precio = ref(null);
    const porcentaje = ref(null);
    const dateIni = ref(null);
    const dateFin = ref(null);
    const filter = ref('');
    const promos = ref([]);
    const precioFinal = ref(null);



    watch(() => $q.screen.name, () => {
      pagination.value.rowsPerPage = getItemsPerPage();
    });

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
    }
    );

    const onSubmit = () => {
      promos.value = [...promos.value, {
        codigo: codigo.value,
        precio: precio.value,
        dateIni: dateIni.value,
        dateFin: dateFin.value,
        precioFinal: precio.value - ((precio.value * porcentaje.value) / 100),
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
          message: 'agregando promocion...',
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
                message: '¡promocion agregada!',
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
      codigo.value = null;
      precio.value = null;
      porcentaje.value = null;
      dateIni.value = null;
      dateFin.value = null;
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

    const pagination = ref({
      page: 1,
      rowsPerPage: getItemsPerPage(),
    });

    watch(() => $q.screen.name, () => {
      pagination.value.rowsPerPage = getItemsPerPage();
    });

    function currentDate() {
      const current = new Date();
      const dateCurrent = `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`;
      return dateCurrent;
    };

    const fechaActual = currentDate();

    return {
      codigo,
      precioFinal,
      precio,
      porcentaje,
      fechaActual,
      dateIni,
      dateFin,
      onSubmit,
      onReset,
      filter,
      pagination,
      promos,
      rows,
      columns: [
        { name: 'name', label: 'Name', field: 'name' },
        { name: 'precio', label: '$ Precio', field: 'precio' },
      ],
      rowsPerPageOptions: computed(() => ($q.screen.gt.xs
        ? $q.screen.gt.sm ? [2, 4, 8] : [2, 4]
        : [2])),
      codigoRules: [
        (val) => (val && val.length > 0) || 'Por favor, ingrese el código',
      ],
      precioRules: [
        (val) => (val && val.length > 0) || 'Por favor, ingrese un precio',
        (val) => (val > 0) || 'Por favor, ingrese un valor válido',
      ],
      porcentajeRules: [
        (val) => (val > 1 && val < 100) || 'Por favor, ingrese un porcentaje válido',
      ],
      dateIniRules: [
        (val) => (val && val.length > 0) || 'Por favor, ingrese una fecha',

        //(val) => (val && val > fechaActual) || 'Por favor, ingrese una fecha válida',

      ],
      dateFinRules: [
        (val) => (val && val.length > 0) || 'Por favor, ingrese una fecha',
        (val) => (val && val > dateIni.value) || 'Por favor, ingrese una fecha válida',
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
      & .card-precio
        background-color: #0000007a
        background-image: url("../assets/background-rd1.png")
        text-shadow: 0 0 5px #dfd2ff
      & .card-datos
        font-size: 1rem
        padding: 10px
        & .fechaCaducidad
          font-size: 1.5rem
        & .strikethrough
          position: relative
          color: $grey-5
          &:before
            position: absolute
            content: ""
            left: 0
            top: 50%
            right: 0
            border-top: 1px solid
            border-color: inherit
            transform: rotate(-10deg)
  &__container
    padding-top: 4px
.text-overline
  font-size: 3rem
.bg-tablitas
  background-color: #0000007a
:deep(.q-field__native)
  color: #fff
</style>
