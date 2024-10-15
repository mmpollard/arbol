import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getOdds } from "../slate/controllers/odds.ts";

// Mock Context for testing
const mockContext: any = {
  response: {
    body: null,
  },
};

Deno.test("getOdds returns mock odds", async () => {
  await getOdds(mockContext);
  assertEquals(mockContext.response.body.length, 2);
  assertEquals(mockContext.response.body[0].team, "Team A");
});
