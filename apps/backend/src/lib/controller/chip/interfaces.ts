import { RegisterChipRequest, ChipTapResponse, TapParams } from "@types";
import { Chip } from "./types";

export interface iChipClient {
  RegisterChip(registerChip: RegisterChipRequest): Promise<Chip>;
  GetTapFromChip(tapParams: TapParams): Promise<ChipTapResponse>;
}