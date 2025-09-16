// vite.config.js یا vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    // اگر استفاده می‌کنی react/vue/… اون پلاگین‌ها رو هم اینجا باشن
  ],
})
