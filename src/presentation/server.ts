import express from "express";
import path from "path";

interface Options {
  port: number;
  publicPath?: string;
}

export class Server {
  private readonly app = express();
  private readonly port: number;
  private readonly publicPath: string;
  constructor(options: Options) {
    const { port, publicPath } = options;
    this.port = port;
    this.publicPath = publicPath ?? "public";
  }
  async start() {
    this.app.use(express.static(this.publicPath));

    this.app.get(/.*/, (req, res) => {
      //const indexPath = path.join(__dirname + "../../public/index.html");
      res.sendFile("index.html", { root: this.publicPath });
    });

    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
