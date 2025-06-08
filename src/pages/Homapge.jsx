import ResponseForm from '../components/ResponseForm';

import { getAuth } from 'firebase/auth';
import Avatar from '../components/Avatar';
import MessagesList from '../components/MessagesList';

const auth = getAuth();

function Homepage() {
  return (
    <div className='bg-zinc-800 w-full min-w-3xl max-w-3xl min-h-96 rounded-2xl shadow-md p-5'>
      <div className='bg-zinc-900/50 flex flex-col gap-5 rounded-2xl p-5'>
        <div className='flex items-center'>
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

        <ResponseForm />
      </div>

      <MessagesList />
    </div>
  );
}

export default Homepage;
