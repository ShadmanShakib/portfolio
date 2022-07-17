import React from "react";
export interface ServiceInterface {
  id: number;
  title: string;
  description: string;
  varient?: "web" | "mobile" | "api";
}

export type ServiceCardProps = {
  service: ServiceInterface;
};
