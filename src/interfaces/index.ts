export interface IMenuList {
  readonly id: string;
  title: string;
  icon: any;
}

export interface IExercises {
  readonly id: number | string;
  img: string;
  date: string;
  title: string;
  desc: string;
}

export interface IClients {
  readonly id: number | string;
  name: string;
  email: string;
  mobile: string | number;
  coaches: string;
}
