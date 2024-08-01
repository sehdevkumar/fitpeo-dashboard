export type ReportCardType = {
  iconSrc: string;
  label: string;
  value: string;
  percent: string;
  isDown: boolean;
};


export type ReportProfitCardType = {
  label: string;
  value: string;
  percent: string;
  isDown: boolean;
  statsData?:any
};