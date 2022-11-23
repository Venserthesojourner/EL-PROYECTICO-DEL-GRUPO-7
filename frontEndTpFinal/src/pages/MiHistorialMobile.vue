<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <p class="text-h4 text-weight-bold text-primary text-center">Historial</p>
      <div class="q-mt-md">
        <q-list style="min-width: 300px">
          <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
            <q-item-section>
              <q-item-label class="text-overline">{{ contact.name }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-btn size="12px" round dense flat unelevated icon="description" color="secondary" />
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
  name: '5fYU8',
}, {
  id: 2,
  name: '2eo4W',
}]

export default {
  setup() {
    return {
      contacts,
    }
  }
}
</script>

<style lang="sass" scoped>
.text-overline
  font-size: 1.5rem
</style>