/// <reference types="astro/client" />

declare namespace App {
  // SeeAI has no server-side runtime state; locale flows through page props.
  interface Locals {}
}
