import { useEffect, useMemo } from 'react';
import { Polygon } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import Terraformer from 'terraformer-wkt-parser';

import { getCookie } from '../helpers/cookie';
import { getSecondaryData } from '../helpers/areas';
import { IRootState } from '../app/interfaces';

export const Secondary = () => {
  const token = getCookie('token') || '';
  const dispatch = useDispatch();
  const { secondaryData } = useSelector((state: IRootState) => state.areas);

  useEffect(() => {
    if (token) {
      getSecondaryData({ dispatch, token });
    }
  }, [token]);

  const polygon = useMemo(() => {
    if (secondaryData?.extent) {
      const { extent } = secondaryData;
      const extendToJSON = Terraformer.parse(extent?.split(';')?.[1]) as any;
      const positions: [number, number][] = extendToJSON?.coordinates?.[0];
      const finalPositions: [number, number][] = [
        [positions[0]?.[1], positions[0]?.[0]],
        [positions[1]?.[1], positions[1]?.[0]],
        [positions[2]?.[1], positions[2]?.[0]],
        [positions[3]?.[1], positions[3]?.[0]],
      ];

      return (
        <Polygon pathOptions={{ color: 'blue' }} positions={finalPositions} />
      );
    }
  }, [secondaryData]);

  return polygon || null;
};
