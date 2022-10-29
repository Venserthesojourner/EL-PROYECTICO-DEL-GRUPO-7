<!-- eslint-disable max-len -->
<template>
    <section id="about">
        <div class="top-division col-12"></div>
        <div class="row justify-center items-center">
            <div class="col-12 col-md-5">
                <div class="row justify-center">
                    <img src="../assets/car-reserva2.png" alt="car reserva"
                        style="height: auto; min-width: 200px; max-width: 500px;">
                </div>
            </div>
            <div class="col-12 col-md-5 text-white">
                <p class="text-h3">About</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <q-btn to="register" push color="positive" size="lg"
                    class="q-px-lg q-py-xs q-mr-md q-mb-md border-radius-inherit" label="Registrarse" no-caps />
                <q-btn href="https://play.google.com/store/apps" push color="secondary" size="lg"
                    class="q-px-lg q-py-xs q-mb-md border-radius-inherit" no-caps>
                    <q-icon left size="1.3em" name="fa-brands fa-google-play" />
                    <div>Google Play</div>
                </q-btn>
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
#about
    background: $primary
    background-image: url(../assets/separator-bottom.svg), linear-gradient($primary, $primary)
    background-repeat: no-repeat
    background-size: 100% 100px, 100%
    background-position: bottom center, 50%
    padding: 0 0 100px 0
.top-division
    padding: 0
    height: 100px
    background-image: url(../assets/separator-bottom.svg)
    background-repeat: no-repeat
    background-size: 100% 100px
    background-position: bottom center
    -webkit-transform: rotate(180deg)
    -moz-transform: rotate(180deg)
    -ms-transform: rotate(180deg)
    -o-transform: rotate(180deg)
    transform: rotate(180deg)
</style>
