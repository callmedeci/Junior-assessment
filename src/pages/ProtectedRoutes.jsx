import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import SignInButton from '../components/SignInBUtton';

/**
 * @module ProtectedRoutes
 * @description A React Router component that acts as a guard for routes,
 * ensuring that only authenticated users can access the nested routes.
 * It leverages Firebase Authentication to manage user sessions.
 */

function ProtectedRoutes() {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setCurrentUser(user);
      else setCurrentUser(null);
    });

    return () => unsubscribe();
  }, [auth]);

  if (!currentUser) return <SignInButton />;

  if (currentUser)
    return (
      <div>
        <Outlet />
      </div>
    );
}

export default ProtectedRoutes;
