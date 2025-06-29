import { Server } from "./presentation";
import { envs } from "./config/envs";
(async () => {
  main();
})();

async function main() {
  const server = new Server({
    port: envs.PORT,
    publicPath: envs.PUBLIC_PATH,
  });

  await server.start();
}
