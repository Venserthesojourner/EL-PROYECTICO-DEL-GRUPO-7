<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <q-icon name="fa-solid fa-qrcode" color="primary" size="6rem" />
      <div class="q-mt-md q-gutter-y-md" style="min-width: 300px">
        <p class="text-h4 text-weight-bold text-primary text-center">Clave de Reserva</p>
        <div class="q-mt-md">
          <q-list style="min-width: 300px">
            <!-- Primer Patente -->
            <q-item clickable v-ripple active-class="bg-grey-2">
              <q-item-section class="text-overline">Cf30g</q-item-section>

              <q-item-section side>
                <q-btn size="12px" round dense flat unelevated icon="content_copy" color="grey-7" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <q-btn to="cronometro" push color="primary" size="lg" class="full-width border-radius-inherit" label="Continuar"
          no-caps />
        <q-btn to="forma-pago" push color="accent" size="lg" class="full-width border-radius-inherit" label="Volver"
          no-caps />
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.text-overline
  font-size: 1.5rem
</style>