import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase/auth';
import { GoogleLogoIcon } from '@phosphor-icons/react';

function SignInButton() {
  return (
    <button
      className='p-3 bg-zinc-800 text-zinc-200 font-semibold rounded-2xl cursor-pointer flex items-center gap-1 hover:text-indigo-500 hover:bg-zinc-800/70 transition-colors'
      onClick={() => signInWithPopup(auth, provider)}
    >
      <GoogleLogoIcon className='size-7' weight='bold' />
      <span>Sign in with google</span>
    </button>
  );
}

export default SignInButton;
