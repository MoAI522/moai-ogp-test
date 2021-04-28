import express from "express";

const app = express();
const port = process.env.PORT || 3000;

const router = express.Router();
router.use(express.static(`${__dirname}/static`));
router.get("*", (_, res) => res.sendFile(`${__dirname}/static/index.html`));

app.use("/", router);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
