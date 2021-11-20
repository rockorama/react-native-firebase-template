import { initializeApp } from 'firebase/app'

import FIREBASE_CONFIG from '../../firebaseCredentials.json'
import ENV from '../config/environment'

export const app = initializeApp(FIREBASE_CONFIG[ENV])
