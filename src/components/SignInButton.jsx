import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase/auth';

function SignInButton() {
  return (
    <button
      className='p-3 bg-zinc-800 text-zinc-200 font-semibold rounded-2xl cursor-pointer'
      onClick={() => signInWithPopup(auth, provider)}
    >
      Sign in with google
    </button>
  );
}

export default SignInButton;
