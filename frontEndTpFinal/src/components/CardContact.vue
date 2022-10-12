<template>
    <q-card class="my-card q-my-xl">
        <!-- <div class="img-contact">
            <img src="https://cdn.quasar.dev/img/mountains.jpg" />
        </div> -->
        <q-img class="img-contact" src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>

        <div class="content column justify-end items-center">
            <q-card-section class="text-center">
                <span class="text-h6">Luis Miguel Cañete</span><br>
                <span class="contact-cite text-subtitle1">Odio a Mario Bros</span>

                <q-card-actions class="justify-center">
                    <q-btn round dense unelevated href="https://github.com/Blackpachamame" target="_blank"
                        icon="fa-brands fa-github" size=" 24px" />
                </q-card-actions>
            </q-card-section>
        </div>
    </q-card>
</template>

<style lang="sass" scoped>
.my-card
    width: 250px
    height: 150px
    border-radius: 20px
    transition: 0.5s
    & .img-contact
        position: absolute
        left: 50%
        top: -50px
        transform: translateX(-50%)
        width: 100px
        height: 100px
        background: #fff
        border-radius: 20px
        box-shadow: 0 15px 50px rgba(0,0,0,0.35)
        transition: 0.5s
    & .content
        position: absolute
        width: 100%
        height: 100%
        overflow: hidden
        & .q-card__section
            width: 100%
            transition: 0.5s
            transform: translateY(75px)
            & .contact-cite
                color: $primary
    &:hover
        height: 280px
        & .img-contact
            width: 150px
            height: 150px
        & .q-card__section
            transform: translateY(0px)
</style>
