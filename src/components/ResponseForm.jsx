import { useRef } from 'react';
import { useMessagesContext } from '../store/MessagesContext';

function ResponseForm() {
  const ref = useRef(null);
  const { isAdding, addMessage } = useMessagesContext();

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { message } = Object.fromEntries(formData.entries());

    addMessage(message);
    ref.current.reset();
  }

  return (
    <form ref={ref} onSubmit={handleSubmit} className='flex-1'>
      <input
        disabled={isAdding}
        id='message'
        name='message'
        className='bg-zinc-700 w-full rounded-full px-5 py-3 focus:outline-none text-zinc-200 placeholder:text-zinc-500 disabled:opacity-50 disabled:cursor-not-allowed'
        placeholder='Ask something...'
      />
    </form>
  );
}

export default ResponseForm;
