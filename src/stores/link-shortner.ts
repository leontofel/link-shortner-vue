import { defineStore } from 'pinia';
import { useQuasar } from 'quasar'
import { postLink } from 'src/helpers/api'
import { ref } from 'vue'

export const useLinkShortnerStore = defineStore('linkShortner', () => {
  const originalUrl = ref('')
  const shortUrl = ref('')
  const $q = useQuasar()

  async function shortenUrl() {
    try {
      const trimmedUrl = originalUrl.value.trim()
      if (!trimmedUrl) return

      const res = await postLink(trimmedUrl)
      shortUrl.value = res.data.short_url
      $q.notify({ type: 'positive', message: 'URL shortened successfully!' })
    } catch (error) {
      shortUrl.value = ''
      $q.notify({ type: 'negative', message: 'Failed to shorten URL. Please try again.' })
      console.error(error)
    }
  }

  return { originalUrl, shortUrl, shortenUrl }
});
