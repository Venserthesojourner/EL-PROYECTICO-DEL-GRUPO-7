<!-- eslint-disable max-len -->
<template>
  <q-page padding class="row q-col-gutter-sm justify-center">
    <!-- Formulario -->
    <div class="col-12 col-md-6">
      <q-card dark flat class="q-pa-md">
        <q-card-section class="q-pt-none">
          <p class="text-h4 text-center">Modificar Horarios</p>
        </q-card-section>

        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <!-- Horario Entrada -->
          <q-input filled dark v-model="timeEntrada" mask="time" placeholder="07:00" :rules="aperturaRules"
            hint="Horario de apertura">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-time color="secondary" class="bg-dark" v-model="timeEntrada">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Cerrar" color="positive" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <!-- Horario Salida -->
          <q-input filled dark v-model="timeSalida" mask="time" placeholder="18:30" :rules="cierreRules"
            hint="Horario de cierre">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-time color="secondary" class="bg-dark" v-model="timeSalida">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Cerrar" color="positive" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <!-- Seleccionar Días -->
          <q-field filled dark ref="inputDias" hint="Seleccione los días en los que el estacionamiento estará abierto"
            lazy-rules :model-value="dias" class="q-mb-lg">
            <template v-slot:control>
              <q-option-group name="selection_day" v-model="dias" :options="optionsDays" color="green" type="checkbox"
                inline />
            </template>
          </q-field>
          <!-- Botones -->
          <div class="row justify-end">
            <q-btn label="Limpiar" type="reset" color="positive" flat class="q-mr-sm" />
            <q-btn label="Actualizar" type="submit" color="positive" text-color="dark" />
          </div>
        </q-form>
      </q-card>
    </div>
    <!-- Horarios -->
    <div class="col-12 col-md-6">
      <div class="q-pa-md col-12 col-lg-6 text-h4 text-center">Horarios</div>
      <!-- Entrada -->
      <div class="q-pa-md col-12 col-lg-6">
        <q-card dark class="text-center bg-tablitas">
          <q-card-section class="card-title text-white text-h4">
            Entrada
          </q-card-section>
          <q-separator />
          <q-card-section class="card-precio flex flex-center">
            {{ timeEntrada }}
          </q-card-section>
        </q-card>
      </div>
      <!-- Salida -->
      <div class="q-pa-md col-12 col-lg-6">
        <q-card dark class="text-center bg-tablitas">
          <q-card-section class="card-title text-white text-h4">
            Salida
          </q-card-section>
          <q-separator />
          <q-card-section class="card-precio flex flex-center">
            {{ timeSalida }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const $q = useQuasar();

    const age = ref(null);
    const accept = ref(false);
    const inputDias = ref([]);
    const dias = ref([]);
    const timeEntrada = ref('07:00');
    const timeSalida = ref('18:00');

    onMounted(() => {
      //TODO: en teoria esto se carga primero
      setTimeout(() => {
        axios.get(`http://localhost:3000/usuario/username/${username.value}`)
          .then((response) => {
            console.log(response);
            // TODO: seguir aca.
            $q.notify({
              color: 'postive',
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
    });



    return {
      age,
      accept,
      timeEntrada,
      timeSalida,
      inputDias,
      dias,
      optionsDays: [
        {
          label: 'Lunes',
          value: 'lunes',
        },
        {
          label: 'Martes',
          value: 'martes',
        },
        {
          label: 'Miercoles',
          value: 'miercoles',
        },
        {
          label: 'Jueves',
          value: 'jueves',
        },
        {
          label: 'Viernes',
          value: 'viernes',
        },
        {
          label: 'Sabado',
          value: 'sabado',
        },
        {
          label: 'Domingo',
          value: 'domingo',
        },
      ],
      aperturaRules: [
        (val) => (val && val.length > 0) || 'Por favor, ingrese un horario',
      ],
      cierreRules: [
        (val) => (val && val.length > 0) || 'Por favor, ingrese un horario',
        (val) => (val && val !== timeEntrada.value) || 'Por favor, ingrese un horario válido',
      ],

      onSubmit() {

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
                  color: 'postive',
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
      },

      onReset() {
        age.value = null;
        accept.value = false;
        dias.value = [];
      },
    };
  },
};
</script>

<style lang="sass" scoped>
.q-card
  border-radius: 1rem
  & .card-title
    background-color: #0000007a
    background-image: url("../assets/background-l1.png")
    &.text-h4
      text-shadow: 0 0 5px #dfd2ff
  & .card-precio
    font-size: 2rem
    padding: 2px
.bg-tablitas
  background-color: #0000007a
</style>
