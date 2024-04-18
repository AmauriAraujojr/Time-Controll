import {z} from "zod"
import { TimesFramesSchema } from "./timeframes.schema"

export const TimesSchema=z.object({
    title:z.string(),
    timeframes:TimesFramesSchema,
})

export type TimeData=z.infer<typeof TimesSchema>