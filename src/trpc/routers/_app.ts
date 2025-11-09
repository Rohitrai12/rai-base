import { z } from 'zod';
import { baseProcedure, createTRPCRouter, protectProcedure } from '../init';
import { prisma } from '@/lib/db';
export const appRouter = createTRPCRouter({
 getUsers: protectProcedure.query(async ({ ctx }) => {
  console.log({ userId: ctx.user.id });
  return prisma.user.findMany({
    where: { id: ctx.user.id },
  });

 })
});
// export type definition of API
export type AppRouter = typeof appRouter;