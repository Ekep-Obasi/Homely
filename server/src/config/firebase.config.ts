import admin from 'firebase-admin'
import serviceAccount from '../../serviceAccountKey.json'
import { STORAGE_BUCKET_ID } from '@/constant'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  storageBucket: STORAGE_BUCKET_ID,
})

export const bucket = admin.storage().bucket()

export const auth = admin
