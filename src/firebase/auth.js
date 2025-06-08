import { getAuth, GoogleAuthProvider } from 'firebase/auth';

/**
 * Represents the Google authentication provider.
 * This instance is configured to be used with Firebase Authentication to sign in users
 * via their Google accounts.
 */

export const provider = new GoogleAuthProvider();

/**
 * Represents the Firebase Auth service instance.
 * This is the central object for managing user authentication state, signing users in/out,
 * and handling authentication events within your Firebase project.
 */
export const auth = getAuth();
