"use client";
import { requireAuth } from "@/lib/auth-utils";
import { useTRPC } from "@/trpc/client";
import { trpc } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const trcp = useTRPC()
  const {data}  = useQuery(trpc.getWorkflows.queryOptions)
  
  return <h1>{JSON.stringify(data)}</h1>;
}
