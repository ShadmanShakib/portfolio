export interface ServiceInterface {
  id: number;
  title: string;
  description: string;
  varient?: "web" | "mobile" | "api" | string;
}

export type ServiceCardProps = {
  service: ServiceInterface;
};
