<!-- eslint-disable max-len -->
<template>
    <section id="bienvenida" class="q-mt-sm q-mb-xl">
        <div class="row justify-center items-center">
            <div class="col-12 col-md-5">
                <p class="text-h3">Benvenuti a Chihilo</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <q-btn to="register" push color="accent" size="lg"
                    class="q-px-lg q-py-xs q-mr-md q-mb-md border-radius-inherit" label="Registrarse" no-caps />
                <q-btn href="https://play.google.com/store/apps" push color="primary" size="lg"
                    class="q-px-lg q-py-xs q-mb-md border-radius-inherit" no-caps>
                    <q-icon left size="1.3em" name="fa-brands fa-google-play" />
                    <div>Google Play</div>
                </q-btn>
            </div>
            <div class="col-12 col-md-5">
                <div class="row justify-center">
                    <img src="../assets/car-reserva1.png" alt="car reserva" style="height: auto; min-width: 200px;">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="sass" scoped>
@media(max-width: 1024px)
    section > div > div
        text-align: center
@media(max-width: 600px)
    .text-h3
        font-size: 2rem
</style>
