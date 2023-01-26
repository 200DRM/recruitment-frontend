import { useEffect, useMemo } from 'react';
import { Polygon } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';

import { getMainData } from '../helpers/areas';
import { getCookie } from '../helpers/cookie';
import { IRootState } from '../app/interfaces';

export const Data = () => {
  const token = getCookie('token') || '';
  const dispatch = useDispatch();
  const { mainData } = useSelector((state: IRootState) => state.areas);

  useEffect(() => {
    if (token) {
      getMainData({ dispatch, token });
    }
  }, [token]);

  const polygon = useMemo(() => {
    if (mainData?.coordinates_bounding_box) {
      const {
        coordinates_bounding_box: { bottom, left, right, top },
      } = mainData;
      const positions: [number, number][] = [
        [top, left],
        [top, right],
        [bottom, right],
        [bottom, left],
      ];

      return (
        <Polygon pathOptions={{ color: 'purple' }} positions={positions} />
      );
    }
  }, [mainData]);

  return polygon || null;
};
