import { z } from 'zod';
import { createTRPCRouter, protectProcedure } from '../init';
import { prisma } from '@/lib/db';
import { generateText } from 'ai';
import { google } from '@ai-sdk/google';

export const appRouter = createTRPCRouter({

  testAi: protectProcedure.mutation(async () => {
    const { text } = await generateText({
      model: google('gemini-2.5-flash'),
      prompt: 'Invent a new holiday and describe its traditions.',
    });

    return text
  }),

  getWorkflows: protectProcedure.query(async ({ ctx }) => {
    return prisma.workflow.findMany({});
  }),

  createWorkflow: protectProcedure.mutation(() => {
    return prisma.workflow.create({
      data: {
        name: 'test'
      }
    })

  })
});
// export type definition of API
export type AppRouter = typeof appRouter;