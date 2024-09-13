import admin from 'firebase-admin'
import * as dotenv from 'dotenv'

switch (process.env.NODE_ENV) {
    case 'production':
        dotenv.config({ path: '.env.prod' })
        break
    case 'test':
        dotenv.config({ path: '.env.test' })
        break
}

const serviceAccount =
    process.env.NODE_ENV === 'production'
        ? require('./config/firebase-service-account-prod.json')
        : require('./config/firebase-service-account-dev.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
})

export const db = admin.firestore()
