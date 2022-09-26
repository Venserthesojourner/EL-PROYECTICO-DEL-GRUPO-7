<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<template>
  <q-page>
    <!-- Section Bienvenida -->
    <section>
      <div class="row justify-center items-center">
        <div class="pepe col-12 col-md-5">
          <p class="text-h3">Benvenuti a Chihilo</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <q-btn to="register" push color="accent" size="lg"
            class="q-px-lg q-py-xs q-mr-md q-mb-md border-radius-inherit" label="Registrarse" no-caps />
          <q-btn push color="primary" size="lg" class="q-px-lg q-py-xs q-mb-md border-radius-inherit"
            label="Descargar App" no-caps />
        </div>
        <div class="col-12 col-md-5">
          <div class="row justify-center">
            <img src="../assets/car-reserva2.jpg" alt="car reserva" style="height: auto; min-width: 200px;">
          </div>
        </div>
        <div class="end-coso col-12"></div>
      </div>
    </section>
    <!-- Section About -->
    <section id="about">
      <div class="row justify-center items-center">
        <div class="col-12 col-md-5">
          <div class="row justify-center">
            <img src="../assets/car-reserva4.png" alt="car reserva" style="height: auto; min-width: 200px;">
          </div>
        </div>
        <div class="pepe col-12 col-md-5 text-white">
          <p class="text-h3">Benvenuti a Chihilo</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <q-btn to="register" push color="positive" size="lg"
            class="q-px-lg q-py-xs q-mr-md q-mb-md border-radius-inherit" label="Registrarse" no-caps />
          <q-btn push color="secondary" size="lg" class="q-px-lg q-py-xs q-mb-md border-radius-inherit"
            label="Descargar App" no-caps />
        </div>
      </div>
    </section>
    <!-- Section Contact -->
    <section id="contact">
      <div class="row justify-center items-center">
        <div class="pepe col-12 col-md-5">
          <p class="text-h3">Benvenuti a Chihilo</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <q-btn to="register" push color="accent" size="lg"
            class="q-px-lg q-py-xs q-mr-md q-mb-md border-radius-inherit" label="Registrarse" no-caps />
          <q-btn push color="primary" size="lg" class="q-px-lg q-py-xs q-mb-md border-radius-inherit"
            label="Descargar App" no-caps />
        </div>
        <div class="col-12 col-md-5">
          <div class="row justify-center">
            <img src="../assets/car-reserva2.jpg" alt="car reserva" style="height: auto; min-width: 200px;">
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<style lang="sass" scoped>
.pepe
  @media screen and (max-width: 1024px)
    text-align: center
.text-h3
  @media screen and (max-width: 600px)
    font-size: 2rem
#about
  background: $primary
  background-image: url(../assets/separator-bottom.svg), linear-gradient($primary, $primary)
  background-repeat: no-repeat
  background-size: 100% 100px, 100%
  background-position: bottom center, 50%
  padding: 0 0 100px 0
.end-coso
  padding: 0
  height: 100px
  background-image: url(../assets/separator-top.svg)
  background-repeat: no-repeat
  background-size: 100% 100px
  background-position: bottom center
</style>
