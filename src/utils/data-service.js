import { getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../firebase/database';
import { generateContext } from './ai';

/**
 * @module dataService
 * @description This module provides functions for interacting with Firebase Firestore,
 * specifically for fetching and adding user messages, integrating with the AI service.
 */

/**
 * A reference to the 'user_messages' collection in Firestore.
 * This is the primary collection where user message and AI response pairs are stored.
 */
const messageCollection = collection(db, 'user_messages');

/**
 * The Firebase Auth service instance.
 * Used to get the currently authenticated user's ID for filtering and adding messages.
 */
const auth = getAuth();

/**
 * Fetches all messages for the currently logged-in user from Firestore.
 *
 * This function queries the 'user_messages' collection, filters the documents
 * by the current user's ID, and sorts them by timestamp in ascending order.
 * It's designed to retrieve a snapshot of all messages associated with the active user.
 */
export async function getSnapShot() {
  const loggedInUserId = auth.currentUser.uid;
  if (!loggedInUserId) {
    throw new Error('User not authenticated. Cannot fetch messages.');
  }

  const q = query(
    messageCollection,
    where('user_id', '==', loggedInUserId),
    orderBy('timestamp', 'asc')
  );

  const querySnapshot = await getDocs(q);

  const documents = [];
  querySnapshot.forEach((doc) => {
    documents.push({
      ...doc.data(),
    });
  });

  return documents;
}

export async function addMessage(message) {
  const loggedInUserId = auth.currentUser?.uid;
  if (!loggedInUserId) {
    throw new Error('User not authenticated. Cannot add message.');
  }

  const { text: responseText } = await generateContext(message);

  const newMessage = {
    message_text: message,
    response_text: responseText,
    timestamp: new Date().getTime(),
    user_id: auth.currentUser.uid,
  };

  await addDoc(collection(db, 'user_messages'), newMessage);

  return newMessage;
}
