import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';

export const homepageRouter = createTRPCRouter({
    announcements: publicProcedure
        .input(z.object({ text: z.string() }))
        .query(({ input }) => {
            return {
                greeting: `Hello ${input.text}`,
            };
        }),
    featuredOpportunities:  publicProcedure
        .input(z.object({ text: z.string() }))
        .query(({ input }) => {
            return {
                greeting: `Hello ${input.text}`,
            };
        }),
    highlightMessage:  publicProcedure
        .input(z.object({ text: z.string() }))
        .query(({ input }) => {
            return {
                greeting: `Hello ${input.text}`,
            };
        }),
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.forecast.findMany();
    }),
});
