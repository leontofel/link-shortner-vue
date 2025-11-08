<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-lg" flat bordered>
      <q-form @submit.prevent="generateQR">
        <q-input
          v-model="text"
          label="Text or URL"
          filled
          dense
          :rules="[val => !!val || 'Required']"
        />

        <q-btn
          label="Generate QR"
          type="submit"
          color="primary"
          class="q-mt-md"
        />
      </q-form>

      <div v-if="qrDataUrl" class="q-mt-lg">
        <q-img :src="qrDataUrl" alt="Generated QR Code" style="max-width: 300px;" />
        <q-btn flat icon="file_download" label="Download" @click="downloadQR" />
      </div>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QRCode from 'qrcode'

const text = ref('')
const qrDataUrl = ref('')

async function generateQR() {
  try {
    qrDataUrl.value = await QRCode.toDataURL(text.value, {
      width: 300,
      errorCorrectionLevel: 'H'
    })
  } catch (err) {
    console.error('QR generation failed', err)
  }
}

function downloadQR() {
  const a = document.createElement('a')
  a.href = qrDataUrl.value
  a.download = 'qrcode.png'
  a.click()
}
</script>
