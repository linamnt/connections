import {
  ChipIssuer,
  LeaderboardEntryType,
  UpdateLeaderboardEntryRequest,
} from "@types";
import { z } from "zod";

export const StravaRecentRunSchema = z.object({
  distance: z.number(),
});

export const StravaActivityRunStatsSchema = z.object({
  recent_run_totals: StravaRecentRunSchema,
});

export type StravaActivityRunStats = z.infer<
  typeof StravaActivityRunStatsSchema
>;

export function MapStravaActivityStatsToLeaderboardEntryRequest(
  authToken: string,
  chipIssuer: ChipIssuer,
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  resp: any
): UpdateLeaderboardEntryRequest {
  const parsed = StravaActivityRunStatsSchema.parse(resp);
  return {
    authToken: authToken,
    chipIssuer: chipIssuer,
    entryValue: parsed.recent_run_totals.distance,
    entryType: LeaderboardEntryType.STRAVA_PREVIOUS_MONTH_RUN_DISTANCE,
  };
}
