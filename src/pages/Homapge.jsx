import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import ResponseForm from '../components/ResponseForm';

import { db } from '../firebase/database';
import { getAuth } from 'firebase/auth';

const messageCollection = collection(db, 'user_messages');

function Homepage() {
  const auth = getAuth();

  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function getSnapShot() {
        setIsLoading(true);

        const querySnapshot = await getDocs(messageCollection);

        const documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({
            ...doc.data(),
          });
        });

        const loggedInUserId = auth.currentUser.uid;
        const userDocs = documents.filter(
          (doc) => doc.user_id === loggedInUserId
        );

        setMessages(userDocs);
        setIsLoading(false);
      }

      getSnapShot();
    },
    [auth]
  );

  return (
    <div className='bg-zinc-800 w-full min-w-3xl max-w-3xl min-h-96 rounded-2xl shadow-md p-5'>
      <div className='flex items-center gap-2'>
        <ResponseForm setState={setMessages} />

        <div className='w-12 h-12 rounded-full overflow-hidden'>
          <img
            className='object-cover'
            src={auth.currentUser.photoURL}
            alt={`${auth.currentUser.displayName} profile`}
          />
        </div>
      </div>

      {isLoading ? (
        <div className='flex items-center w-full justify-center mt-12'>
          <p className='text-xl text-zinc-200'>Loading your messages...</p>
        </div>
      ) : null}

      {messages.length !== 0 && !isLoading ? (
        <ul className='w-full mt-5 flex flex-col gap-5 max-h-96 overflow-y-auto px-2'>
          {messages.map((message, i) => (
            <li key={i} className='flex flex-col gap-5'>
              <div className='text-zinc-200 bg-zinc-700/50 p-3 rounded-2xl self-end shadow'>
                {message.message_text}
              </div>

              <div className='text-zinc-200 bg-zinc-700 p-3 rounded-2xl self-start shadow'>
                {message.response_text}
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      {messages.length === 0 && !isLoading ? (
        <div className='flex items-center w-full justify-center mt-12'>
          <p className='text-xl text-zinc-200'>No message found!</p>
        </div>
      ) : null}
    </div>
  );
}

export default Homepage;
