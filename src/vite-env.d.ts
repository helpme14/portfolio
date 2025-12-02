/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TURNSTILE_SITEKEY: string
  // Add other env variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
