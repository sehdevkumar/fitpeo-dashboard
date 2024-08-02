import React from "react";

export type ReportCardType = {
  color?:string,
  iconSrc: React.ReactNode;
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