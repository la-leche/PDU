// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_auth_layout from "./routes/(auth)/_layout.tsx";
import * as $_auth_login_index from "./routes/(auth)/login/index.tsx";
import * as $_auth_register_index from "./routes/(auth)/register/index.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_auth_login from "./routes/api/auth/login.ts";
import * as $api_auth_register from "./routes/api/auth/register.ts";
import * as $api_control_getTelemetry from "./routes/api/control/getTelemetry.ts";
import * as $api_control_shutdown from "./routes/api/control/shutdown.ts";
import * as $api_status from "./routes/api/status.ts";
import * as $index from "./routes/index.tsx";
import * as $panel_layout from "./routes/panel/_layout.tsx";
import * as $panel_index from "./routes/panel/index.tsx";
import * as $Login from "./islands/Login.tsx";
import * as $Navbar from "./islands/Navbar.tsx";
import * as $PDU from "./islands/PDU.tsx";
import * as $Register from "./islands/Register.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/(auth)/_layout.tsx": $_auth_layout,
    "./routes/(auth)/login/index.tsx": $_auth_login_index,
    "./routes/(auth)/register/index.tsx": $_auth_register_index,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/auth/login.ts": $api_auth_login,
    "./routes/api/auth/register.ts": $api_auth_register,
    "./routes/api/control/getTelemetry.ts": $api_control_getTelemetry,
    "./routes/api/control/shutdown.ts": $api_control_shutdown,
    "./routes/api/status.ts": $api_status,
    "./routes/index.tsx": $index,
    "./routes/panel/_layout.tsx": $panel_layout,
    "./routes/panel/index.tsx": $panel_index,
  },
  islands: {
    "./islands/Login.tsx": $Login,
    "./islands/Navbar.tsx": $Navbar,
    "./islands/PDU.tsx": $PDU,
    "./islands/Register.tsx": $Register,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
