import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';

import { API_URLS, BASE_URL } from '../app/apiUrls';
import { setMainData, setSecondaryData } from '../redux/areas';

interface IProps {
  dispatch: Dispatch<AnyAction>;
  token: string;
}

export const getMainData = async ({ dispatch, token }: IProps) => {
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
  await dispatch(setMainData(dataToJSON));
};

export const getSecondaryData = async ({ dispatch, token }: IProps) => {
  const url = `${BASE_URL}${API_URLS.secondary}`;

  const data = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  });
  const dataToJSON = await data.json();
  await dispatch(setSecondaryData(dataToJSON));
};
