export interface MenuPoints{
  icon: string;
  name: string;
  redirectTo: string;
}


export interface Chuusen{
  name: string;
  user: string;
  numbers: NumberData[];
  fraction: number;
  quota: number;
  code: string;
  state: boolean;
  startdate: string;
  duedate: string;
  deletedate: string | null;
}

export interface NumberData{
  value: number;
  selected: boolean;
  state: boolean;
  quantity: number;
}

export interface ChuusenReserveData{
  numbers: NumberData[];
  sorteo: any;
  user: any;
}

export interface ChuusenConfirmData{
  numbers?: NumberData[];
  sorteo: any;
  user: any;
  ticket: string;
  state: boolean;
  stage: string;
  total: number;
  fechacreado: string;

}
