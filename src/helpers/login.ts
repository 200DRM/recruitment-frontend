import { NavigateFunction } from 'react-router-dom';
import { API_URLS, BASE_URL } from '../app/apiUrls';
import { UserData } from '../app/interfaces';

interface IProps {
  navigate: NavigateFunction;
  setLoading: (state: boolean) => void;
  user: UserData;
}

export const login = ({ navigate, setLoading, user }: IProps) => {
  const url = `${BASE_URL}${API_URLS.login}`;

  setLoading(true);

  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((response) => {
      const { key } = response;
      document.cookie = `token=${key}; SameSite=None; Secure`;
    })
    .then(() => {
      setLoading(false);
      navigate('/home');
    });
};
