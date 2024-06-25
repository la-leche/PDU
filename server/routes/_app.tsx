import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  const worker = new Worker(
    new URL("../lib/worker/pinger.ts", import.meta.url).href,
    {
      type: "module",
    },
  );
  worker.postMessage("start");
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>server</title>
        <link
          crossorigin="use-credentials"
          rel="manifest"
          href="/manifest.webmanifest"
        />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
