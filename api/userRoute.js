const knex = require("./knex");
const Router = require("koa-router");
const router = new Router();

router.post("/register", async (ctx) => {
  const u = ctx.request.body;
  try {
    await knex("__users").insert(u);
    ctx.body = "reg ok";
  } catch (error) {
    ctx.status = 500;
    ctx.body = "reg not ok";
  }
});

module.exports = router;
