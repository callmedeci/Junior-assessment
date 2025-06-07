import { addDoc, collection } from 'firebase/firestore';
import { useRef } from 'react';
import { db } from '../firebase/database';
import { generateContext } from '../utils/ai';
import { getAuth } from 'firebase/auth';

function ResponseForm({ setState }) {
  const ref = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { message } = Object.fromEntries(formData.entries());

    const auth = getAuth();
    const { text } = await generateContext(message);

    const newMessage = {
      message_text: message,
      response_text: text,
      timestamp: new Date().getTime(),
      user_id: auth.currentUser.uid,
    };

    setState((messages) => [...messages, newMessage]);

    await addDoc(collection(db, 'user_messages'), {
      message_text: message,
      response_text: text,
      timestamp: new Date().getTime(),
      user_id: auth.currentUser.uid,
    });

    ref.current.reset();
  }

  return (
    <form ref={ref} onSubmit={handleSubmit} className='flex-1'>
      <input
        id='message'
        name='message'
        className='bg-zinc-700 w-full rounded-full px-5 py-3 focus:outline-none text-zinc-200 placeholder:text-zinc-500'
        placeholder='Ask something...'
      />
    </form>
  );
}

export default ResponseForm;
