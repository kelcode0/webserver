import express, { Router } from "express";
import path from "path";

interface Options {
  port: number;
  routes: Router;
  publicPath?: string;
}

export class Server {
  private readonly app = express();
  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;
  constructor(options: Options) {
    const { port, routes, publicPath } = options;
    this.port = port;
    this.publicPath = publicPath ?? "public";
    this.routes = routes;
  }
  async start() {
    //* Middlewares
    this.app.use(express.json()); // raw
    this.app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded
    //* Public Folder
    this.app.use(express.static(this.publicPath));

    //* Routes
    this.app.use(this.routes);

    this.app.get(/.*/, (req, res) => {
      //const indexPath = path.join(__dirname + "../../${ this.publicPath }/index.html");
      res.sendFile("index.html", { root: this.publicPath });
    });

    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
