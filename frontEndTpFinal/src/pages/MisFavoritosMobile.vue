<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <p class="text-h4 text-weight-bold text-primary text-center">Mis Favoritos</p>
      <div class="q-mt-md">
        <q-list style="min-width: 300px">
          <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
            <q-item-section>
              <q-item-label>{{ contact.name }}</q-item-label>
              <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-btn size="12px" round dense flat unelevated icon="delete" color="negative" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
const contacts = [{
  id: 1,
  name: 'Parking NQN',
  email: '9 de Julio',
}, {
  id: 2,
  name: 'Estacionamiento Don Pepe',
  email: 'Av Siempre Viva 2001',
}]

export default {
  setup() {
    return {
      contacts,
    }
  }
}
</script>