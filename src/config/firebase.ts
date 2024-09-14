import { initializeApp, cert, ServiceAccount } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import * as dotenv from 'dotenv'

dotenv.config({
    path: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.test',
})

const serviceAccount =
    process.env.NODE_ENV === 'production'
        ? require('./firebase-service-account-prod.json')
        : require('./firebase-service-account-test.json')

initializeApp({
    credential: cert(serviceAccount as ServiceAccount),
})

export const db = getFirestore()
