import { Head } from "$fresh/runtime.ts";
import { PDU_Panel } from "../islands/PDU.tsx";

export default function Panel() {
  return (
    <>
      <Head>
        <link
          crossorigin="use-credentials"
          rel="manifest"
          href="/manifest.webmanifest"
        />
      </Head>
      <script type="module">
        import
        "https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate/dist/pwa-update.js";
        const el = document.createElement("pwa-update");
        document.body.appendChild(el);
      </script>
      <PDU_Panel />
    </>
  );
}
