<!-- eslint-disable max-len -->
<template>
    <q-intersection v-for="index in 10" :key="index">
        <q-card dark class="q-ma-sm column justify-between" style="height: 250px; width: 200px">
            <span class="cuadrito"></span>
            <q-card-section>
                <div class="text-h6">
                    Plaza #{{ index }}
                </div>
            </q-card-section>
            <q-card-section class="column items-center">
                <div class="text-h4 q-mb-md">00:00:00</div>
                <q-btn-group push>
                    <q-btn color="positive" push icon="play_arrow" />
                    <q-btn color="negative" push icon="stop" />
                    <q-btn color="secondary" push icon="replay" />
                </q-btn-group>
            </q-card-section>
        </q-card>
    </q-intersection>
</template>

<style lang="sass" scoped>
.q-card
    transition: 0.5s
    &::before
        content: ''
        position: absolute
        // inset: 2px
        background: $dark
    & .cuadrito
        position: absolute
        inset: 0
        display: block
        &::before
            content: ''
            position: absolute
            top: -4px
            left: 100%
            transform: translateX(-50%)
            width: 10px
            height: 10px
            background-color: $primary
            transition: 0.5s
        &::after
            content: ''
            position: absolute
            bottom: -4px
            left: 0
            transform: translateX(-50%)
            width: 10px
            height: 10px
            background-color: $primary
            transition: 0.5s
    &:hover
        background-color: $primary
        box-shadow: 0 0 35px $primary
        & .cuadrito
            &::before
                left: 0%
                transform: translateX(-50%) rotate(45deg)
                background-color: $primary
            &::after
                left: 100%
                transform: translateX(-50%) rotate(-45deg)
                background-color: $primary
</style>
