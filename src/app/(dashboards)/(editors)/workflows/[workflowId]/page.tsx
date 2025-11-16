import React from 'react'
import { requireAuth } from '@/lib/auth-utils'

interface PageProps {
    params: {
        workflowId: string
    }
}

async function Page ({params}: PageProps) {
    const {workflowId} = params

    await requireAuth()

    return (
        <div>
            {workflowId && <> Workflows {workflowId}</>}
        </div>
    )
}

export default Page
