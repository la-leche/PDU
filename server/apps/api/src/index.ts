import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 8000;

app.get("/", (req: Request, res: Response) => {
	return res.status(200).json();
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
