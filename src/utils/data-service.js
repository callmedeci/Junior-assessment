import { getAuth } from 'firebase/auth';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/database';
import { generateContext } from './ai';

const messageCollection = collection(db, 'user_messages');
const auth = getAuth();

export async function getSnapShot() {
  const querySnapshot = await getDocs(messageCollection);

  const documents = [];
  querySnapshot.forEach((doc) => {
    documents.push({
      ...doc.data(),
    });
  });

  const loggedInUserId = auth.currentUser.uid;
  const userDocs = documents.filter((doc) => doc.user_id === loggedInUserId);
  const sortedDocs = userDocs.sort((a, b) => a.timestamp - b.timestamp);

  return sortedDocs;
}

export async function addMessage(message) {
  const { text: responseText } = await generateContext(message);

  const newMessage = {
    message_text: message,
    response_text: responseText,
    timestamp: new Date().getTime(),
    user_id: auth.currentUser.uid,
  };

  await addDoc(collection(db, 'user_messages'), {
    message_text: message,
    response_text: responseText,
    timestamp: new Date().getTime(),
    user_id: auth.currentUser.uid,
  });

  return newMessage;
}
