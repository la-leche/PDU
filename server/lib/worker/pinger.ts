let ping = false;

self.addEventListener("start", function () {
  // ping = true;
  setInterval(async () => {
    const apiUrl = "http://192.168.138.238:80/getTelemetry";
    const resp = await fetch(apiUrl);
    console.log(resp);
    if (resp.status !== 200) {
      console.error("ALARM!!!! DISCONNECTED");
    }
  }, 10 * 1000);
});

// self.addEventListener("stop", function () {
//   ping = false;
// });

// while (ping) {
//   setInterval(async () => {
//     const apiUrl = "http://192.168.138.238/getTelemetry";
//     const resp = await fetch(apiUrl);
//     console.log(resp);
//     if (resp.status !== 200) {
//       console.error("ALARM!!!! DISCONNECTED");
//     }
//   }, 10 * 1000);
// }
