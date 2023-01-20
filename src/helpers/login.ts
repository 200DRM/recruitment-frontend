import { API_URLS, BASE_URL } from '../app/apiUrls';
import { UserData } from '../app/interfaces';

export const login = (user: UserData) => {
  const url = `${BASE_URL}${API_URLS.login}`;

  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((response) => console.log(JSON.stringify(response)));
};
