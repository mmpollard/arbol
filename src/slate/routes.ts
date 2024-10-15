import { Router } from "https://deno.land/x/oak/mod.ts";
import { getOdds } from "./controllers/odds.ts";

const router = new Router();

// Define the routes
router
  .get("/", (context) => {
    context.response.body = "Welcome to Sports Betting API!";
  })
  .get("/odds", getOdds);

export default router;
