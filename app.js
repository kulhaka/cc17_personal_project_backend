require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const notFoundMiddleware = require("./src/middlewares/not-found");
const errorMiddleware = require("./src/middlewares/error");
const authRouter = require("./src/routes/auth-route");
const wishRouter = require("./src/routes/wish-route");
const pageRouter = require("./src/routes/page-route");
const buyRouter = require("./src/routes/buy-route");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(express.static("public"));

app.use("/auth", authRouter);
app.use("/wish", wishRouter);
app.use("/page", pageRouter);
app.use("/buy", buyRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT || 8886;
app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
