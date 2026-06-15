// Environment variable typings for Vite
// Keeps TypeScript happy when accessing import.meta.env.VITE_*

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_ADMIN_TEMPLATE: string;
  readonly VITE_EMAILJS_USER_TEMPLATE: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  // add other VITE_ variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
