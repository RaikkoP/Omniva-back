import express, { Express, Request, Response } from "express";
import parcels from "./controllers/parcelmachines"
import cors from "cors";

const app: Express = express();

app.use(cors({
  origin: ['http://localhost:3006']
}));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use("/", parcels)

app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});