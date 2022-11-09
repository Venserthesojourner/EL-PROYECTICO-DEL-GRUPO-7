<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row q-col-gutter-sm justify-center">
    <!-- Formulario -->
    <div class="col-12 col-md-6">
      <q-card flat class="q-pa-md">

        <q-card-section class="q-pt-none">
          <p class="text-h4 text-center">Agregar Plan</p>
        </q-card-section>

        <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
          <!-- Código Plan -->
          <q-input filled v-model="codigo" type="text" label="Código" hint="Código del plan" lazy-rules
            :rules="codigoRules">
            <template v-slot:prepend>
              <q-icon name="edit" />
            </template>
          </q-input>
          <!-- Precio Base -->
          <q-input filled v-model="precio" type="number" label="Precio Base" hint="En pesos" lazy-rules
            :rules="precioRules">
            <template v-slot:prepend>
              <q-icon name="attach_money" />
            </template>
          </q-input>
          <!-- Modificador / Porcentaje -->
          <q-input filled v-model="porcentaje" type="number" label="Porcentaje" hint="Porcentaje de descuento"
            lazy-rules :rules="porcentajeRules">
            <template v-slot:prepend>
              <q-icon name="percent" />
            </template>
          </q-input>
          <!-- Fecha de Caducidad -->
          <q-input filled v-model="date" placeholder="2022/12/21" :rules="dateRules" hint="Fecha de caducidad">
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
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
    <!-- Planes -->
    <div class="col-12 col-md-6">
      <q-table grid title="Mis Planes" :rows="planes" :columns="columns" :planes="planes" row-key="name"
        :filter="filter" hide-header v-model:pagination="pagination" :rows-per-page-options="rowsPerPageOptions">
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
              <q-card-section class="card-precio text-white text-h3">
                <div>${{ props.row.precioFinal }}</div>
              </q-card-section>
              <q-separator />
              <q-card-section class="card-datos column justify-center items-center">
                <div>Precio base: <span class="strikethrough">${{ props.row.precio }}</span></div>
                <div>Caduca: <span class="fechaCaducidad">{{ props.row.date }}</span></div>
                <div>Código: <span class="text-overline">{{ props.row.codigo }}</span></div>
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
import axios from 'axios';

let xmls = '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\
                           xmlns:xsd="http://www.w3.org/2001/XMLSchema"\
                           xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
            <soap12:Body>\
              <Multiply xmlns="http://tempuri.org/">\
                <intA>5</intA>\
                <intB>5</intB>\
              </Multiply>\
            </soap12:Body>\
          </soap12:Envelope>';

axios.post('http://www.dneonline.com/calculator.asmx',
  xmls,
  {
    headers:
    {
      'Content-Type': 'text/xml',
      SOAPAction: 'http://tempuri.org/Multiply'
    }
  }).then(res => { console.log(res) }).catch(err => { console.log(err) })

export default {
  setup() {
    const $q = useQuasar();
    const codigo = ref(null);
    const precio = ref(null);
    const porcentaje = ref(null);
    const date = ref(null);
    const filter = ref('');
    const planes = ref([]);
    const precioFinal = ref(null);

    const onSubmit = () => {
      planes.value = [...planes.value, {
        codigo: codigo.value,
        precio: precio.value,
        date: date.value,
        precioFinal: (precio.value * porcentaje.value) / 100,
      }];
    };

    const onReset = () => {
      codigo.value = null;
      precio.value = null;
      porcentaje.value = null;
      date.value = null;
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

    return {
      codigo,
      precioFinal,
      precio,
      porcentaje,
      date,
      onSubmit,
      onReset,
      filter,
      pagination,
      planes,
      rowsPerPageOptions: computed(() => ($q.screen.gt.xs
        ? $q.screen.gt.sm ? [2, 4, 8] : [2, 4] : [2])),
      codigoRules: [
        (val) => (val && val.length > 0) || 'Por favor, ingrese un código',
      ],
      precioRules: [
        (val) => (val && val.length > 0) || 'Por favor, ingrese un precio',
        (val) => (val > 0) || 'Por favor, ingrese un valor válido',
      ],
      porcentajeRules: [
        (val) => (val > 1 && val < 100) || 'Por favor, ingrese un porcentaje váido',
      ],
      dateRules: [
        (val) => (val && val.length > 0) || 'Por favor, ingrese una fecha',
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
        background-color: #ffffff
        background-image: url("../assets/background-c2.png")
        text-shadow: 0 0 5px #dfd2ff
        padding: 10px
      & .card-datos
        font-size: 1rem
        padding: 10px
        & .fechaCaducidad
          font-size: 1.5rem
        & .strikethrough
          position: relative
          font-size: 1.5rem
          &:before
            position: absolute
            content: ""
            left: 0
            top: 50%
            right: 0
            border-top: 1px solid
            border-color: inherit
            transform: rotate(-5deg)
        & .text-overline
          font-size: 1.5rem
  &__container
    padding-top: 4px
</style>
