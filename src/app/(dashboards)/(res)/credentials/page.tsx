import { requireAuth } from '@/lib/auth-utils'
import React from 'react'

async function Page() {
   await requireAuth()
  return (
    <div>Credentials</div>
  )
}

export default Page