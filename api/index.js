const Koa = require("koa");
const app = new Koa();
const PORT = 1001;

const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");
const userRoute = require("./userRoute");

app.use(cors());
app.use(bodyParser());
app.use(userRoute.routes());

app.listen(PORT, () => console.log(PORT));
