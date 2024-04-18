import {z} from "zod"

export const DailyOrWeeklyOrMonthlySchema=z.object({
    current:z.number(),
    previous:z.number()
})