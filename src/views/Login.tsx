import { useState } from 'react';

import { Loader } from '../components/Loader';
import { LoginContext } from '../contexts/login';
import { LoginBackground } from '../components/LoginBackground';
import { LoginForm } from '../components/LoginForm';
import { LoginSidebar } from '../components/LoginSidebar';

export const Login = () => {
  const [loading, setLoading] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      <>
        {!loading ? (
          <Loader />
        ) : (
          <>
            <LoginSidebar>
              <LoginForm />
            </LoginSidebar>
          </>
        )}
      </>
      <LoginBackground />
    </LoginContext.Provider>
  );
};
