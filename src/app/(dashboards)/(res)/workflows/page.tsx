import React from 'react'
import { requireAuth } from '@/lib/auth-utils'

async function Page() {
 await requireAuth()
  return (
    <div>Workflows</div>
  )
}

export default Page