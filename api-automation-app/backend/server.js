// server.js
import express from 'express';
import bodyParser from 'body-parser';
import collectionsRouter from "./routes/collectionRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/collections', collectionsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
