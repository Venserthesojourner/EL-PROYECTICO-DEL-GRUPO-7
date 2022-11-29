<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <q-icon name="fa-regular fa-circle-check" color="primary" size="6rem" />
      <div class="q-mt-md q-gutter-y-md" style="min-width: 300px">
        <p class="text-h4 text-weight-bold text-primary text-center">Confirmación</p>
        <q-btn to="codigo-reserva" push color="positive" text-color="black" size="lg"
          class="full-width border-radius-inherit" label="Confirmar" no-caps />
        <q-btn to="tipo-reserva" push color="primary" text-color="black" size="lg"
          class="full-width border-radius-inherit" label="Volver" no-caps />
      </div>
    </div>
  </q-page>
</template>
