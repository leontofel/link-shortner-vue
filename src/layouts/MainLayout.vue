<template>
  <q-layout view="hHh lpR fFf">

    <!-- Menu lateral (drawer) -->
    <q-drawer v-model="drawer" show-if-above bordered>
      <q-list padding>
        <q-item-label header class="text-primary">
          {{ t('menu.solutions') }}
        </q-item-label>

        <q-item clickable v-ripple>
          <q-item-section avatar><q-icon name="link" /></q-item-section>
          <q-item-section>{{ t('menu.shortener') }}</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar><q-icon name="analytics" /></q-item-section>
          <q-item-section>{{ t('menu.dashboard') }}</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar><q-icon name="shield" /></q-item-section>
          <q-item-section>{{ t('menu.firewall') }}</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar><q-icon name="manage_accounts" /></q-item-section>
          <q-item-section>{{ t('menu.access') }}</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar><q-icon name="layers" /></q-item-section>
          <q-item-section>{{ t('menu.integrations') }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Topo -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="drawer = !drawer" aria-label="Menu" />
        <q-toolbar-title>
          {{ t('header.title') }}
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          icon="open_in_new"
          href="https://www.sparkintech.com"
          target="_blank"
          aria-label="Site institucional"
        />
      </q-toolbar>
    </q-header>

    <!-- Página principal -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Rodapé -->
    <q-footer class="bg-grey-2 text-grey-9 text-center q-pa-sm">
      <div class="text-caption">
        &copy; {{ new Date().getFullYear() }} SparkInTech — {{ t('footer.rights') }}
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const drawer = ref(false)
const { t } = useI18n()
</script>
