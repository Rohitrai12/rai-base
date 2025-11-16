import { requireAuth } from '@/lib/auth-utils'
import React from 'react'

interface PageProps {
    params: {
        execuationId: string
    }
}

async function Page ({params}: PageProps) {
    const {execuationId} = params

    if (!execuationId) {
        return <div>Invalid execuationId</div>
    }
 await requireAuth()

    return (
        <div>
            {execuationId && <> Execuations {execuationId}</>}

            {!execuationId && <><div>Invalid execuationId</div></>}
        </div>
    )
}

export default Page
