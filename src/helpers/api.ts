import { api } from "src/boot/axios"


export function postLink(originalUrl: string) {
  return api.post('/shorten', { url: originalUrl });
}