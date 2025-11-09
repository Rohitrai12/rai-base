// app/page.tsx
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";

export default async function Page() {
  const session = await requireAuth(); // redirect to /login if not signed in
  const data = await caller.getUsers();
  
  return <h1>{JSON.stringify(data)}</h1>;
}
