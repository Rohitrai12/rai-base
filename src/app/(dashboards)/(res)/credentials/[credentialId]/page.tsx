import { requireAuth } from '@/lib/auth-utils'
import React from 'react'

interface PageProps {
    params: {
        credentialId: string
    }
}

async function Page ({params}: PageProps) {
    const {credentialId} = params

    if (!credentialId) {
        return <div>Invalid credentialId</div>
    }
 await requireAuth()

    return (
        <div>
            {credentialId && <> Credentials {credentialId}</>}

            {!credentialId && <><div>Invalid credentialId</div></>}
        </div>
    )
}

export default Page
