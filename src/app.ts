import { Server } from "./presentation";
import { envs } from "./config/envs";
import { AppRoutes } from "./presentation/routes";
(async () => {
  main();
})();

async function main() {
  const server = new Server({
    port: envs.PORT,
    publicPath: envs.PUBLIC_PATH,
    routes: AppRoutes.routes,
  });

  await server.start();
}
