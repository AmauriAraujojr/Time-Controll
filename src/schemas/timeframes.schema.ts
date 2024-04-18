import {z} from "zod"
import { DailyOrWeeklyOrMonthlySchema } from "./daily.schema"

export const TimesFramesSchema=z.object({
    daily:DailyOrWeeklyOrMonthlySchema,
    weekly:DailyOrWeeklyOrMonthlySchema,
    monthly:DailyOrWeeklyOrMonthlySchema,
})