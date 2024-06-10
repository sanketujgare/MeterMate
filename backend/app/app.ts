import express from "express";
import { registerMiddlewares } from "./routes/routes";
import { connectDB } from "./connections/connectToMongo";

export const startServer = async () => {
  try {
    const app = express();
    await connectDB();

    registerMiddlewares(app);
    const { PORT } = process.env;
    app.listen(PORT, () => {
      console.log(`SERVER UP AND RUNNIG ON THE PORT ${PORT}`);
    });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
