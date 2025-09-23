<template>
  <q-page class="q-pa-md flex flex-center bg-grey-1">
    <q-card class="q-pa-lg" style="max-width: 600px; width: 100%" flat bordered>
      <q-card-section>
        <div class="text-h5 text-primary text-center">{{ t('title') }}</div>
        <div class="text-subtitle2 text-center text-grey">
          by <a href="https://www.sparkintech.com" class="text-primary" target="_blank">SparkInTech</a>
        </div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="shortenUrl">
          <q-input
            v-model="originalUrl"
            :label="t('placeholder')"
            outlined
            dense
            type="url"
            :rules="[val => !!val || t('validation.required')]"
            placeholder="https://example.com"
            autofocus
          >
            <template #prepend>
              <q-icon name="link" />
            </template>
          </q-input>

          <q-btn
            class="full-width q-mt-md"
            color="primary"
            icon="bolt"
            type="submit"
            :label="t('shorten')"
          />
        </q-form>

        <q-banner
          v-if="shortUrl"
          class="q-mt-lg bg-green-2 text-green-10"
          rounded
          dense
        >
          {{ t('result') }}:
          <a :href="shortUrl" target="_blank" class="text-primary q-ml-xs">{{ shortUrl }}</a>
        </q-banner>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLinkShortnerStore } from 'src/stores/link-shortner'

const { t } = useI18n()
const { shortUrl, originalUrl, shortenUrl } = useLinkShortnerStore()
</script>
