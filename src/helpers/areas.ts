import { API_URLS, BASE_URL } from '../app/apiUrls';

interface IProps {
  setData: any;
  token: string;
}

export const getMainData = async ({ setData, token }: IProps) => {
  const url = `${BASE_URL}${API_URLS.data}`;

  const data = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  });
  const dataToJSON = await data.json();
  setData(dataToJSON);
};
