import { z } from 'zod';
import { createTRPCRouter, protectProcedure } from '../init';
import { prisma } from '@/lib/db';
export const appRouter = createTRPCRouter({
 getWorkflows: protectProcedure.query(async ({ ctx }) => {
  return prisma.workflow.findMany({});
 }),

 createWorkflow: protectProcedure.mutation(()=>{
  return prisma.workflow.create({
    data: {
      name: 'test'
    }
  })
  
 })
});
// export type definition of API
export type AppRouter = typeof appRouter;