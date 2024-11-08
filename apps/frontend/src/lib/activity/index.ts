import { z } from "zod";
import { Activity, ActivityType } from "@/lib/storage/types";
import { ChipIssuer, ChipIssuerSchema } from "@types";

export const RegisterActivityDataSchema = z.object({});
export type RegisterActivityData = z.infer<typeof RegisterActivityDataSchema>;
export const createRegisterActivity = (): Activity => {
  return {
    type: ActivityType.REGISTER,
    serializedData: JSON.stringify({}),
    timestamp: new Date(),
  };
};

export const RegisterChipActivityDataSchema = z.object({
  chipIssuer: ChipIssuerSchema,
  chipId: z.string(),
});
export type RegisterChipActivityData = z.infer<
  typeof RegisterChipActivityDataSchema
>;
export const createRegisterChipActivity = (
  chipIssuer: ChipIssuer,
  chipId: string
): Activity => {
  return {
    type: ActivityType.REGISTER_CHIP,
    serializedData: JSON.stringify({
      chipIssuer,
      chipId,
    }),
    timestamp: new Date(),
  };
};

export const TapActivityDataSchema = z.object({
  chipIssuer: ChipIssuerSchema,
  chipOwnerDisplayName: z.string(),
  chipOwnerUsername: z.string(),
});
export type TapActivityData = z.infer<typeof TapActivityDataSchema>;
export const createTapActivity = (
  chipIssuer: ChipIssuer,
  chipOwnerDisplayName: string,
  chipOwnerUsername: string
): Activity => {
  return {
    type: ActivityType.TAP,
    serializedData: JSON.stringify({
      chipIssuer,
      chipOwnerDisplayName,
      chipOwnerUsername,
    }),
    timestamp: new Date(),
  };
};

export const PSIActivityDataSchema = z.object({
  connectionUsername: z.string(),
});
export type PSIActivityData = z.infer<typeof PSIActivityDataSchema>;
export const createPSIActivity = (connectionUsername: string): Activity => {
  return {
    type: ActivityType.PSI,
    serializedData: JSON.stringify({ connectionUsername }),
    timestamp: new Date(),
  };
};

export const TapBackSentActivityDataSchema = z.object({
  connectionUsername: z.string(),
});
export type TapBackSentActivityData = z.infer<
  typeof TapBackSentActivityDataSchema
>;
export const createTapBackSentActivity = (
  connectionUsername: string
): Activity => {
  return {
    type: ActivityType.TAP_BACK_SENT,
    serializedData: JSON.stringify({ connectionUsername }),
    timestamp: new Date(),
  };
};

export const TapBackReceivedActivityDataSchema = z.object({
  connectionUsername: z.string(),
});
export type TapBackReceivedActivityData = z.infer<
  typeof TapBackReceivedActivityDataSchema
>;
export const createTapBackReceivedActivity = (
  connectionUsername: string,
  timestamp: Date
): Activity => {
  return {
    type: ActivityType.TAP_BACK_RECEIVED,
    serializedData: JSON.stringify({ connectionUsername }),
    timestamp,
  };
};

export const LocationTapActivityDataSchema = z.object({
  locationId: z.string(),
  locationName: z.string(),
});
export type LocationTapActivityData = z.infer<
  typeof LocationTapActivityDataSchema
>;
export const createLocationTapActivity = (
  locationId: string,
  locationName: string
): Activity => {
  return {
    type: ActivityType.LOCATION_TAP,
    serializedData: JSON.stringify({ locationId, locationName }),
    timestamp: new Date(),
  };
};
