import { Context } from "https://deno.land/x/oak/mod.ts";

// Mock function for fetching odds (can later integrate with real API)
export const getOdds = async (context: Context) => {
  const mockOdds = [
    { team: "Team A", odds: 1.75 },
    { team: "Team B", odds: 2.10 },
  ];

  // Simulate an async operation (e.g., API call)
  context.response.body = mockOdds;
};
