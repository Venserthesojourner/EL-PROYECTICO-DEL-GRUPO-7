<!-- eslint-disable max-len -->
<template>
  <section id="team">
    <div class="column items-center q-mt-md q-gutter-x-md q-gutter-y-lg">
      <h3 class="col-12 text-h3 text-center">Equipo</h3>
      <!-- Team -->
      <div class="row justify-center q-gutter-x-md q-gutter-y-lg">
        <CardTeam class="col-12"></CardTeam>
      </div>
    </div>
  </section>
</template>

<script>
import CardTeam from './CardTeam.vue';

export default {
  components: {
    CardTeam,
  },
};
</script>

<style lang="sass" scoped>
#team
    display: flex
    justify-content: center
    align-items: center
    min-height: 400px
@media(max-width: 600px)
  .text-h3
      font-size: 2.5rem
.text-h3
  margin-top: 0px
  margin-bottom: 16px
</style>