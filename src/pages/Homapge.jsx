import ResponseForm from '../components/ResponseForm';

import { getAuth } from 'firebase/auth';
import Avatar from '../components/Avatar';
import MessagesList from '../components/MessagesList';

const auth = getAuth();

function Homepage() {
  return (
    <main className='bg-zinc-950/50 p-5 rounded-2xl'>
      <div className='bg-zinc-800/50 flex items-center gap-5 rounded-2xl p-5'>
        <h1 className='text-2xl font-semibold text-zinc-200 mb-2 text-center capitalize'>
          Welcome back{' '}
          <span className='text-indigo-500'>
            {auth.currentUser.displayName}
          </span>
        </h1>

        <div className='flex flex-1 justify-end'>
          <Avatar
            imageSrc={auth.currentUser.photoURL}
            alt={auth.currentUser.displayName}
          />
        </div>
      </div>

      <div className='bg-zinc-800 w-full min-w-3xl max-w-3xl min-h-96 rounded-2xl shadow-md p-5 my-2'>
        <MessagesList />
      </div>

      <div className='bg-zinc-800/75 flex items-center gap-5 rounded-2xl p-5 shadow-md'>
        <ResponseForm />
      </div>
    </main>
  );
}

export default Homepage;
