import { LayoutProps } from "$fresh/server.ts";
import { Navbar } from "../islands/Navbar.tsx";

export default function Layout({ Component }: LayoutProps) {
  return (
    <div class="layout">
      <Navbar
        data={[
          { href: "/", title: "Overview" },
          { href: "/controls", title: "Controls" },
          { href: "/consumption", title: "Consumption" },
          { href: "/logs", title: "Logs" },
          { href: "/docs", title: "Docs" },
        ]}
      />
      <Component />
    </div>
  );
}
