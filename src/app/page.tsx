import { trpc } from '@/trpc/client'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import React from 'react'

function Page() {
  const testAI = useMutation(trpc.testAi, mutationOptions())
  return (
    <div>
        
    </div>
  )
}

export default Page