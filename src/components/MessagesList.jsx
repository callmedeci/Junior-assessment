import { useMessagesContext } from '../store/MessagesContext';
import Loading from './Loading';

function MessagesList() {
  const { messages, isLoading, isAdding } = useMessagesContext();

  if (isLoading)
    return (
      <div className='flex items-center w-full justify-center mt-12'>
        <Loading />
      </div>
    );

  if (messages.length === 0 && !isLoading)
    return (
      <div className='flex items-center w-full justify-center mt-12'>
        <p className='text-xl text-zinc-200'>There is no message!</p>
      </div>
    );

  return (
    <ul className='w-full mt-5 flex flex-col gap-5 max-h-96 overflow-y-auto px-2'>
      {messages.map((message, i) => (
        <MessagesItem key={i} message={message} />
      ))}
      {isAdding && (
        <div className='flex-1 mx-auto'>
          <Loading />
        </div>
      )}
    </ul>
  );
}

function MessagesItem({ message }) {
  return (
    <li className='flex flex-col gap-5'>
      <div className='text-zinc-200 bg-zinc-700/50 p-3 rounded-2xl self-end shadow'>
        {message.message_text}
      </div>

      <div className='text-zinc-200 bg-zinc-700 p-3 rounded-2xl self-start shadow'>
        {message.response_text}
      </div>
    </li>
  );
}

export default MessagesList;
