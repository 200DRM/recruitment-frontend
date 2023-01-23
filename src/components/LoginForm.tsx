import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserData } from '../app/interfaces';
import { Button } from './Button';
import { InputElement } from './InputElement';
import { login } from '../helpers/login';

export const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserData>({ username: '', password: '' });

  const handleSubmit = (e: ChangeEvent<EventTarget>) => {
    e.preventDefault();

    login({ navigate, user });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputElement
        value={user.username}
        name="username"
        label={'Username'}
        setValue={setUser}
      />
      <InputElement
        value={user.password}
        name="password"
        type={'password'}
        label={'Password'}
        setValue={setUser}
      />
      <Button primary type="submit" disabled={false}>
        Log in
      </Button>
    </form>
  );
};
