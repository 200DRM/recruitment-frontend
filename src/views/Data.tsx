import { useEffect, useMemo, useState } from 'react';
import { Circle, Polygon } from 'react-leaflet';
import styled from 'styled-components';

import { getMainData } from '../helpers/areas';
import { getCookie } from '../helpers/cookie';
import { MainData } from '../app/interfaces';

export const Data = () => {
  const token = getCookie('token') || '';
  const [data, setData] = useState<MainData | undefined>(undefined);

  useEffect(() => {
    if (token) {
      getMainData({ setData, token });
    }
  }, [token]);

  const polygon = useMemo(() => {
    if (data?.coordinates_bounding_box) {
      const {
        coordinates_bounding_box: { bottom, left, right, top },
      } = data;
      const positions: [number, number][] = [
        [top, left],
        [top, right],
        [bottom, right],
        [bottom, left],
      ];

      return (
        <Polygon pathOptions={{ color: 'transparent' }} positions={positions}>
          {data?.data?.map((circleRow: number[], index) => {
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
  }, [data]);

  return polygon || null;
};
