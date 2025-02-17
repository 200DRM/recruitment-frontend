interface CoordinatesBoundingBox {
  bottom: number;
  left: number;
  right: number;
  top: number;
}

export interface UserData {
  username: string;
  password: string;
}

export interface MainData {
  coordinates_bounding_box: CoordinatesBoundingBox;
  data: number[][];
}

export interface SecondaryData {
  extent: string;
  name: string;
}

export interface IRootState {
  areas: {
    mainData: MainData | undefined;
    secondaryData: SecondaryData | undefined;
  };
}
