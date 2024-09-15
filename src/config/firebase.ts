import { initializeApp, cert, ServiceAccount } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import * as dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'local') {
    dotenv.config({
        path: '.env',
    })
}

const serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS || '{}')

initializeApp({
    credential: cert(serviceAccount as ServiceAccount),
})

export const db = getFirestore()
