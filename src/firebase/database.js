import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

/**
 * Firebase configuration object.
 * These values are loaded from Vite's environment variables to keep sensitive
 * API keys and project identifiers out of the public source code.
 *
 * Ensure these variables are defined in your `.env` file (e.g., `.env.local`):
 * ```
 * VITE_API_KEY="YOUR_API_KEY"
 * VITE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
 * VITE_PROJECT_ID="YOUR_PROJECT_ID"
 * VITE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
 * VITE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
 * VITE_APP_ID="YOUR_APP_ID"
 * VITE_MEASUREMENT_ID="YOUR_MEASUREMENT_ID"
 * ```
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

/**
 * Initializes the Firebase application.
 */
const app = initializeApp(firebaseConfig);

/**
 * Gets the Cloud Firestore service instance for the initialized Firebase app.
 */
export const db = getFirestore(app);

/**
 * Gets the Firebase Authentication service instance for the initialized Firebase app.
 */
export const auth = getAuth(app);

export default app;
