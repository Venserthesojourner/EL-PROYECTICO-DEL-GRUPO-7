<template>
    <q-toolbar class="text-primary row justify-end no-padding">
        <q-btn-dropdown flat round dense dropdown-icon="settings">
            <q-list dark style="min-width: 150px" class="bg-dark">
                <q-item clickable v-close-popup to="mis-patentes">
                    <q-item-section>
                        <q-item-label>Mis Patentes</q-item-label>
                    </q-item-section>

                    <q-item-section avatar>
                        <q-icon name="directions_car" />
                    </q-item-section>
                </q-item>

                <q-item clickable v-close-popup to="mis-reservas">
                    <q-item-section>
                        <q-item-label>Mis Reservas</q-item-label>
                    </q-item-section>

                    <q-item-section avatar>
                        <q-icon name="qr_code" />
                    </q-item-section>
                </q-item>

                <q-item clickable v-close-popup to="mis-favoritos">
                    <q-item-section>
                        <q-item-label>Favoritos</q-item-label>
                    </q-item-section>

                    <q-item-section avatar>
                        <q-icon name="favorite" />
                    </q-item-section>
                </q-item>

                <q-item clickable v-close-popup to="mi-historial">
                    <q-item-section>
                        <q-item-label>Historial</q-item-label>
                    </q-item-section>

                    <q-item-section avatar>
                        <q-icon name="history" />
                    </q-item-section>
                </q-item>

                <q-item clickable @click=logoutSession() v-ripple to="/">
                    <q-item-section>
                        <q-item-label>Cerrar Sesión</q-item-label>
                    </q-item-section>

                    <q-item-section avatar>
                        <q-icon name="logout" />
                    </q-item-section>
                </q-item>
            </q-list>
        </q-btn-dropdown>
    </q-toolbar>
</template>

<script>
import { ref } from 'vue';
import { useSessionStatus } from '../stores/session-store';

export default {

    setup() {
        const miniState = ref(false);
        const store = useSessionStatus();

        return {
            drawer: ref(false),
            miniState,
            store,

            logoutSession() {
                store.changeStatus();
            },
            drawerClick(e) {
                // if in "mini" state and user
                // click on drawer, we switch it to "normal" mode
                if (miniState.value) {
                    miniState.value = false;

                    // notice we have registered an event with capture flag;
                    // we need to stop further propagation as this click is
                    // intended for switching drawer to "normal" mode only
                    e.stopPropagation();
                }
            },
        };
    },

};
</script>