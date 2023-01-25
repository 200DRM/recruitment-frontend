import { useEffect, useMemo, useState } from 'react';
import { Circle, Polygon } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';

import { getMainData } from '../helpers/areas';
import { getCookie } from '../helpers/cookie';
import { MainData } from '../app/interfaces';

interface IRootState {
  areas: {
    mainData: MainData | undefined;
  };
}

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
        <Polygon pathOptions={{ color: 'transparent' }} positions={positions}>
          {mainData?.data?.map((circleRow: number[], index) => {
            const circleLeft = left + Number(`0.00${index + 1}`);
            return (
              <div className="circleRow">
                {circleRow.map((circle: number, i) => {
                  const circleTop = top - Number(`0.00${i + 1}`);

                  return (
                    <Circle
                      center={[circleTop, circleLeft]}
                      //TODO: proper styling
                      pathOptions={{
                        color: 'purple',
                        fill: true,
                        fillOpacity: 1,
                        stroke: false,
                      }}
                      radius={50}
                    />
                  );
                })}
              </div>
            );
          })}
        </Polygon>
      );
    }
  }, [mainData]);

  return polygon || null;
};
